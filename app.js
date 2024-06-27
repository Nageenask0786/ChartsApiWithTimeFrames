const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const port = "3000" || process.env.PORT;

const generateData = () => {
const data = [];
  const startDate = new Date(2024, 0, 1);

  for (let i = 0; i < 100; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    data.push({
      time: date.toISOString(),
      value: Math.floor(Math.random() * 1000),
    });
  }

  return data;

};

let data = null

const generateDataOnce = () => {
  if (!data) { // Check if data has not been generated yet
    data = generateData();
  }
  return data; // Return the generated data
};

app.get("/", (request, response) => {
  const data = generateDataOnce(); // Ensure data is generated only once
  response.send(data); // Send the data as the response
});


app.listen(port, () => {
  console.log(`Server running at 'http://localhost:${port}`);
});


