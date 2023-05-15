import Head from "next/head";
export interface Props {
  title: string;
  image: string;
  functions: string[];
}
export default function PostHead(props: Props) {
  return (
    <Head>
      <title> {props.title} </title>
      <meta name="description" content={props.functions.join(" ")} />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.functions.join(" ")} />
      <meta property="og:image" content={props.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.functions.join(" ")} />
      <meta name="twitter:image" content={props.image} />
    </Head>
  );
}
