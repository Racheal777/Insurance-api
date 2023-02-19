//import {Sequelize}  from 'sequelize'
const { Sequelize, DataTypes } = require('sequelize')
import dotenv from 'dotenv'
dotenv.config()





//connecting to database
let databaseName = 'enyata'
const sequelize = new Sequelize(`postgres://postgres:${process.env.PASSWORD}@localhost:5433/${databaseName}`) // Example for postgres

//checking if connection is done

let db =  sequelize.authenticate().then(() => {
    console.log(`Database connected to  ${databaseName}`)
}).catch(() => {
    console.log('error')
})


db.Sequelize = Sequelize
db.sequelize = sequelize




export default  db

