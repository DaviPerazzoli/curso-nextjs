import { useState } from "react";
import type { Comments } from "@/data/comments";

function CommentsPage() {
    const [comments, setComments] = useState<Comments>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const fetchComments = async () => {
        setComments([]);
        setLoading(true);
        try{
            const response = await fetch('/api/comments');
            const data: Comments = await response.json();
            setComments(data);
        } catch (erro) {
            if (erro instanceof Error)
                setError(erro.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    

    return(
        <>
        <button onClick={fetchComments}>Load comments</button>
        {loading? 'Loading': ''}
        {error? error: ''}
        {
            comments.map( comment => {
                return (
                <div key={comment.id}>
                    {comment.text}
                </div>
                )
            })
        }
        </>
    )
}

export default CommentsPage;