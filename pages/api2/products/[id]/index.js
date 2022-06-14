import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors';
import db from '../../../../utils/db';
import Product from '../../../../models/Product';
import slugify from 'slugify';
import dbConnect from '../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
  onError,
});
dbConnect()
handler
  .get(async (req, res) => {
   
    const product = await Product.findById(req.query.id);
   
    res.send(product);
  })
  .use(authorizeRoles, isAuthenticatedUser)
  .delete(async (req, res) => {
    
    const product = await Product.findById(req.query.id);
    if (product) {
      const deletedProduct = await product.remove();
     
      res.send({ message: 'Product Deleted', product: deletedProduct });
    } else {
     
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
  .use(authorizeRoles, isAuthenticatedUser)
  .put(async (req, res) => {
    
    const product = await Product.findById(req.query.id);
    if (!req.user.isAdmin && product.seller.toString() !== req.user._id) {
      return res.status(401).send({
        message: 'Can not update this product. It is not your product.',
      });
    }
    if (product) {
      // Is Admin or A Right Seller
      if (product.countInStock < req.body.countInStock) {
        // create transaction BUYED for qty
        product.transactions.push({
          user: req.user._id,
          qty: req.body.countInStock - product.countInStock,
          transactionType: 'BUYED',
          description: 'Add new items',
        });
      }

      product.name = req.body.name;
      product.slug = slugify(req.body.name);
      product.price = req.body.price;
      product.cities = req.body.cities || [];
      product.featured = req.body.featured;
      product.oldPrice = req.body.oldPrice;
      product.buyPrice = req.body.buyPrice;
      product.name = req.body.name;
      product.image = req.body.image;
      product.images = req.body.images;
      product.department = req.body.department;
      product.category = req.body.category;
      product.subcategory = req.body.subcategory;
      product.brand = req.body.brand;
      product.reviews = req.body.reviews;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      product.discount = req.body.discount;
      const updatedProduct = await product.save();
      await db.disconnect();
      res.send({ message: 'Product Updated', product: updatedProduct });
    } else {
      await db.disconnect();
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
export default handler;
