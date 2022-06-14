import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import dbConnect from '../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth';

const handler = nextConnect();

dbConnect()

handler
    .use(isAuthenticatedUser)
    .get(async (req, res) => {
       
        const user = await User.findById(req.query.id);
      
        res.send(user);
    })
    .use(authorizeRoles, isAuthenticatedUser)
    .put(async (req, res) => {
       
        const user = await User.findById(req.query.id);
        if (user) {
            user.name = req.body.name;
            user.email = req.body.email;
            user.isAdmin = Boolean(req.body.isAdmin);
            if (req.body.password) {
                user.password = bcrypt.hashSync(req.body.password, 8);
            }
            await user.save();
          
            res.status(200).json({
                success: true,
            });
        } else {
            
            res.status(404).send({ message: 'User not found' });
        }
    })
    .use(authorizeRoles, isAuthenticatedUser)
    .delete(async (req, res) => {
      
        const user = await User.findById(req.query.id);
        if (user) {
            if (user.isAdmin) {
                res.status(400).send({ message: "Admin can't be deleted" });
            }
            const deletedUser = await user.remove();
           
            res.send({ message: 'User Deleted', user: deletedUser });
        } else {
           
            res.status(404).send({ message: 'User Not Found' });
        }
    });
export default handler;