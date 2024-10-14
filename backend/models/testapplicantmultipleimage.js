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
   name: String,  
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
    createdAt: { type: Date, default: Date.now }
  },
  {
    collection: "TestApplicantimg",
  }
);

mongoose.model("TestApplicantimg", TestApplicantimgScehma);




