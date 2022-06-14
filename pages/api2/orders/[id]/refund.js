import nextConnect from "next-connect";
import { onError } from "../../../../middleware/errors";
import Order from '../../../../models/Order';
import Product from '../../../../models/Product';
import dbConnect from "../../../../config/dbConnect";
import { isAuthenticatedUser } from "../../../../middleware/auth";

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(isAuthenticatedUser);

handler.put(async (req, res) => {
    
    const order = await Order.findById(req.query.id);
    if (order) {
        order.isRefunded  = true;
        order.refundedAt = Date.now();
        const updatedOrder = await order.save();
        order.transactions.push({
            user: req.user._id,
            userName: req.user.name,
            transactionType: 'REFUNDED',
          });
          for (const index in updatedOrder.orderItems) {
            const item = updatedOrder.orderItems[index];
            const productP = await Product.findOne(item.product);
            const product = await Product.findById(productP);
            product.countInStock += item.quantity;
            product.sold -= item.quantity;
            product.transactions.push({
              user: req.user._id,
              qty: -item.quantity,
              transactionType: 'REFUND',            
              description: `Refunded order ${updatedOrder._id}`,
            });
            
            await product.save();
          }
        
        res.send({ message: 'Order Refunded', order: updatedOrder });
        res.send(order);
    } else {
        
        res.status(404).send({ message: 'Order Not Found' });
    }
})

export default handler;