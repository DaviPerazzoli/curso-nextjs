import type { Comment } from "@/data/comments";
import type { 
    InferGetStaticPropsType, 
    GetStaticProps, 
    GetStaticPaths
} from 'next';

function CommentDetails ({
     comment
    }: InferGetStaticPropsType<typeof getStaticProps>) {
        if(!comment){
            return 
        }
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
    
    const response = await fetch('http://localhost:3000/api/comments');
    const data: Comment[] = await response.json();
    
    if (commentId > data.length || commentId === 0){
        return {
            notFound: true
        }
    }

    const comment = data[commentId-1];

    return {
        props: {
            comment
        }
    }
}) satisfies GetStaticProps<{ comment: Comment}>;