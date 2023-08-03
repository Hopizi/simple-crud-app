# simple-crud-app
Welcome to my awesome app! This project is a simple application built with React as the frontend and json-server as the API backend. It allows users to register new users and display the list of registered users.

## Getting Started
To get started with this app, follow the steps below:

## Clone the repository to your local machine:

git clone https://github.com/your-username/my-awesome-app.git
cd my-awesome-app

Install the required dependencies for the frontend and the json-server:
npm install

Start the json-server and the React development server:
npm run start-api // Starts json-server on http://localhost:3000
npm start // Starts the React development server on http://localhost:3001
Open your web browser and navigate to http://localhost:3001 to view the app.

## Features
Register new users with their name, email, and favorite food.
Display the list of registered users.
Technologies Used
React: A JavaScript library for building user interfaces.
json-server: A simple JSON-based mock server for testing and prototyping.

## How It Works
The app is built with React components that allow users to enter their details and submit the form to register as new users. The user data is sent to the json-server API using Axios, which saves the data in the db.json file.

The UserDisplay component fetches the list of registered users from the API and displays their information in a list format.

## Contributing
Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests. Your contributions are highly appreciated!

## Acknowledgments
Thanks to the creators of React and json-server for providing such great tools for building web applications.
Special thanks to the amazing open-source community for their valuable contributions.




