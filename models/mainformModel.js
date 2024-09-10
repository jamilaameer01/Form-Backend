const mongoose = require('mongoose');
const Schema = mongoose.Schema

const personalInfoSchema = new Schema({
  FirstName: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  URL: { type: String}
});

const educationSchema = new Schema({
  DegreeName: { type: String, required: true },
  InstituteName: { type: String, required: true },
  Number: { type: String, required: true }
});

const experienceSchema = new Schema({
  CompanyName: { type: String, required: true },
  Position: { type: String, required: true },
  Duration: { type: String, required: true }
});

const formSchema = new Schema({
  PersonalInfo: { type: personalInfoSchema, required: true },
  Education: [educationSchema],
  Experience: [experienceSchema]
}, {timestamps:true});


module.exports = mongoose.model('MainForm', formSchema)



