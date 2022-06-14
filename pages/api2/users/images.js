import nextConnect from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { isAuthenticatedUser } from '../../../middleware/auth';
import User from '../../../models/User';

const handler = nextConnect();

dbConnect()

handler.use(isAuthenticatedUser).get(async (req, res) => {
 
  const user = await User.findById(req.user._id, 'images');
 
  res.send(user.images);
});

export default handler;
