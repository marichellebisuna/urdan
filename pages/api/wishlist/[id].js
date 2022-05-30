import nc from 'next-connect'
import { deleteWishlist } from '../../../backend/controllers/wishController'
import dbConnect from '../../../config/dbConnect'
import { isAuthenticatedUser } from '../../../middleware/auth'
import ErrorHandler from '../../../utils/errorHandler'

const handler = nc({ErrorHandler})

dbConnect()

handler.use(isAuthenticatedUser).delete(deleteWishlist)


export default handler