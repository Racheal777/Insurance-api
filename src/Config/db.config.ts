//import {Sequelize}  from 'sequelize'
const { Sequelize } = require('sequelize')
import dotenv from 'dotenv'
dotenv.config()



let connectionString  = "postgresql://postgres:bKAdThyZmPHyzHJrZU2y@containers-us-west-24.railway.app:7691/railway"

//connecting to database

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

