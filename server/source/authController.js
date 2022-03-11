const sequelize = require("../db/sequelize.js");
const bcrypt = require("bcrypt");


module.exports = {
    
    register: (req, res) => {
        // to register, we have a very similar process as login
        // take the request data (req) and destructure it (const {item1, item2, item3} = req.data/body)
        // check to see if the username is already in the database
        // if it is, send a response saying "user already exists"
        // otherwise we procede to register the user
        // 1. Encrypt their password with bcrypt
        // 2. Make a sequelize.query to the database to insert the data
        // 3. Send a response back to the front end that enables the user to login

        const db = req.app.get('db');
        const {username, email, password} = req.body 
        const existingUser = await db.check_user_for_login(username);
        if (existingUser[0]) {
            return res.status(409).send("Username is already taken!") 
        } 
    },

    login: (req, res) => {
        // to login, we take the data from the request
        // then we make a sequelize.query
        // in which we will search the database for a matching username
        // if a username match is found, then we procede to password comparison
            // if a username match is NOT found, send a response telling the front-end that the username was not found
        // upon successful username match, we re-encrypt the password that was sent, and compare it to the password that is attached to the succesfully found username
        // if a password match is found, then give the OK for the user to login
            // otherwise, we tell the user that their password was incorrect
    }
}