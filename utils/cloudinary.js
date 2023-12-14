// import dotenv, to let use the sercrets in the dotenv
import dotenv from "dotenv";

import { v2 as cloudinary } from "cloudinary";

// config dotenv
dotenv.config();

cloudinary.config({
  api_key: process.env.API_KEY,
  cloud_name: process.env.CLOUD_NAME,
  api_secret: process.env.API_SECRET,
});

export default cloudinary;

// let store the sercets in dotenv file.
//make sure you have added the api secret in the dotenv file

// THE END OF env.API_SECRET and other must be the name
//you specified in the dotenv file
