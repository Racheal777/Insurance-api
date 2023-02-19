
import { Insurance } from '../Models/Insurance'
import { NextFunction, Request, Response } from "express";
import { Op } from 'sequelize';
import axios from 'axios'
import { IncidentSchema } from '../Models/Schema'

class InsuranceController {

    //add an incident
    addIncident = async (req: Request, res: Response) => {


        try {
            const { error, value } = IncidentSchema.validate(req.body);
        if(error){
            res.send(error.details[0].message)
        }else{

            let city = req.body.city
            let apiKey = process.env.APIKEY
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            const weather = await axios.get(url)
            const data = weather.data
            const desc = data.weather[0].description
            const { main } = data

            const weather_report = { main, desc }

            const newIncident = await Insurance.create({ ...req.body, weather_report })
            res.json({ 'incident': newIncident })

            console.log(newIncident.toJSON())
        }

        } catch (error) {
            console.log(error)
        }

    }

    //fetch all incidents
    getAllIncidents = async (req: Request, res: Response) => {
        try {

            const incidents = await Insurance.findAll()
            res.json({ incidents }.incidents)

        } catch (error) {
            console.log(error)
        }

    }
}


export const insuranceController = new InsuranceController()