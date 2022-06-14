import nextConnect from 'next-connect';
import { onError } from '../../../../middleware/errors';
import Setting from '../../../../models/Setting';
import dbConnect from '../../../../config/dbConnect';
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth';

const handler = nextConnect({
  onError,
});

dbConnect()
handler
  .use(authorizeRoles, isAuthenticatedUser)
  .get(async (req, res) => {
    
    const settings = await Setting.find();
    
    res.send(settings);
  })
  .use(authorizeRoles, isAuthenticatedUser)
  .post(async (req, res) => {
    
    const setting = new Setting({
      siteName: 'amazona',
      pageSize: '1',
      siteLogo: '/images/logo.png',
      theme: 'light',
    });

    const createdSetting = await setting.save();
   
    if (createdSetting) {
      res.status(201).send({
        setting: createdSetting,
        message: 'Setting Created Successfully',
      });
    } else {
      res.status(500).send({ message: 'Error in creating Setting' });
    }
  });

export default handler;
