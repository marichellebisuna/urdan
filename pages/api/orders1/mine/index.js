import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import { isAuthenticatedUser } from '../../middleware/auth'
import onError from '../../../middleware/errors'
import { mineOrder } from '../../../../backend/controllers/orderController';

const handler = nc({ onError });

 dbConnect()

handler.use(isAuthenticatedUser).get(mineOrder);

export default handler;
