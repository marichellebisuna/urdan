import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import { historyOrder} from '../../../../backend/controllers/orderController'
import { isAuthenticatedUser, authorizeRoles } from '../../../../middleware/auth'
import onError from '../../../middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser, authorizeRoles)
    .get(historyOrder)    
   

export default handler;