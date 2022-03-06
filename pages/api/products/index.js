import nc from 'next-connect'
import {allProducts, newProduct} from '../../../backend/controllers/productsController'
import ErrorHandler from '../../../utils/errorHandler'
import dbConnect from '../../../config/dbConnect'

const handler=nc({ErrorHandler})

dbConnect()

handler.get(allProducts).post(newProduct)


export default handler;