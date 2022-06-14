import nextConnect from 'next-connect';
import { onError } from '../../../middleware/errors';
import dbConnect from '../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth';


const handler = nextConnect({
  onError,
});
dbConnect()
handler
  .use(authorizeRoles, isAuthenticatedUser)
  .get(async (req, res) => {
   
    const products = await setBestSelleingProducts();
    const bestSellingproducts =  products.map((x) => ({
      _id: x._id,
      name: x.name,
      sold: x.sold,
      isBestSeller: x.isBestSeller,
    }))
   
    res.status(201).send(bestSellingproducts)

  })

 
  export default handler;