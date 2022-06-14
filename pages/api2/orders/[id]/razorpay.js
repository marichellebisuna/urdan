import nextConnect from "next-connect";
import { onError } from "../../../../middleware/errors";
import Order from '../../../../models/Order';
import Razorpay from 'razorpay';
import shortid from 'shortid';
import dbConnect from "../../../../config/dbConnect";
import { isAuthenticatedUser } from "../../../../middleware/auth";

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(isAuthenticatedUser);

handler.get(async (req, res) => {
   
    const order = await Order.findById(req.query.id);
    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentMethod = 'razorpay';
        order.paymentResult = {
            id: req.body.id,
            paymentStatus: req.body.paymentStatus,
        }
        const updatedOrder = await order.save();
       
        res.send({ message: 'Order Paid', order: updatedOrder });

    } else {
        
        res.status(404).send({ message: 'Order Not Found' });
    }
})

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
    callback_url: `${process.env.BASE_URL}/profile`,
    redirect: true,
});

razorpay = nextConnect({
    onError,
});

razorpay.post(async (req, res) => {
    const order = await Order.findById(req.query.id);
    if (order) {
        const payment_capture = 1;
        const currency = 'INR';

        const options = {
            currency,
            receipt: shortid.generate(),
            payment_capture,
        };

        try {
            const response = razorpay.orders.create(options);
            res.json({
                id: response.id,
                currency: response.currency,
            });
        } catch (error) {
            console.log(error);
        }
    }
})

export default { handler, razorpay };