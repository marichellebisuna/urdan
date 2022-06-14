import nextConnect from 'next-connect';
import { onError } from '../../../../../middleware/errors';
import Setting from '../../../../../models/Setting';
import dbConnect from '../../../../../config/dbConnect';
import {authorizeRoles, isAuthenticatedUser} from '../../../../../middleware/auth'

const handler = nextConnect({
  onError,
});
dbConnect()
handler
  .use(authorizeRoles, isAuthenticatedUser)
  .get(async (req, res) => {
    
    const setting = await Setting.findById({ _id: req.query.id });
   
    res.send(setting);
  })

  .use(authorizeRoles, isAuthenticatedUser)
  .put(async (req, res) => {
    
    const setting = await Setting.findById({ _id: req.query.id });
    if (setting) {
      setting.siteName = req.body.siteName;
      setting.pageSize = req.body.pageSize;
      setting.siteLogo = req.body.siteLogo;
      setting.isActive = req.body.isActive;
      setting.theme = req.body.theme;
      const updatedSetting = await setting.save();
     
      res.send({
        message: 'Setting Updated By Admin',
        data: updatedSetting,
      });
    } else {
     
      throw Error('Setting does not exist.');
    }

  })

  .use(authorizeRoles, isAuthenticatedUser)
  .delete(async (req, res) => {
   
    const setting = await Setting.findOne({ _id: req.query.id });
    if (setting) {
      const deletedSetting = await setting.remove();
     
      res.send(deletedSetting);
    } else {
     
      res.status(404).send('Setting Not Found.');
    }

  })


  export default handler;