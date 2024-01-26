
# Registration Website
Welcome to the Registration Website! This web application is built using HTML, EJS, CSS, MongoDB, and Node.js. It provides a simple and secure way for users to register, and if a user already exists, it offers a login option.
## Preview
![Screenshot 2024-01-27 000422](https://github.com/sneha-thyagarajan/RegistrationForm/assets/131603569/e0ff99ab-f509-48d4-bddd-946ca33f98bd)
![Screenshot 2024-01-27 000454](https://github.com/sneha-thyagarajan/RegistrationForm/assets/131603569/c79e8569-bd8f-4465-904e-6fd6e0bdf860)
If the user already exists
![Screenshot 2024-01-27 000519](https://github.com/sneha-thyagarajan/RegistrationForm/assets/131603569/3da55626-86fd-4993-9136-7e203db193b9)
![Screenshot 2024-01-27 000758](https://github.com/sneha-thyagarajan/RegistrationForm/assets/131603569/3a2dac66-3ac4-4724-adf0-f9cab724bb5b)

## Getting Started


To get started with the RegisterationForm Website, follow the instructions below.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB

## Installation

1. Navigate to the project directory:

   ```bash
   cd weather-website
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage
1. Create a MongoDB database and obtain the connection string.
   ```
   mongoose.connect(YOUR_CONNECTION_STRING)
   ```

2. Replace the existing username, password  in index.js file with your own username and password provided by MongoDB atlas

   ```
   username=YOUR_DB_USERNAME;
   password=YOUR_DB_PASSWORD
   ```

3. Start the Express.js server:

   ```bash
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:8000` to access the Registration form Website.

## Features

- User Registration: New users can register by providing their details.
- User Login: Existing users can log in after registration.
- Secure Storage: User data is securely stored in a MongoDB database.
- Responsive Design: The website is designed to work on various screen sizes.
