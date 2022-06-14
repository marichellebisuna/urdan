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
   
    const products = await setTopratedProducts();
    const topRatedproducts =  products.map((x) => ({
      _id: x._id,
      name: x.name,
      rating: x.rating,
      isToprated: x.isToprated,
    }))
   
    res.status(201).send(topRatedproducts)

  })

 

  export default handler;