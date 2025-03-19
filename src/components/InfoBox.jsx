import Card from '@mui/material/Card';
import "./InfoBox.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({info})
{
    const INIT_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"
    let COLD_URL="https://plus.unsplash.com/premium_photo-1661411193681-f798dc3085a3?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_URL="https://images.unsplash.com/photo-1496151981150-6d7319e97e56?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL="https://images.unsplash.com/photo-1565065524861-0be4646f450b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55fGVufDB8fDB8fHww"

    

    return(
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
               sx={{ height: 140 }}
               image={
                info.humidity>80
                ?RAIN_URL
                :info.temp>15
                ?HOT_URL
                :COLD_URL
            }
               title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                       <p>Temperature ={info.temp}&deg;C</p>
                       <p>Humidity ={info.humidity}</p>
                       <p>Min Temp ={info.tempMin}&deg;C</p>
                       <p>Max Temp ={info.tempMax}&deg;C</p>
                       <p>
                        The weather can be described as <i>{info.weather}</i> and feels 
                        like {info.feelsLike}&deg;C
                       </p>
                    </Typography>
                </CardContent>
               
            </Card>
            </div>
            
        </div>
    )
};