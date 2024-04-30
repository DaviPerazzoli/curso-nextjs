import type { Comment } from "@/data/comments";
import type { 
    InferGetStaticPropsType, 
    GetStaticProps, 
    GetStaticPaths
} from 'next';

function CommentDetails ({
     comment 
    }: InferGetStaticPropsType<typeof getStaticProps>) {
        return <div key={comment.id}>
            {comment.text}
        </div>
}

export default CommentDetails;

export const getStaticPaths = (async ()=> {
    return {
        paths: [
            {
                params: { commentId: '1'}
            },
            {
                params: { commentId: '2'}
            },
            {
                params: { commentId: '3'}
            }
        ],
        fallback: true
    }
}) satisfies GetStaticPaths;

export const getStaticProps = ( async ( context ) => {

    const { params } = context;

    if (!params){
        return {
            notFound: true
        }
    }

    const commentId = Number(params.commentId);

    const response = await fetch('/api/comments');
    const data: Comment[] = await response.json();
    console.log(data);
    const comment = data[commentId];

    return {
        props: {
            comment
        }
    }
}) satisfies GetStaticProps<{ comment: Comment }>;