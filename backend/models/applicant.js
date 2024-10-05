const mongoose = require("mongoose");

const ApplicantdataSchema = new mongoose.Schema(
  {
    image: String,
    name: String, // Add the name field
  },
  {
    collection: "Applicant",
  }
);

mongoose.model("Applicant", ApplicantdataSchema);