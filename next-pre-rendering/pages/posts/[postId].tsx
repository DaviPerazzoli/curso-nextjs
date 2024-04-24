import { useRouter } from "next/router";
import { PostJSON } from "./index";

const Post: React.FC<{post: PostJSON}> = ({ post }) => {
    const router = useRouter();

    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    return (<>
        <h1>{post.id} {post.title}</h1>
        <p>{post.body}</p>
    </>)
}

export async function getStaticPaths() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: PostJSON[] = await response.json();

   

    const paths = data.map(post => {
        return {
            params: {
                postId: post.id.toString()
            }
        }
    })
    
    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            },
        ],
        // paths,
        fallback: true,
    }
}

export async function getStaticProps( context: any ) {
    const { params } = context;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data: PostJSON = await response.json();

    if (!data.id) {
        return {
            notFound: true
        }
    }

    console.log('Generating page for /posts/'+params.postId);

    return {
        props: {
            post: data,
        }
    }
}

export default Post;