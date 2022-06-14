import nextConnect from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth';
import User from '../../../models/User';
import db from '../../../utils/db';

const handler = nextConnect();
dbConnect()

handler.use(authorizeRoles, isAuthenticatedUser).get(async (req, res) => {
   
    const searchQuery = req.query.query || 'all';
    const searchFilter =
        searchQuery !== 'all'
            ? {
                name: {
                    $regex: searchQuery,
                    $options: 'i',
                },
            }
            : {};
    const userDocs = await User.find({ ...searchFilter });
   
    const users = userDocs.map(db.convertDocToObj);
    res.send(users);
});

export default handler;