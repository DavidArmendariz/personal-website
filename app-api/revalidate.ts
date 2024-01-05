import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  try {
    let revalidated = false;
    if (typeof req.query.revalidatePath === 'string') {
      await res.unstable_revalidate(req.query.revalidatePath);
      revalidated = true;
    }
    return res.json({ revalidated });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
