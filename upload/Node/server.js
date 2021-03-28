const express = require('express');
const errorModel = require('./controllers/error');
const userRoute = require('./routes/userRoute');
const CORS = require('cors');
const path = require('path');


const app = express();

//app.use(express.static(path.join('images')));
app.use("/api/user/images", express.static(path.join("images")));
//app.use(express.static(path.join("backend/images")));
app.use(CORS());
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
let mongoDbUrl = 'mongodb://localhost/onlinetest';
mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

mongoose.connection
    .on('error', (err) => console.log("connection error"))
    .once('open', () => console.log("connection success"))
    .on('disconnected', () => console.log(disconnected("Mongoose default connection is disconnected")));

app.use(express.json());
app.use(express.urlencoded({
      extended: true
    }));

app.use('/api', userRoute);
app.use('**', errorModel.error);

app.listen(port, () => {
    console.log(`server runninig at port ${port}`);
})