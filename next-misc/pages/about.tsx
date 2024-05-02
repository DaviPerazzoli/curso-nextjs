import Footer from "@/components/Footer";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";

const About: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>About Davi</title>
                <meta name='description' content='Free tutorials on web dev'/>
            </Head>
            <h1 className='content'>About</h1>
        </>
    )
}

export default About;

About.getLayout = function PageLayout(page: ReactElement) {
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}