import axios from "axios"
import { useEffect, useState } from "react"
import Sidebar from "../Components/Layout/Sidebar"
import Header from "../Components/Layout/Header"
import type { Props } from "../Components/Parts/Recherche"
type Timezone = {
    time:string
    date:string
    timeZone:string
}
const listcontinent:string[] = ['Africa','Europe','America','Asia']
const TimeZoneAPI  =  ({searchTerm,SetserchTerm,SetSearch,search}:Props) => {
    const [ville, setVille] = useState<string>('Ouagadougou')
    const [continent,setContinent] = useState<string>('Africa')
    const [timezone, setTimezone] = useState<Timezone | null>()
        const Time =async ()=> {
            try {
                const URL : string = `https://timeapi.io/api/Time/current/zone?timeZone=${continent}/${ville}`                
                const res = await axios.get(URL)
                setTimezone(res.data)
            } catch (error) {
                console.error(error)
            }  
        }
    useEffect(()=>{
        Time()
    },[])
    const Voir = ()=>{
        Time()
        console.log(ville)
        console.log(continent)
    }
    return (
        <div className={`min-h-screen bg-linear-to-br from-slate-50 via-blue-50
        to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500`}>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar/>
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <Header searchTerm={searchTerm} SetserchTerm={SetserchTerm} SetSearch={SetSearch} search={search}/>
                    <main className='block overflow-y-auto overflow-x-hidden bg-transparent'>
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
                    </main>
                </div>
            </div>
        </div>
    )
}
export default TimeZoneAPI