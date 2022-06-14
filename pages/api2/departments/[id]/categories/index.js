import nextConnect from 'next-connect';
import { onError } from '../../../../../middleware/errors';
import db from '../../../../../utils/db';
import Department from '../../../../../models/Department';
import dbConnect from '../../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../../middleware/auth';

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
        department.categories.push(req.body);
        const updatedDepartment = await department.save();
        const addedCategory =
          updatedDepartment.categories[updatedDepartment.categories.length - 1];
         
        res.status(201).send(addedCategory);
      } else {
       
        res.status(404).send({ message: 'Department Not Found' });
      }

    })

    export default handler;