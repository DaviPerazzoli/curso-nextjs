import { NextApiRequest, NextApiResponse } from "next";

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.setPreviewData({user: 'vishwas'});
    if(typeof req.query.redirect === 'string'){
        res.redirect(req.query.redirect);
    }
}