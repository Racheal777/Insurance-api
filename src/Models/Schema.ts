import Joi from "joi";

export const IncidentSchema = Joi
  .object({
    
    client_id: Joi.number().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    incident_desc: Joi.string().required(),
    date: Joi.date()
  })

