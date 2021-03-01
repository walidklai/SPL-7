const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

app.use(express.json({ extended: false }));

connectDB();

const PORT = 5000 || process.env.PORT;

app.use('/api/contact',require('./routes/api/user'))
app.use('/api/newsletter',require('./routes/api/newsLetter'))
app.use('/api/players',require('./routes/api/player'))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server engaged on port ${PORT} ....`);
});
