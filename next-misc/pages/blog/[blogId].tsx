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
        <h1 className='content'>Env analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
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
  const user = process.env.DB_USER as string;
  const password = process.env.DB_PASSWORD as string;

  console.log(`Connecting to database with username ${user} and password ${password}`)
  return {
      props: {
          title: 'Article title',
          description: 'Article description'
      }
  }
}) satisfies GetStaticProps<{
    title: string; description: string;
}>