import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  CONTENT_DELIVERY_ACCESS_TOKEN,
  CONTENT_PREVIEW_ACCESS_TOKEN,
  GRAPHQL_URL,
} from 'app-config';

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const authLink = (preview = false) =>
  setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${
          preview ? CONTENT_PREVIEW_ACCESS_TOKEN : CONTENT_DELIVERY_ACCESS_TOKEN
        }`,
      },
    };
  });

const gqlClient = (preview = false) =>
  new ApolloClient({
    link: authLink(preview).concat(httpLink),
    cache: new InMemoryCache({ addTypename: false }),
  });

export async function executeQuery<RawResponse, TransformedResponse>({
  query,
  preview = false,
  transformer = (response) => response,
  variables = {},
}: {
  query: any;
  preview?: boolean;
  transformer?: (response: RawResponse) => TransformedResponse | RawResponse;
  variables?: Record<string, any>;
}) {
  const { data } = await gqlClient(preview).query<RawResponse>({
    query,
    variables: {
      ...variables,
      preview,
    },
  });

  const transformedData = transformer(data);

  return { data: transformedData };
}