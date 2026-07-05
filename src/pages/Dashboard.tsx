import Sidebar from "../Components/Layout/Sidebar"
import Header from "../Components/Layout/Header"
import Cartepays from "../Components/Parts/Cartepays"
import { useState,useEffect } from "react"
import axios from 'axios'
/* */
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
            const res = await axios("https://api.restcountries.com/countries/v5",
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
        <div className={`min-h-screen bg-linear-to-br from-slate-50 via-blue-50
        to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500`}>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar/>
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <Header searchTerm={searchTerm} SetserchTerm={SetserchTerm}/>
                    <main className='flex-1 overflow-y-auto bg-transparent'>
                      <div className="gap-4 grid grid-cols-3">
                        {
                            filtre.map((countryItem,index)=>{
                                /* console.log(countryItem.capitals)
                                console.log(countryItem.capitals[0].name) */
                                return(                                   
                                    <Cartepays key={index} countries={countryItem} />                                    
                                )
                            })
                        }
                        
                      </div>
                    </main>
                </div>
            </div>
      </div> 
    )
}

export default Dashboard