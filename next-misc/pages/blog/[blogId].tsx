import { truncate } from "fs";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

function Blog ( {title, description} : InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticPaths = (async () => {
    return {
      paths: [
        {
          params: {
            blogId: '1',
          },
        }
      ],
      fallback: false
    }
  }) satisfies GetStaticPaths;

export const getStaticProps = (async () => {
    return {
        props: {
            title: 'Article title',
            description: 'Article description'
        }
    }
}) satisfies GetStaticProps<{
    title: string; description: string;
}>