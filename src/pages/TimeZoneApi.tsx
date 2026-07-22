/* Here I import all the package I will use */
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import type { Timezone } from "../types"
import { listcontinent } from "../constants"



//The main function
const TimeZoneAPI: React.FC  =  () => {
    //var declaration
    const [ville, setVille] = useState<string>('Ouagadougou')
    const [continent,setContinent] = useState<string>('Africa')
    const [timezone, setTimezone] = useState<Timezone | null>()

        const Time =async ()=> {
            try {
                // Waiting for the url
                const URL : string = `https://timeapi.io/api/Time/current/zone?timeZone=${continent}/${ville}`                
                const res = await axios.get(URL)
                setTimezone(res.data)
            } catch (error) {
                console.error(error)
                const navigate = useNavigate()
                navigate("/error")
            }  
        }
    useEffect(()=>{
        Time()
    },[])
    const Voir = ()=>{
        Time()
    }
    return (
        <div>
            <div className="text-center text-3xl text-bold text-slate-800 dark:text-slate-300">
                Faite des recherches sur le temps d'une ville 
            </div>
            <div className="mt-10  w-full text-center gap-3 flex justify-between">
                <select name="continent" id="continent" onChange={(e)=>setContinent(e.target.value)}
                    value={continent}>
                    {
                        listcontinent.map((curr) =>(
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))
                    }
                </select>
                <input type="text" className="border border-b-2" value={ville} placeholder="Mettez la ville"
                onChange={(e)=>setVille(e.target.value)}/>
                <button onClick={Voir} className="border bg-blue-500 hover:bg-blue-700 p-4">Cliquer pour voir</button>
            </div>
            <div className="p-15 block">
                <p className="text-center text-3xl font-bold text-slate-700 dark:text-slate-200">
                    {ville}
                </p>
                <p className="flex">
                    Heure:
                    <strong>{timezone?.time}</strong>
                </p>
                <p className="flex">
                    Date:
                    <strong>{timezone?.date}</strong>
                </p>
                <p className="flex">
                    Fuseau Horaire:
                    <strong>{timezone?.timeZone}</strong>
                </p>
            </div>
        </div>
    )
}
export default TimeZoneAPI