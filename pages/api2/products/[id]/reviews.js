import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors';
import Product from '../../../../models/Product';
import dbConnect from '../../../../config/dbConnect';
import { isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
  onError,
});
dbConnect()

handler.get(async (req, res) => {
 
  const product = await Product.findById(req.query.id);
  if (product) {
    res.send(product.reviews);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
 
});
handler.use(isAuthenticatedUser).post(async (req, res) => {
 
  const product = await Product.findById(req.query.id);
 
  if (product) {
    const existReview = product.reviews.find((x) => x.user == req.user._id);
    if (existReview) {
      await Product.updateOne(
        { _id: req.query.id, 'reviews._id': existReview._id },
        {
          $set: {
            'reviews.$.comment': req.body.comment,
            'reviews.$.rating': Number(req.body.rating),
          },
        }
      );
     
      return res.send({ message: 'Review updated' });
    }
    const review = {
      user: mongoose.Types.ObjectId(req.user._id),
      name: req.user.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((a, c) => c.rating + a, 0) /
      product.reviews.length;
    const updatedProduct = await product.save();

   
    res.status(201).send({
      message: 'Review submitted',
      review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
    });
  } else {
   
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default handler;
