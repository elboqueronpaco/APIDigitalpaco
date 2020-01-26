require('dotenv').config()
const mongoose = require('mongoose')
const dbHost= process.env.DB_HOST || 'localhost'
const dbPort = process.env.DB_PORT || 27017
const dbName = process.env.DB_NAME
const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`
const db = mongoose.connection
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

db.once('open', _ => {
    console.log(`Base de Datos esta conectada a ${dbUrl}`)
})

db.on('error', err => {
    console.error(err)
})
