### Express Data Generation App for Charts App
Description
This application is an Express server that generates and serves a list of data points, each with a timestamp and a random value. The server listens on port 3000 (or a port specified by the PORT environment variable) and provides data when accessed via a GET request to the root URL (/).

### Features
Generates a list of 100 data points with timestamps starting from January 1, 2024.
Each data point includes a timestamp and a random value between 0 and 999.
Serves the generated data in JSON format via the root URL.
### Installation
Ensure you have Node.js and npm installed.
### Clone this repository.
Navigate to the project directory.
Run npm install to install the required dependencies.

### Start the server with the command:
nodemon app.js

Access the generated data by navigating to http://localhost:3000/ in your web browser.

### Dependencies
1. express: A minimal and flexible Node.js web application framework.
Server Setup
The server is created using Express and listens on port 3000 (or the port specified by the PORT environment variable).
2. nodemon: To automatically restart the server when file changes in the directory are detected, you can use nodemon.
Install nodemon globally if you haven't already:
npm install -g nodemon
Start the server with nodemon:
3. Data Generation
generateData: A function that generates an array of 100 data points. Each data point has a time field (a date starting from January 1, 2024) and a value field (a random integer between 0 and 999).
Routes
GET /: Responds with the generated data in JSON format.
Example Response
[
  {
    "time": "2024-01-01T00:00:00.000Z",
    "value": 123
  },
  {
    "time": "2024-01-02T00:00:00.000Z",
    "value": 456
  },
  ...
]








