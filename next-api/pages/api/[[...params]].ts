import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let params = req.query.params;

    if (!params){
        params = ['vazio'];
    }

    console.log(params);
    res.status(200).json(params);
}
