import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";



export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo] = useState(
        {
            city:"Delhi",
            feelsLike:20.49,
            temp:21.05,
            tempMin:21.05,
            temMax:21.05,
            humidity:49,
            weather:"haze",
            
        }
    );

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1> Weather App Project</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}