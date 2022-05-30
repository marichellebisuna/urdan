import nc from 'next-connect'
import { createOrder, myOrder} from '../../../backend/controllers/orderController'
import dbConnect from '../../../config/dbConnect'
import { isAuthenticatedUser} from '../../../middleware/auth'
import ErrorHandler from '../../../utils/errorHandler'

const handler = nc({ErrorHandler})

dbConnect()

handler.use(isAuthenticatedUser).post(createOrder).get(myOrder);



export default handler;
