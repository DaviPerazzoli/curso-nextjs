import { useRouter } from "next/router";
import { PostJSON } from "./index";

const Post: React.FC<{post: PostJSON}> = ({ post }) => {
    return (<>
        <h1>{post.id} {post.title}</h1>
        <p>{post.body}</p>
    </>)
}

export async function getStaticPaths() {
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
        fallback: false,
    }
}

export async function getStaticProps( context: any ) {
    const { params } = context;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data: PostJSON = await response.json();

    return {
        props: {
            post: data,
        }
    }
}

export default Post;