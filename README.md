# Candidate Form Backend

This project is a backend application for managing candidate information using Node.js, Express, and MongoDB with Mongoose. The application provides a form for candidates to submit their basic information, education history, and work history. It supports CRUD (Create, Read, Update, Delete) operations.

## Features

- **Create**: Add new candidates with basic info, education history, and work history.
- **Read**: Retrieve candidate information.
- **Update**: Modify existing candidate information.
- **Delete**: Remove candidates from the database.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or hosted instance)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jamilaameer01/Form-Backend/blob/main/README.md
    cd form-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```
    MONGO_URI= "YOUR_MONGO_URI_HERE"
    PORT="PORT_NUMBER_HERE"
    ```

4. **Start the application:**

    ```bash
    npm start
    ```


## Directory Structure

- `src/`
  - `models/` - Mongoose models
  - `routes/` - Express routes
  - `controllers/` - Route handlers
  - `config/` - Configuration files (e.g., database connection)
  - `middleware/` - Custom middleware

## Contributing

Feel free to fork the repository and submit pull requests. Please follow the [contribution guidelines](CONTRIBUTING.md) when making contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)