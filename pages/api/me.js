import nc from 'next-connect'
import dbConnect from '../../config/dbConnect'

import { currentUserProfile } from '../../backend/controllers/authController'

import { isAuthenticatedUser } from '../../middleware/auth'
import onError from '../../middleware/errors'

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(currentUserProfile)

export default handler;