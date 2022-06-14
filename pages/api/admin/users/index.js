import nc from 'next-connect'
import dbConnect from '../../config/dbConnect'

import { currentUserProfile } from '../../backend/controllers/authController'


import onError from '../../middleware/errors'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles).get(catchAsyncErrors(async (req, res) => {

  const users = await User.find();

  res.status(200).json({
      success: true,
      users
  })

}))

export default handler;