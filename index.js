const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const urlRouter = require('./routes/url');

app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3000/*','https://urlshortner-app.netlify.app/*','https://urlshortner-app.netlify.app']
}));

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB connection is successful");
}).catch((error) => {
    console.log(error);
});

app.use(express.json());
app.use('/api/url', urlRouter);


app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running");
});

