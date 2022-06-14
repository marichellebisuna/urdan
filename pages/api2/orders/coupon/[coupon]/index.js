import nextConnect from "next-connect";
import { onError } from "../../../../../middleware/errors";
import Coupon from '../../../../../models/Coupon';
import dbConnect from "../../../../../config/dbConnect";

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(isAuthenticatedUser).get(async (req, res) => {
    
    const coupon = await Coupon.findOne({ name: req.query.coupon });
    if (coupon) {
        
        res.send({ discount: coupon.discount });
    } else {
        
        res.status(400).send({ message: 'Coupon does not exist' });
    }
})

export default handler;