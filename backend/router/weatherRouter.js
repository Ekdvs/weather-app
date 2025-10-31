import express from 'express'
import { getAllCitiesWeathers, getWeatherByCityID } from '../controller/weatherController.js';

const weatherRouter= express.Router();

//get all city weather
weatherRouter.get('/',getAllCitiesWeathers);

//get weather by city id
weatherRouter.post('/:id',getWeatherByCityID)

export default weatherRouter;