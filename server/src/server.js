const express = require('express');
const cors = require("cors");

// Conecta com o MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hardwarestr:hardwarestr@cluster0.mnndu.mongodb.net/HardwareWebStore?retryWrites=true&w=majority');

const app = express();

const productRoute = require('./routes/product-route');
const userRoute = require('./routes/user-route');

app.use(cors());
app.use(express.json());


app.use('/product', productRoute);
app.use('/user', userRoute);

// Coloca servidor para pra rodar
const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
  
    console.log("Example app listening at http://%s:%s", host, port);
  });