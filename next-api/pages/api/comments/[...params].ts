import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "@/data/comments";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if( !req.query.params ){
        res.status(400).json({error: 'Parâmetros inválidos'});
        return;
    }
    
    let commentText = ''
    const commentId = req.query.params[0];

    if ( req.query.params[1] ){
        commentText = req.query.params[1];
    }
        

    if ( req.method === 'GET') {
        const comment = comments.find( 
            comment => 
                comment.id === Number( commentId )
        );

        res.status(200).json(comment);
    } else if ( req.method === 'DELETE' ) {
        const deletedComment = comments.find( 
            comment => 
                comment.id === Number( commentId )
        );

        const index = comments.findIndex( 
            comment => 
                comment.id === Number( commentId )
        )

        comments.splice(index, 1);

        res.status(200).json(deletedComment)
    } else if ( req.method === 'PATCH' ) {
        const index = comments.findIndex( 
            comment => 
                comment.id === Number( commentId )
        )

        comments[index].text = commentText as string;
        const updatedComment = comments[index];

        res.status(200).json( updatedComment );
    }
}