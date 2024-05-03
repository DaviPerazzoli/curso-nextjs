import { InferGetStaticPropsType , GetStaticProps } from "next";

function News({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <h1 className='content'>{data}</h1>
}

export const getStaticProps: GetStaticProps<{data: string}> = async ( context ) => {
    return {
        props: {
            data: context.preview ?'List of draft articles' : 'List of published articles'
        }
    }
}

export default News;