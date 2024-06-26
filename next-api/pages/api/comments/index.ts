import type { NextApiRequest , NextApiResponse } from "next";
import { comments, type Comment } from "@/data/comments";

export default function handler( 
    req: NextApiRequest , 
    res: NextApiResponse<Comment[] | Comment>
) {
    if (req.method === 'GET'){
        res.status(200).json(comments);
    }else if (req.method === 'POST') {
        const comment = req.body.comment;
        const newComment = {
            id: Date.now(),
            text: comment
        }

        comments.push(newComment);
        res.status(201).json(newComment);
    }
    
}