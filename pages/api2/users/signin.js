import nextConnect from 'next-connect';

import ErrorHandler from '../../../utils/errorHandler';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../utils/auth';
import dbConnect from '../../../config/dbConnect';

const handler = nextConnect({
 ErrorHandler
});

dbConnect()

handler.post(async (req, res) => {
 
  const signedinUser = await User.findOne({
    email: req.body.email,
  });
 

  if (
    signedinUser &&
    bcrypt.compareSync(req.body.password, signedinUser.password)
  ) {
    const token = signToken(signedinUser);
    res.status(200).send({
      success: true,
      _id: signedinUser._id,
      name: signedinUser.name,
      email: signedinUser.email,
      isAdmin: signedinUser.isAdmin,
      avatar: signedinUser.avatar,
      token: token,
    });
  } else {
    res.status(401).send({ message: 'Invalid User or Password' });
  }
});

export default handler;
