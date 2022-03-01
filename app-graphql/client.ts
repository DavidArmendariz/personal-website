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

export const gqlClient = (preview = false) =>
  new ApolloClient({
    link: authLink(preview).concat(httpLink),
    cache: new InMemoryCache(),
  });
