import Head from 'next/head';

const PageHead: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageHead;
