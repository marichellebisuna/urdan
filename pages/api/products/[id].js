import nc from 'next-connect'
import { deleteProduct, getProduct, updateProduct } from '../../../backend/controllers/productsController'
import dbConnect from '../../../config/dbConnect'
import ErrorHandler from '../../../utils/errorHandler'

const handler = nc({ErrorHandler})

dbConnect()

handler.get(getProduct).put(updateProduct).delete(deleteProduct)


export default handler