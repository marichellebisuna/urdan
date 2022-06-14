import nextConnect from 'next-connect';
import { onError } from '../../../../../../../middleware/errors';
import Department from '../../../../../../../models/Department';
import dbConnect from '../../../../../../../config/dbConnect';

const handler = nextConnect({
    onError,
});
dbConnect()
handler
    .use(authorizeRoles, isAuthenticatedUser)
    .post(async (req, res) => {
      
      const { departmentId } = req.query;
      const department = await Department.findById(departmentId);
      if (department) {
    
        const category = department.categories.find(
          (x) => x._id == req.params.categoryId
          )
       if(category){
          category.subcategories.push(req.body);
          const updatedCategory = await category.save();
        
          const addedSubCategory =
           updatedCategory.subcategories[updatedCategory.subcategories.length - 1];
          
          
             res.status(201).send(addedSubCategory);
       }else {
        
         res.status(404).send({ message: 'No category is found' });
       }
        
       await department.save();
      
        }else {
         
         res.status(404).send({ message: 'No department found' });
       }

    })

    export default handler;