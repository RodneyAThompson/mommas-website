require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require ('./sequelize');
const authCtrl = require ('./authController');

const port = process.env.PORT || 6969;

app.use(express.json());
app.use(cors());


// endpoints 
app.post('/auth/register', authCtrl.register);


app.listen(port, () => {console.log('Listening on port', port)});