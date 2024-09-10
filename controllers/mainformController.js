const { default: mongoose } = require('mongoose')
const MainForm = require('../models/mainformModel')


//get all workouts
const getForms = async (req, res) => {
  try {
    // Fetch all forms from the database
    const forms = await MainForm.find({});
    
    // Send the retrieved forms as the response
    res.status(200).json(forms);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: 'Failed to retrieve forms', error: error.message });
  }
};

//get single workouts
const getForm = async (req, res) => {
  const { id } = req.params;

  try {
      // Find the form by its ID
      const form = await MainForm.findById(id);

      // If the form does not exist, return a 404
      if (!form) {
          return res.status(404).json({ message: 'Form not found' });
      }

      // Return the form data
      res.status(200).json(form);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};

// create new workout
const createForm = async (req, res) => {
  try {
    // Extract the form data from the request body
    const { PersonalInfo, Education, Experience } = req.body;

    // Create a new instance of the form model
    const newForm = new MainForm({
      PersonalInfo,
      Education,
      Experience
    });

    // Save the form data to the database
    const savedForm = await newForm.save();

    // Send a success response with the saved form data
    res.status(201).json({
      message: 'Form created successfully!',
      data: savedForm
    });
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({
      message: 'Error creating form',
      error: error.message
    });
  }
};




// Delete workout

const deleteForm = async (req, res) => {
  try {
    const {formId} = req.params;

    // Find form by ID and delete
    const deletedForm = await MainForm.findByIdAndDelete(formId);

    if (!deletedForm) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json({ message: 'Form deleted successfully', deletedForm });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting form', error });
  }
};

// update workout
// Controller for updating a form by ID
const updateForm = async (req, res) => {
  const { id } = req.params; // Get form ID from route parameters
  // const formData = req.body;  // Data from the request body

  try {
      // Find the form by ID and update with new data
      const updatedForm = await MainForm.findByIdAndUpdate({_id: id}, {
        ...req.body
      })

      if (!updatedForm) {
          return res.status(404).json({ message: 'Form not found' });
      }

      res.status(200).json(updatedForm); // Respond with updated form
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating the form', error });
  }
};

module.exports = {
    getForms,
    getForm,
    createForm,
    deleteForm,
    updateForm
}