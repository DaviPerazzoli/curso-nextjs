import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import '@/styles/layout.css'
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWIthLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWIthLayout) {
  
  if ( Component.getLayout ) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return <>
  <Head>
    <title>Davi</title>
    <meta name='description' content='Awesome developer!'/>
  </Head>
    <Header/>
      <Component {...pageProps} />
    <Footer/>
  </>;
}
