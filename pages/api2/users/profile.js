import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import { isAuth, signToken } from '../../../utils/auth';
import ErrorHandler from '../../../utils/errorHandler'
import dbConnect from '../../../config/dbConnect';
import { isAuthenticatedUser } from '../../../middleware/auth';

const handler = nextConnect({
  ErrorHandler
});

dbConnect()

handler.use(isAuthenticatedUser).put(async (req, res) => {
 
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.avatar = req.body.avatar;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8);
    }
    const updatedUser = await user.save();
   
    const token = signToken(updatedUser);
    res.status(200).json({
      success: true,
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      avatar: updatedUser.avatar,
      token: token,
      message: 'Profile Updated SuccessFully',
    });
  } else {
   
    res.status(404).send({ message: 'User not found' });
  }
});

export default handler;
