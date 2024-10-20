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



/////////////////////////////////////////////////////
/// PASSPORT IMAGE UPLOADER

const Passportstorage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, "../cv-builder-1-main/src/passport_image/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname); 
  },
});

const passportupload = multer({ storage: Passportstorage });

app.post("/passupload-image", passportupload.single("pimage"), async (req, res) => {
  console.log(req.body);  
  const imageName = req.file.filename;

  try {
    await PassImages.create({ image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/passget-image", async (req, res) => {
  try {
    PassImages.find({}).then((data) => {
      res.send({ status: "ok", data: data }); 
    });
  } catch (error) {
    res.json({ status: error });
  }
});

///////////////  delete passport image 

app.delete("/passdelete-images", async (req, res) => {
  try { 
    // Find all images in the database
    const images = await PassImages.find({});
    
    // Delete each image file from the file system
    images.forEach(img => {
      const imagePath = path.join(__dirname, "../cv-builder-1-main/src/passport_image/", img.image);
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${imagePath}`, err);
        }  
      });
    });
  
    // Delete all images from the database
    await PassImages.deleteMany({});
    
    res.json({ status: "ok", message: "All images deleted successfully." });
  } catch (error) {
    console.error("Error deleting images:", error);
    res.status(500).json({ status: "error", message: "Failed to delete images." });
  }
});




////////////////////////  Applicants data


const Applicantstorage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, "../cv-builder-1-main/src/applicantimage/");
  },
  filename: function (req, file, cb) {  
    const uniqueSuffix = Date.now();     
    cb(null, uniqueSuffix + file.originalname);   
  },
});  

const applicantupload = multer({ storage: Applicantstorage });

app.post("/applicantupload-image", applicantupload.single("applicantimage"), async (req, res) => {
  console.log(req.body);  
  const imageName = req.file.filename;

  let experience;
  if (req.body.experience) {
    experience = JSON.parse(req.body.experience);
  } else {
    experience = [];
  }



  const { 
    name, 
    surname, 
    placeofbirth, 
    passportnum, 
    nationality, 
    martialstatus, 
    numberofchildren, 
    religion, 
    weight, 
    height, 
    educationattainment, 
    postappliedfor, 
    contractperiod, 
    arabicdegree, 
    englishdegree, 
    ownphonenum, 
    contactphonenum, 
    dateofbirth, 
    age, 
    dateofissue, 
    expireddate, 
    country, 
    position, 
    period, 
    babysitting, 
    cleaning, 
    washing, 
    cooking, 
    eldercare, 
    monthlysalarySaudi, 
    monthlysalaryJordan, 
    // experience,
  } = req.body;  

  try {
    await ApplicantImages.create({ 
      image: imageName, 
      name: name, 
      surname: surname, 
      placeofbirth: placeofbirth, 
      passportnum: passportnum, 
      nationality: nationality, 
      martialstatus: martialstatus, 
      numberofchildren: numberofchildren, 
      religion: religion, 
      weight: weight, 
      height: height, 
      educationattainment: educationattainment, 
      postappliedfor: postappliedfor, 
      contractperiod: contractperiod, 
      arabicdegree: arabicdegree, 
      englishdegree: englishdegree, 
      ownphonenum: ownphonenum, 
      contactphonenum: contactphonenum, 
      dateofbirth: dateofbirth, 
      age: age,  
      dateofissue: dateofissue, 
      expireddate: expireddate, 
      country: country, 
      position: position, 
      period: period, 
      babysitting: babysitting, 
      cleaning: cleaning, 
      washing: washing, 
      cooking: cooking, 
      eldercare: eldercare, 
      monthlysalarySaudi: monthlysalarySaudi, 
      monthlysalaryJordan: monthlysalaryJordan,
      experience: experience
     }); // Save both image and name
    res.json({ status: "ok" });      
  } catch (error) {
    res.json({ status: error });          
  }
});

app.get("/applicantget-image", async (req, res) => {
  try {
    ApplicantImages.find({}).then((data) => { 
      res.send({ status: "ok", data: data });  
    });
  } catch (error) { 
    res.json({ status: error }); 
  }
});


///////////////////////////////////////////////////////////////////

//  TEST UPLOAD MULTIPLE IMAGE

// const TestMulstorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../cv-builder-1-main/src/applicantimagetest/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const TestMulstorageTwo = multer.diskStorage({
//   destination: function (req, file, cb) { 
//     cb(null, "../cv-builder-1-main/src/applicantimgtwo/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname); 
//   },
// });

// const testMulupload = multer({ storage: TestMulstorage });
// const testMuluploadTwo = multer({ storage: TestMulstorageTwo });

// app.post("/tupload-image", testMulupload.single("image"),testMuluploadTwo.single("imaget"), async (req, res) => {
//   console.log(req.body);
//   const imageName = req.file.filename;

//   console.log(imageName + "kkkkkkkkkkkkkkkkkkkkkkk")

//   // try {
//   //   await TestApplicantimg.create({ image: imageName });
//   //   res.json({ status: "ok" });
//   // } catch (error) {
//   //   res.json({ status: error });
//   // } 
// });

app.get("/tget-images", async (req, res) => {
  try {
    const images = await TestApplicantimg.find(); // Retrieve all documents from the collection
    res.json({ status: "ok", data: images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});
 

const TestMulstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../cv-builder-1-main/src/applicantimagetest/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const testMulupload = multer({ storage: TestMulstorage });

app.post("/tupload-image", testMulupload.fields([{ name: 'personalimage' }, { name: 'fullbodyimage' }, { name: 'passportimage' }, { name: 'video' }]), async (req, res) => {


  let experience;
  if (req.body.experience) {
    experience = JSON.parse(req.body.experience);
  } else {
    experience = []; 
  }


  try {
    const imageNames = {
      personalimage: req.files['personalimage'] ? req.files['personalimage'][0].filename : null,
      fullbodyimage: req.files['fullbodyimage'] ? req.files['fullbodyimage'][0].filename : null,
      passportimage: req.files['passportimage'] ? req.files['passportimage'][0].filename : null,
      video: req.files['video'] ? req.files['video'][0].filename : null,
      name: req.body.name,
      surname: req.body.surname,
      placeofbirth: req.body.placeofbirth,
      passportnum: req.body.passportnum,
      nationality: req.body.nationality,
      martialstatus: req.body.martialstatus,
      numberofchildren: req.body.numberofchildren,
      religion: req.body.religion,
      weight: req.body.weight,
      height: req.body.height,
      educationattainment: req.body.educationattainment,
      postappliedfor: req.body.postappliedfor,
      contractperiod: req.body.contractperiod,
      arabicdegree: req.body.arabicdegree,
      englishdegree: req.body.englishdegree,
      ownphonenum: req.body.ownphonenum,
      contactphonenum: req.body.contactphonenum,
      dateofbirth: req.body.dateofbirth,
      age: req.body.age,
      dateofissue: req.body.dateofissue,
      expireddate: req.body.expireddate,
      country: req.body.country,
      position: req.body.position,
      period: req.body.period,
      babysitting: req.body.babysitting === "true" ? true : false,
      cleaning: req.body.cleaning === "true" ? true : false,
      washing: req.body.washing === "true" ? true : false, 
      cooking: req.body.cooking === "true" ? true : false,
      eldercare: req.body.eldercare === "true" ? true : false,
      monthlysalarySaudi: req.body.monthlysalarySaudi,
      monthlysalaryJordan: req.body.monthlysalaryJordan,
      experience: experience
    };

    console.log(req.body.babysitting  + " kkkkkkk")

    const newImageEntry = new TestApplicantimg(imageNames);
    await newImageEntry.save();

    console.log(imageNames);
    res.json({ status: "ok", images: imageNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});


app.get("/tget-images", async (req, res) => {
  try {
    const images = await TestApplicantimg.find(); // Retrieve all documents from the collection
    res.json({ status: "ok", data: images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.delete('/tget-images/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await TestApplicantimg.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ status: 'error', message: 'Image not found' });
    }
    res.json({ status: 'ok', message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

app.put('/tget-images/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body; // Expecting the updated data in the request body 

  try {
    const result = await TestApplicantimg.findByIdAndUpdate(id, updateData, { new: true });
    if (!result) {
      return res.status(404).json({ status: 'error', message: 'Image not found' });
    }
    res.json({ status: 'ok', data: result });
  } catch (error) {
    console.error('Error updating image:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});


app.get("/tget-images/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const imageEntry = await TestApplicantimg.findById(id);
    
    console.log("Fetching details for ID:", id);
    if (!imageEntry) {
      return res.status(404).json({ status: "error", message: "Image not found" });
    }

    res.json({ status: "ok", data: imageEntry });
  } catch (error) { 
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});




////////////////////////////////////////////


const authRoutes = require('./Route/auth');
app.use('/api/auth', authRoutes);
  
 