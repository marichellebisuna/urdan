import nextConnect from 'next-connect';
import { isAuthenticatedUser } from '../../../middleware/auth';


const handler = nextConnect();

handler.use(isAuthenticatedUser).get(async (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
export default handler;
