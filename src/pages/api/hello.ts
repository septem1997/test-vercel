// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

let counter = 0;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  counter++;
  res.status(200).json({ count: counter })
}
