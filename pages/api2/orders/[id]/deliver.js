import nextConnect from "next-connect";
import { onError } from "../../../../middleware/errors";
import Order from '../../../../models/Order';
import dbConnect from "../../../../config/dbConnect";
import { authorizeRoles, isAuthenticatedUser } from "../../../../middleware/auth";

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(authorizeRoles, isAuthenticatedUser);

handler.put(async (req, res) => {
  
    const order = await Order.findById(req.query.id);
    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();
        order.transactions.push({
            user: req.user._id,
            userName: req.user.name,
            transactionType: 'DELIVERED',
          });
    
        const updatedOrder = await order.save();
        
        res.send({ message: 'Order Delivered', order: updatedOrder });
        res.send(order);
    } else {
        
        res.status(404).send({ message: 'Order Not Found' });
    }
})

export default handler;