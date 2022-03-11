const sequelize = require("./sequelize")

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists clients;
        drop table if exists appointments;

        CREATE TABLE clients (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50),
            email VARCHAR(75),
            password VARCHAR(250)
            );

        CREATE TABLE appointments (
            id SERIAL PRIMARY KEY,
            available_appts TIMESTAMP,
            personal_req INPUT
            );

            ALTER TABLE "appointments" ADD FOREIGN KEY ("appt_id") REFERNCES "clients"("id");
        `)
    }
}