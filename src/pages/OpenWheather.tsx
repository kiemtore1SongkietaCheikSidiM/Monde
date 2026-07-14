/* Here I import all the package I will use */
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const navigation = useNavigate()
// Typing of time
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

// var from env secret
const keys = import.meta.env.VITE_Keys
const base = import.meta.env.VITE_base


//the main function
const OpenWheather = ()=> {
    // declaration of the var
    const [weather , SetWeather] = useState<Time | null>()
    const [search,setSearch] = useState<string>('')

    // api var that taking the key
    const api= {
       key: keys,
       base: base,
    }

    //function when the user press to search
    const searchpressed = async ()=>{
        try {
            // waiting for the API response
            const res = await axios.get(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
            SetWeather(res.data)
        } catch (error) {
            console.log(error)
            navigation('/error')
        }
    }
    return(
        <div className="bg-cover" style={{
            backgroundImage : `url(https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png)`
        }}>
            <div className="block text-center m-3 p-2">
                <div className="text-center m-3 p-2 block">
                    <input type="text" id="search" name="search" className="border mr-2 focus:outline-0" onChange={(e)=>{setSearch(e.target.value);console.log(search)}} />
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
        </div>
    ) 
}
export default OpenWheather