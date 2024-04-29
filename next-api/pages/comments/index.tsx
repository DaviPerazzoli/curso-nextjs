import { useState } from "react";
import type { Comment } from "@/data/comments";

function CommentsPage() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [comment, setComment] = useState('');

    const fetchComments = async () => {
        setComments([]);
        setLoading(true);
        try{
            const response = await fetch('/api/comments');
            const data: Comment[] = await response.json();
            setComments(data);
        } catch (erro) {
            if (erro instanceof Error)
                setError(erro.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }

    return(
        <>
        <input 
            type='text' 
            value={comment} 
            onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit comment</button>
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