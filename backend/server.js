const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const itemModel = require("./models/items.js");
const itemtestModel = require("./models/itemstest.js");
const pdfModel = require("./models/pdf.js");
const multer = require("multer"); 
const Grid = require("gridfs-stream");

//importing schema              
require("./models/imageuploader.js");  
const Images = mongoose.model("ImageDetails"); 

require("./models/passportimageuploader.js");
const PassImages = mongoose.model("PassportImage");

require("./models/applicant.js"); 
const ApplicantImages = mongoose.model("Applicant");

require("./models/testapplicantmultipleimage.js"); 
const TestApplicantimg = mongoose.model("TestApplicantimg");

dotenv.config();

mongoose 
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
const conn = mongoose.connection;
let gfs; // Declare gfs variable

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo); // Initialize gfs
  gfs.collection("uploads"); // Set the collection name (optional)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for uploading PDF to MongoDB
app.post("/uploadpdf", upload.single("pdf"), async (req, res) => {
  const file = req.file;

  if (!file) {
      return res.status(400).send("No file uploaded.");
  }

  const writestream = gfs.createWriteStream({
      _id: new mongoose.Types.ObjectId(), // Create a new ObjectID
      filename: file.originalname,
      contentType: file.mimetype,
  });

  writestream.on("close", async (file) => {
      const pdfData = new pdfModel({
          filename: file.filename,
          contentType: file.contentType || 'application/pdf',
          size: file.length || 0,
      });

      try {
          await pdfData.save();
          res.json({ message: "File uploaded successfully", file });
      } catch (error) {
          res.status(500).json({ message: "Error saving PDF metadata", error });
      }
  });

  writestream.write(file.buffer);
  writestream.end();
});
// Other routes...

app.get("/cv-builder-1", async (req, res) => {
  const response = await itemtestModel.find();
  return res.json({ itemtests: response });
});

app.post("/cv-builder-1", async (req, res) => {
  const newItem = new itemtestModel(req.body);
  try {
    const savedItem = await newItem.save();
    return res.status(201).json(savedItem);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

app.delete("/cv-builder-1", async (req, res) => {
  const nameToDelete = req.query.name;
  try {
    const result = await itemtestModel.deleteMany({ name: nameToDelete });
    if (result.deletedCount > 0) {
      return res.status(200).json({ message: "Items deleted successfully" });
    } else {
      return res.status(404).json({ message: "No items found with that name" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}); 

app.get("/api/keys/google", (req, res) => { 
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





/////////////////////////////////////////////////


// const multer = require("multer");

// const path = require("path");

const storagee = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../cv-builder-1-main/src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname); 
  },
});

const uploadd = multer({ storage: storagee });

app.post("/upload-image", uploadd.single("image"), async (req, res) => {
  console.log(req.body);  
  const imageName = req.file.filename; 
 
  try { 
    await Images.create({ image: imageName });
    res.json({ status: "ok" }); 
  } catch (error) {  
    res.json({ status: error });
  }
}); 

app.get("/get-image", async (req, res) => {
  try {
    Images.find({}).then((data) => {
      res.send({ status: "ok", data: data }); 
    });
  } catch (error) {  
    res.json({ status: error });
  } 
});

///////////////////////////////////  

const fs = require('fs');
// const path = require('path');

// Add this route to your Express app
app.delete("/delete-images", async (req, res) => {
  try { 
    // Find all images in the database
    const images = await Images.find({});
    
    // Delete each image file from the file system
    images.forEach(img => {
      const imagePath = path.join(__dirname, "../cv-builder-1-main/src/images/", img.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${imagePath}`, err);
        }
      });
    });

    // Delete all images from the database
    await Images.deleteMany({});
    
    res.json({ status: "ok", message: "All images deleted successfully." });
  } catch (error) {
    console.error("Error deleting images:", error);
    res.status(500).json({ status: "error", message: "Failed to delete images." });
  }
});
        
 


 
////////////////////////////////////

const applicantdataRoutes = require('./Route/applicantdata'); 
app.use('/', applicantdataRoutes);
 


    
////////////////////////////////////////////


const authRoutes = require('./Route/auth');
app.use('/api/auth', authRoutes);
  
 