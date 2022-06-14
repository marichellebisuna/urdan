import nc from 'next-connect'
import dbConnect from '../../config/dbConnect'

import { currentUserProfile } from '../../backend/controllers/authController'


import onError from '../../middleware/errors'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import catchAsyncErrors from '../../../../middleware/catchAsyncErrors'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles)

handler.get(catchAsyncErrors(async (req, res) => {

  const user = await User.findById(req.query.id);

  if (!user) {
      return next(new ErrorHandler('User not found with this ID.', 400))
  }

  res.status(200).json({
      success: true,
      user
  })

}))

handler.put(catchAsyncErrors(async (req, res) => {

  const newUserData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role,
  }

  const user = await User.findByIdAndUpdate(req.query.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false
  });

  res.status(200).json({
      success: true
  })

}))

handler.delete(catchAsyncErrors(async (req, res) => {

  const user = await User.findById(req.query.id);

  if (!user) {
      return next(new ErrorHandler('User not found with this ID.', 400))
  }

  // Remove avatar 
  const image_id = user.avatar.public_id;
  await cloudinary.v2.uploader.destroy(image_id)


  await user.remove();

  res.status(200).json({
      success: true,
      user
  })

})
)

export default handler;