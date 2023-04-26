const {  Pool } = require("pg")

const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'logIn',
    password: '1245',
    port: '5432'
});


module.exports = {
    client
}