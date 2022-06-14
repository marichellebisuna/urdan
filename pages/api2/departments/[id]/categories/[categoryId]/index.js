import nextConnect from 'next-connect';
import { onError } from '../../../../../../middleware/errors';
import Department from '../../../../../../models/Department';
import dbConnect from '../../../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../../../middleware/auth';

const handler = nextConnect({
    onError,
});
dbConnect()
handler
.use(authorizeRoles, isAuthenticatedUser)
.get(async (req, res) => {
  
      const department = await Department.findById(req.query.id);
      if (department) {
      const categories = department.categories.find(
        (x) => x._id == req.query.categoryId
      );
     
      res.send(categories)
      }
})
    .use(authorizeRoles, isAuthenticatedUser)
    .delete(async (req, res) => {
      
      const department = await Department.findById(req.query.id);
      if (department) {
        department.categories = department.categories.filter(
          (x) => x._id != req.query.categoryId
        );
        await department.save();

       
        res.send({ message: 'Deleted successfully' });
      } else {
        
        res.status(404).send({ message: 'Not department found' });
      }

    })

    export default handler;