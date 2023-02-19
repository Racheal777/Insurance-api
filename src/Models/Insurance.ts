import { DataTypes, Model } from "sequelize"
import db from '../Config/db.config'


interface InsuranceAttribute {
id: number
client_id: number
incident_desc:string
city: string,
country: string
date: Date,
weather_report: any,
createdAt: Date
updatedAt: Date
}

export class Insurance extends Model<InsuranceAttribute>{}

Insurance.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    client_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    

    city: {
        type: DataTypes.STRING,
        allowNull: false
    },

    country: {
        type: DataTypes.STRING
    },

    incident_desc: {
        type: DataTypes.TEXT
    },

    date: {
        type: DataTypes.DATE
    },

    weather_report: {
        type: DataTypes.JSON
    },


    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
   
},

{
    tableName: 'insurance',
    sequelize: db.sequelize
},


)