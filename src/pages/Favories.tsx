import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md"
import type { Pays } from "./Dashboard"

const Favories = () => {
    const [favories,setFavories] = useState<Pays[]>([])
    useEffect(()=>{
        const data = JSON.parse(
            localStorage.getItem("favories") || "[]"
        )
        setFavories(data)
    },[])
       const Supprimerfav =(nom:string)=>{
        const nouveau = favories.filter((item)=>item.names.common !== nom)
        setFavories(nouveau)
        localStorage.setItem("favories",JSON.stringify(nouveau))
    }
    return (
        <div className='grid grid-cols-4 gap-5 p-5'>
            {favories.map((country)=>(
                <div key={country.names.common} className="border rounded-xl p-4 shadow">
                    <img src={country?.flag?.url_png} alt="image_aime" 
                    className="h-40 w-full object-cover"/>
                    <h2 className="text-xl font-bold mt-2">
                        {country?.names?.common}
                    </h2>
                    <p>{country?.capitals?.[0]?.name}</p>
                    <p>{country?.population}</p>
                    <button onClick={()=>Supprimerfav(country.names.common)} className="">
                        <MdDelete className="text-red-500 hover:text-red-700 h-6 w-6"/>
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Favories