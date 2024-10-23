const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: String,
    link: String,
    overview: String
  });

const TestApplicantimgScehma = new mongoose.Schema(
  {
    personalimage:String,
    fullbodyimage: String,
    passportimage: String,
    video: String, 
    name: String,  
    middleName: String,
    surname: String,
    placeofbirth: String,
    passportnum: String,
    nationality: String,
    martialstatus:String,
    numberofchildren: String,
    religion: String,
    weight: String,
    height: String,
    educationattainment: String,
    postappliedfor:String,
    contractperiod: String,
    arabicdegree: String,
    englishdegree: String,
    ownphonenum: String,
    contactphonenum: String,
    dateofbirth: String,
    age: String,
    dateofissue: String,
    expireddate: String,
    country: String,   
    position: String,
    period: String,
    babysitting: Boolean,
    cleaning: Boolean,  
    washing: Boolean,
    cooking: Boolean,
    eldercare: Boolean, 
    monthlysalarySaudi: String,
    monthlysalaryJordan: String,
    experience:  [ProjectSchema],
    createdAt: { type: Date, default: Date.now },

    visaNo: String,
    sponsorId: String,
    sponsorAddress: String,
    nationalId: String,
    email: String, 
    sponsorName: String,
    sponsorPhone: String,
    agent: String, 
    sponsorArabic: String,
    visaType: String,
    fileNo: String,  
    wakala: String,
    signedUp: String,
    biometricId: String,
    contract: String,
    stickerVisa: String,
    currentNationality: String,
    laborId: String,
  },
  {
    collection: "TestApplicantimg",
  }
);

mongoose.model("TestApplicantimg", TestApplicantimgScehma);




