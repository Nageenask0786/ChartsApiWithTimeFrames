const express = require("express");
const app = express();
app.use(express.json());
const port = "3000" || process.env.PORT;

const generateData = () => {
const data = [];
  const startDate = new Date(2024, 0, 1);

  for (let i = 0; i < 100; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    data.push({
      time: date,
      value: Math.floor(Math.random() * 1000),
    });
  }

  return data;

};

function generateDataOnce ()  {
    let isCalled = false 
    if (!isCalled) {
        isCalled = true
    }
    generateData()

}
const data = generateDataOnce()

app.get("/", (request, response) => {
  const data = generateData();
  response.send(data);
});
app.listen(port, () => {
  console.log(`Server running at 'http://localhost:${port}`);
});
