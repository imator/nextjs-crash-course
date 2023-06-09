import Head from "next/head";
const Meta = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
      <meta name="keyword" content={props.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
