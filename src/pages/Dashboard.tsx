import Cartepays from "../Components/Parts/Cartepays"
import { useState,useEffect } from "react"
import axios from 'axios'






const autorisation = import.meta.env.VITE_Authorization
const url = import.meta.env.VITE_REST_URL
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
            const res = await axios(url,
            {
                headers: 
                {
                    Authorization: autorisation
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