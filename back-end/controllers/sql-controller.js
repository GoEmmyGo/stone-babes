// Sequelize is an object relational mapping tool that allows me to connect to and interact with databases through my server

// these tools make it super simple to execute queries from my server
const Sequelize = require('sequelize')

//with dotenv I can access my variables using process.env.VAR_NAME
require('dotenv').config()

app.listen(process.env.SERVER_PORT, () => console.log(`server running port ${process.env.SERVER_PORT}`))

//need to install npm sequelize
//need to install pg pg-hstore

//sequelize biolerplate
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

//now I can execute SQL in our endpoint handler functions using Sequelize’s query method
app.get('/projects', (req, res) => {
    sequelize.query('select * from projects;')
    .then(db(dbRes => res.send(dbRes)))
})

