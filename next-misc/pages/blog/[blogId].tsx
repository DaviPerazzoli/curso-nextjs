import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

function Blog ( {title, description} : InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description}/>
        </Head>
        <h1 className='content'>Article</h1>
        </>
    )
}

export default Blog;

export const getServerSideProps = (async () => {
    return {
        props: {
            title: 'Article title',
            description: 'Article description'
        }
    }
}) satisfies GetServerSideProps<{
    title: string; description: string;
}>