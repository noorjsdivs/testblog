// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {createClient} from "@sanity/client";


const client = createClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "6qg7wgdg",
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,

});

export default async function createComment(
    req: NextApiRequest,
     res: NextApiResponse
     ){
    const {_id, name, email, comment } = JSON.parse(req.body);

    try{
        await client.create ({
            _type:"comment",
            post:{
                _type:"reference",
                _ref:_id,
            },
            name,
            email,
            comment
        });
    }catch(err){
        return res.status(500).json({message: "submit Comment",err})
    }
    console.log("comment submited")
    return res.status(200).json({ message: "Jhon Doe"});
}