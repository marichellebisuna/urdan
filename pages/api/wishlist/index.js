import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import { addWishlist, getWishlist} from '../../../backend/controllers/wishController'
import { isAuthenticatedUser } from '../../../middlewares/auth'
import onError from '../../../middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .get(getWishlist)    
    .post(addWishlist)

export default handler;