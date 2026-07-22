/* Here I import all the package I will use */
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md"
import type { Pays } from "../types"

const Favories : React.FC = () => {

    //var to take all the data in Pays type
    const [favories,setFavories] = useState<Pays[]>([])
    useEffect(()=>{
        //Taking the data from localstorage if there is
        const data = JSON.parse(
            localStorage.getItem("favories") || "[]"
        )
        //setting the data
        setFavories(data)
    },[])
    const Supprimerfav =(nom:string)=>{
        // filtering with the name
        const nouveau = favories.filter((item)=>item.names.common !== nom)
        setFavories(nouveau)
        localStorage.setItem("favories",JSON.stringify(nouveau))
    }
    return (
        <div className='md:grid md:grid-cols-4 gap-5 p-5 block'>
            {/* displaying th favories value */}
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