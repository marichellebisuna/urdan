import nextConnect from 'next-connect';
import { onError } from '../../../../../../middleware/errors';
import Product from '../../../../../../models/Product';
import dbConnect from '../../../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../../../middleware/auth';

dbConnect()
const handler = nextConnect({
  onError,
})
  .use(authorizeRoles, isAuthenticatedUser)
  .delete(async (req, res) => {
  
    const product = await Product.findById(req.query.id);
    if (product) {
      const image = product.images.find(
        (x) => x == decodeURIComponent(req.query.imagedelete)
      );

      if (image) {
        await Product.updateOne(
          { _id: req.query.id },
          { $pull: { images: decodeURIComponent(req.query.imagedelete) } }
        );

       
        res.send({ message: 'Image Deleted' });
      } else {
        res.status(404).send({ message: 'Image Not Found' });
       
      }
    } else {
     
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

export default handler;
