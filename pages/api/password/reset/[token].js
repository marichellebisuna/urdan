import nc from 'next-connect'
import dbConnect from '../../../../config/dbConnect'

import { resetPassword } from '../../../../backend/controllers/authController'

import onError from '../../../../middleware/errors'

const handler = nc({ onError });

dbConnect();

handler.put(resetPassword)

export default handler;