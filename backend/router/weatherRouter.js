import express from 'express'
import { check, getAllCitiesWeathers, getWeatherByCityID } from '../controller/weatherController.js';
import { checkJwt } from '../middleweare/auth.js';

const weatherRouter= express.Router();

//get all city weather
weatherRouter.get('/',getAllCitiesWeathers);

//get weather by city id
weatherRouter.post('/:id',getWeatherByCityID)

//check
weatherRouter.get('/d',checkJwt,check)

export default weatherRouter;