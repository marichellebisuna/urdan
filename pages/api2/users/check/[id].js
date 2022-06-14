import nextConnect from 'next-connect';
import dbConnect from '../../../../config/dbConnect';
import User from '../../../../models/User';

const handler = nextConnect();

dbConnect()

handler.get(async (req, res) => {
 
  const user = await User.findById(req.query.id);
  
  if (!user) {
    res.status(404).send({ message: 'User not found' });
  } else {
    res.send({ message: 'User found' });
  }
});
export default handler;
