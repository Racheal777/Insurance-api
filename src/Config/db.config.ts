//import {Sequelize}  from 'sequelize'
const { Sequelize, DataTypes } = require('sequelize')
import dotenv from 'dotenv'
dotenv.config()



let connectionString  = process.env.DB

//connecting to database
//let databaseName = 'enyata'
//const sequelize = new Sequelize(`postgres://postgres:${process.env.PASSWORD}@localhost:5433/${databaseName}`) // Example for postgres
const sequelize = new Sequelize(connectionString)
//checking if connection is done

let db =  sequelize.authenticate().then(() => {
    console.log(`Database connected to ENYATA `)
}).catch(() => {
    console.log('error')
})


db.Sequelize = Sequelize
db.sequelize = sequelize




export default  db

