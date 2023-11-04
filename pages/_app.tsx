import "../styles/globals.css";
import Tiptap from './Layout'
import type { AppProps } from "next/app";
import Layout from "pages/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}



export default MyApp;
