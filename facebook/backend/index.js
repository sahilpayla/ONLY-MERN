const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const authRouter = require('./routes/auth');
const app = express();


mongoose.connect(process.env.uri)
   .then(() => {
      console.log('Connected...')
   })
   .catch((error) => {
      console.error(error.message);
   });




app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// auth
app.use("/auth", authRouter)


app.listen(process.env.port, () => {
   console.log(`Server is running at ${process.env.port}`)
})