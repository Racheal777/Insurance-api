
import { Router } from "express";
import {insuranceController} from '../Controllers/InsuranceController'


const router = Router()

router.post('/incident', insuranceController.addIncident)

router.get('/incidents', insuranceController.getAllIncidents)

export default router




