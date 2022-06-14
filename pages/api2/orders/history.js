import nextConnect from 'next-connect';
import { onError } from '../../../middleware/errors';
import db from '../../../utils/db';
import Order from '../../../models/Order';
import dbConnect from '../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth';

const handler = nextConnect({
    onError,
});
dbConnect()
handler.use(authorizeRoles, isAuthenticatedUser).get(async (req, res) => {
    
    const searchQuery = req.query.query || 'all';
    const searchFilter =
        searchQuery !== 'all'
            ? {
                _id: {
                    $regex: searchQuery,
                    $options: 'i',
                },
            }
            : {};
            
    const orderDocs = await Order.find({ ...searchFilter }).populate('user','name');
    
    const orders = orderDocs.map(db.convertDocToObj);
    res.send(orders);
});
export default handler;