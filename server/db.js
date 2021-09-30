const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "9989929282",
    database: "testdb"
})

module.exports = client
