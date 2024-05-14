import { comments } from "../data";
import { redirect } from 'next/navigation'

export async function GET ( _request: Request, 
    context: {params: {id: string}}) {
   
    const commentId = parseInt(context.params.id);

    const inComments = (id: number):boolean => {
        if(comments.find(
            comment => comment.id === id
        )){
            return true;
        }

        return false;
    }

    if ( !inComments(commentId))  {
        redirect('/comments');
    }
    
    const comment = comments.find(comment => comment.id === parseInt(context.params.id))

    return Response.json(comment);
}

export async function PATCH(request: Request, {params}: {params: {id: string}}) {
    const commentId = parseInt(params.id);
    const body = await request.json()
    const { text } = body;

    const index = comments.findIndex(
        comment => comment.id === commentId
    );

    comments[index].text = text;
    const updatedComment = comments[index];

    return Response.json(updatedComment);
}

export async function DELETE (_request: Request, {params}: {params: {id: string}}) {
    const { id: commentId } = params;

    const index = comments.findIndex(
        comment => comment.id === parseInt(commentId)
    );

    const deletedComment = comments[index];

    comments.splice(index,1);

    return Response.json(deletedComment);
}