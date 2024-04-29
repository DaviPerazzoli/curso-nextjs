import type { NextApiRequest , NextApiResponse } from "next";
import { comments, type Comments } from "@/data/comments";

export default function handler( 
    req: NextApiRequest , 
    res: NextApiResponse<Comments>
) {
    res.status(200).json(comments);
}