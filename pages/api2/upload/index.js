/* eslint-disable no-undef */
import nextConnect from 'next-connect';
import User from '../../../models/User';
import { onError } from '../../../middleware/errors';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import dotenv from 'dotenv';
import dbConnect from '../../../config/dbConnect';
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect({ onError });
dbConnect()
const upload = multer();
handler.use(isAuth, upload.single('file')).post(async (req, res) => {
  const streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  const result = await streamUpload(req);
  
  const user = await User.findById(req.user._id, 'images');
  if (user) {
    user.images.unshift({url:result.secure_url, usages:[]});
    await user.save();
  }
 
  res.json(result);
});

export default handler;
