import "@/styles/global.css";
import DynamicWebFontLoader from "@/config/webFontLoader";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Awal Plastics</title>
      </Head>
      <DynamicWebFontLoader />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
