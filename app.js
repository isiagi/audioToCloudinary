// import expressjs
import express from "express";
import upload from "./utils/multer.js";
import cloudinaryUploader from "./utils/cloudinaryUplaoder.js";
// make sure to add .js on import files

// initialize express instance
const app = express();

// simple route example
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello There" });
});

// route to handle posting of files and the upload.

app.post("/uploadAudio", upload, async (req, res) => {
  // check for any file validation errors from multer
  if (req.fileValidationError) {
    return res
      .status(400)
      .json({ message: `File validation error: ${req.fileValidationError}` });
  }

  //   invoke the uplader function to handle the upload to cloudinary

  //   we are passing the req, and res to cloudinaryUploader function
  const audioResponse = await cloudinaryUploader(req, res);

  //   send response with audio response from cloudinary

  return res.status(200).json({ audioResponse: audioResponse.secure_url });
});

// create a port
const PORT = process.env.PORT || 3000;

// make app listen on port

app.listen(PORT, function () {
  console.log(`Server Up and Runing on http://localhost:${PORT}`);
});
