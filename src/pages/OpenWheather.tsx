import Sidebar from "../Components/Layout/Sidebar"
import type { Props } from "../Components/Parts/Recherche"
import Header from "../Components/Layout/Header"
import { useState } from "react"
import axios from "axios"

type Time = {
  name: string,
  humidity:number,
  wind_speed:number,
  pressure:number,
  main: {
    temp: number,
  },
  weather: {
    main: string,
    icon:string,
    description:string,
  }[]
}
const OpenWheather = ({searchTerm,SetserchTerm}:Props)=> {
    const [weather , SetWeather] = useState<Time | null>()
    const [search,SetSearch] = useState<string>('')
    const api= {
       key: "944b97131b0ad6ab34262245dffd657b",
       base: "https://api.openweathermap.org/data/2.5/",
    }
    const searchpressed = async ()=>{
        try {
            const res = await axios.get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            SetWeather(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className={`min-h-screen bg-linear-to-br from-slate-50 via-blue-50
        to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500`}>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar/>
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <Header searchTerm={searchTerm} SetserchTerm={SetserchTerm} SetSearch={SetSearch} search={search}/>
                    <main className='flex-1 overflow-y-auto overflow-x-hidden bg-transparent'>
                        <div className="block text-center m-3 p-2">
                            <div className="text-center m-3 p-2">
                                <button onClick={searchpressed} className="text-3xl border cursor-pointer bg-blue-400 hover:bg-blue-600 text-slate-600 dark:text-slate-200">
                                    Cliquer pour voir la meteo
                                </button>
                            </div>   
                            <div className="text-center w-full h-full">
                                 <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="icones" 
                                 className="rounded-base w-full  h-37 object-cover  mt-6 mb-2 text-2xl font-semibold tracking-tight text-center"/>
                                 <div className="mt-2">
                                    <h2 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-center"> 
                                        {weather?.main.temp} °C
                                    </h2>
                                    <p className="flex space-x-2 mt-6 mb-2 text-2xl font-semibold tracking-tight text-center">
                                        <strong className="font-bold ">Humidite: </strong>
                                        {weather?.humidity}
                                    </p>
                                    <p className="flex space-x-2 mt-6 mb-2 text-2xl font-semibold tracking-tight text-center">
                                        <strong className="font-semibold">Vitesse du vent: </strong>
                                        {weather?.wind_speed}km/h
                                    </p>
                                    <p className="flex space-x-2 mt-6 mb-2 text-2xl font-semibold tracking-tight text-center">
                                        <strong className="font-semibold">Pression: </strong>
                                        {weather?.pressure}Pa
                                    </p>
                                    <p className="flex space-x-2 mt-6 mb-2 text-2xl font-semibold tracking-tight text-center">
                                        <strong className="font-semibold">Description: </strong>
                                        {weather?.weather[0]?.description}km/h
                                    </p>
                                 </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
      </div> 
    ) 
}
export default OpenWheather