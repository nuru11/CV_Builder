const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const multer = require("multer"); 
const router = express.Router();


require("../models/testapplicantmultipleimage.js"); 
const TestApplicantimg = mongoose.model("TestApplicantimg");










router.get("/tget-images", async (req, res) => {
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
      cb(null, path.join(__dirname, "../../cv-builder-1-main/src/applicantimagetest/"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname;
      cb(null, uniqueSuffix);
    }, 
  });
  
  const testMulupload = multer({ storage: TestMulstorage });
  
  router.post("/tupload-image", testMulupload.fields([{ name: 'personalimage' }, { name: 'fullbodyimage' }, { name: 'passportimage' }, { name: 'video' }]), async (req, res) => {
    
    let experience;
    if (req.body.experience) {
      experience = JSON.parse(req.body.experience);
    } else {
      experience = []; 
    }



   console.log(req.body.country + " nnnnnnnnnnnnnn")
   
    
    try { 
      const imageNames = {
        personalimage: req.files['personalimage'] ? req.files['personalimage'][0].filename : null,
        fullbodyimage: req.files['fullbodyimage'] ? req.files['fullbodyimage'][0].filename : null,
        passportimage: req.files['passportimage'] ? req.files['passportimage'][0].filename : null,
        video: req.files['video'] ? req.files['video'][0].filename : null,
        name: req.body.name,
        surname: req.body.surname,
        middleName: req.body.middleName,
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
        experience: experience,



        visaNo: req.body.visaNo,
        sponsorId: req.body.sponsorId,
        sponsorAddress: req.body.sponsorAddress,
        nationalId: req.body.nationalId,
        email: req.body.email,
        sponsorName: req.body.sponsorName,
        sponsorPhone: req.body.sponsorPhone,
        agent: req.body.agent,
        sponsorArabic: req.body.sponsorArabic,
        visaType: req.body.visaType,
        fileNo: req.body.fileNo, 
        wakala: req.body.wakala,
        signedUp: req.body.signedUp,
        biometricId: req.body.biometricId,
        contract: req.body.contract,
        stickerVisa: req.body.stickerVisa,
        currentNationality: req.body.currentNationality,
        laborId: req.body.laborId,

 
  
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
  
  
  router.get("/tget-images", async (req, res) => {
    try {
      const images = await TestApplicantimg.find(); // Retrieve all documents from the collection
      res.json({ status: "ok", data: images });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error.message });
    }
  });
  
  router.delete('/tget-images/:id', async (req, res) => {
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
  
  router.put('/tget-images/:id', async (req, res) => {
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
  
  
  router.get("/tget-images/:id", async (req, res) => {
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



  module.exports = router;