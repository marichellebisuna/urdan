import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { forgotPassword } from '../../../backend/controllers/authController'

import onError from '../../../middleware/errors'

const handler = nc({ onError });

dbConnect();

handler.post(forgotPassword)

export default handler;