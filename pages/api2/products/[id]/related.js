import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors'
import Product from '../../../../models/Product'
import dbConnect from '../../../../config/dbConnect';


const handler = nextConnect({
    onError,
});

dbConnect()

handler.get(async (req, res) => {
   
    const product = await Product.findById(req.query.id);
    
    if (product) {
        const relatedProducts = await Product.find({
            _id: { $ne: product._id },
            subcategory: product.subcategory,
        })
       
        res.status(201).send(relatedProducts)
    } else {
       
        res.status(404).send({ message: 'Related Product Not Found' });
    }

});
export default handler;