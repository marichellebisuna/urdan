import nextConnect from 'next-connect';
import { onError } from '../../.././../middleware/errors';
import Product from '../../../../models/Product';
import dbConnect from '../../../../config/dbConnect';
import { isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
  onError,
});

dbConnect()

handler.use(isAuthenticatedUser).get(async (req, res) => {
 
  const userId = req.user._id;
  const productId = req.query.id;
  const product = await Product.findById(productId);
  
  if (product) {
    const userReview = product.reviews.find((review) => review.user == userId);
    if (userReview) {
      res.send({ message: 'review found', review: userReview });
    } else {
      res.send({ message: 'review not found' });
    }
  } else {
    res.send({ message: 'product not found' });
  }
});
export default handler;
