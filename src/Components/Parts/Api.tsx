import axios from "axios"
import { useEffect, useState } from "react";
const API: React.FC = ()=>{
        const [country, SetCountry] = useState<(string | number)[]>([])
        useEffect(()=>{
            response()
        },[])
        async function response() { 
            try {
            const res = await axios("https://api.restcountries.com/countries/v5",
          {
          headers: {
          Authorization: "Bearer rc_live_84ece2b1a1794a1cbfbdc9dcdba4627d"
          }
          }
        );
        const data = await res.data
        console.log("Status :", res.status)
        if (data) SetCountry(data)
        
        } catch (error) {
           console.log(error) 
        }
    }
    console.log(country,'countries')
}

export default API