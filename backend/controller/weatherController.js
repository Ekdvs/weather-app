import { request } from "express";
import { getAllCitiesWeather, getWeatherByCityId } from "../service/weatherService.js";

export const getAllCitiesWeathers=async(request,response)=>{
    try {
        const data = await getAllCitiesWeather();
        if(!data){
            return response.status(404).json(
                {
                    message:"Weather Data not found",
                    error:true,
                    success:false
                }
            )
        }
        
        return response.status(200).json(
            {
                message:'feach data suessfully',
                data:data,
                erorr:false,
                success:true
            }
        )
      } catch (error) {
        console.error("Detailed error:", error.response?.data || error.message);
        response.status(500).json(
            { 
                message:'Internal sever error',
                error:true,
                success:false,
            }
        );
      }
    
}

export const getWeatherByCityID =async(request,response)=>{
    try {
         const cityId = request.params.id;
         if(!cityId){
            return response.status(404).json(
                {
                    message:"city id required",
                    error:true,
                    success:false
                }
            )
         }

        const data = await getWeatherByCityId(cityId);

        if(!data){
            return response.status(404).json(
                {
                    message:"Weather Data not found",
                    error:true,
                    success:false
                }
            )
        }
        
        return response.status(200).json(
            {
                message:'feach data suessfully',
                data:data,
                erorr:false,
                success:true
            }
        )
        
    } catch (error) {
        return response.status(500).json({
            message:'Internal sever error',
            error:true,
            success:false,
        })
    }
}

