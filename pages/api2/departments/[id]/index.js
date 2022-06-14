import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors';
import Department from '../../../../models/Department';
import dbConnect from '../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
    onError,
});
dbConnect()
handler
    .use(authorizeRoles, isAuthenticatedUser)
    .get(async (req, res) => {
     
     
      const department = await Department.findById({ _id: req.query.id });
     
       res.send(department);

    })

    export default handler;