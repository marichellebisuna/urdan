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
      const subCategory = department.categories.map(
        (x) => x.subcategories.find(
          (s) => s._id == req.query.subCategoryId
        )
      );

     
      res.send(subCategory)
      }
})
   
    export default handler;