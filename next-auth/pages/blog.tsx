import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession , useSession} from "next-auth/react";

function Blog({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {data: session, status} = useSession();
    return <h1>Blog page - {data}</h1>
}

export default Blog;

export const getServerSideProps = (async (context) => {
    const session = await getSession(context);

    if(!session){
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
            data: session ? 'List of 100 blog posts': 'List of free blog posts'
        }
    }
}) satisfies GetServerSideProps<{data: string}>