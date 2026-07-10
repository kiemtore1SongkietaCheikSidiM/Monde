import Cartepays from "../Components/Parts/Cartepays"
import { useState,useEffect } from "react"
import axios from 'axios'







type Capital = {
  name: string;
}
type Monnais={
    name:string,
    symbol:string
}
export type Pays = {
  names: {
    common: string;
    official: string;
  };
  flag: {
    url_png: string;
  };
  capitals: Capital[];
  population: number;
  region: string;
  subregion: string;
  languages:Capital[];
  currencies: Monnais[];
  borders: string[];
  timezones: string[];
}

const Dashboard  = ()=>{
    const [country, SetCountry] = useState<Pays[]>([])
    const [searchTerm,SetserchTerm] = useState<string>('')
    
    useEffect(()=>{
        response()
    },[])
    async function response() { 
        try 
        {
            const res = await axios("https://api.restcountries.com/countries/v5?limit=100",
            {
                headers: 
                {
                    Authorization: "Bearer rc_live_84ece2b1a1794a1cbfbdc9dcdba4627d"
                }
            }
            );
            const data = await res.data
            if (data) SetCountry(res.data.data.objects)
        
        } 
        catch (error) 
        {
           console.log(error) 
        }
    }
    const filtre = country.filter(countr =>countr.names.common.toLowerCase().includes(searchTerm.toLowerCase()))
    /* console.log(country,'countries') */
    return (
        <div className="gap-2 grid grid-cols-3">
            {
                filtre.map((countryItem,index)=>{
                    return(                                   
                        <Cartepays key={index} countries={countryItem} />                                    
                        )
                    })
            }
                        
        </div> 
    )
}

export default Dashboard