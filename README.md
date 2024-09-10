Form Management API
Overview
This project provides a RESTful API for managing forms with personal information, education, and experience details. It uses Node.js, Express, and MongoDB to handle CRUD operations.

Features
Get all forms: Retrieve all forms from the database.
Get a single form: Retrieve a form by its ID.
Create a new form: Add a new form to the database.
Update a form: Modify an existing form by its ID.
Delete a form: Remove a form from the database.
Setup
Prerequisites
Node.js (v14 or higher)
MongoDB instance
dotenv package

API Endpoints
Get All Forms
URL: /api/forms
Method: GET
Response: Returns a list of all forms.
Get a Single Form
URL: /api/forms/:id
Method: GET
URL Params: id (Form ID)
Response: Returns the form with the specified ID.
Create a New Form
URL: /api/forms

Method: POST

Request Body:

Response: Returns the created form with a success message.

Update a Form
URL: /api/forms/:id
Method: PATCH
URL Params: id (Form ID)
Request Body: The fields you want to update (see Create a New Form for structure).
Response: Returns the updated form.
Delete a Form
URL: /api/forms/:id
Method: DELETE
URL Params: id (Form ID)
Response: Returns a success message if the form is deleted.
Error Handling
The API responds with appropriate status codes and error messages if an operation fails.

License
This project is licensed under the MIT License.
