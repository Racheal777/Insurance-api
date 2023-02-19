//importing modules

import express, {Application} from 'express'
import helmet from 'helmet'
import router from '../Routes/api'

import cors from 'cors'


const PORT = process.env.PORT || 7070

import db from '../Config/db.config'

//assigning app to express
const app: Application = express()



//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())



db.sequelize.sync({force: false}).then(() => {
    console.log('db has been sync')
})

app.use('/api', router)

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))