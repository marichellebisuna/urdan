import nextConnect from "next-connect";
import { onError } from "../../../../middleware/errors";
import db from "../../../../utils/db";
import Order from '../../../../models/Order';
import dbConnect from "../../../../config/dbConnect";
import { authorizeRoles, isAuthenticatedUser } from "../../../../middleware/auth";

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(isAuthenticatedUser);

handler.get(async (req, res) => {
   
    const order = await Order.findById(req.query.id);
    
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
})
    .use(authorizeRoles, isAuthenticatedUser)
    .delete(async (req, res) => {
        await db.connect();
        const order = await Order.findById(req.query.id);
        if (order) {
            const deletedOrder = await order.remove();
            
            res.send({ message: 'Order Deleted', order: deletedOrder });
        } else {
          
            res.status(404).send({ message: 'Order Not Found' });
        }
    });

export default handler;