import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    pokemon: {name: string}
  }

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>)  {
        const { id } = req.query
        res.status(200).json({ pokemon: {
            name: '포켓몬 아이디 ' + id
        } })
}