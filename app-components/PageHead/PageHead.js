import Head from 'next/head';

export default function PageHead({ title, favicon = '/favicon.ico' }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={favicon} />
    </Head>
  );
}
