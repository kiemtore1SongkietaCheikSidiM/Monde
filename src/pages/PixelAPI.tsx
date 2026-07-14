/* Here I import all the package I will use */
import axios from "axios"
import { useEffect, useState } from "react"

type Photo = {
    id:string,
    urls:{
        regular:string
    }
    alt_description:string | null
}

const PixelAPI: React.FC = () =>{
    const [photo,setPhoto] = useState<Photo[]>([])
    const [search,setSearch] = useState<string>("")
    const appel = async (country:string)=>{
        try {
            const role = await axios.get(import.meta.env.VITE_unsplash,
            {
            params:{
                query: `${country} monument nature city landscape`,
                per_page: 10
            },
            headers:{
                Authorization: import.meta.env.VITE_unsplashkey
            }
            }  
            )
            setPhoto(role.data.results)
        } catch (error) {
            console.error(error)
            throw error
        }
    } 
    useEffect(()=>{
        appel(search)
        
    },[search])
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input type="text" name="search" id="search" onChange={(e)=>setSearch(e.target.value)}
            className="text-center border" placeholder="Ecrit la nom de la ville"/>
            {
                photo.map((cure)=>(
                    <img src={cure.urls.regular} alt={cure.alt_description ?? "Country"} key={cure.id}
                    className="w-full h-52 object-cover rounded-xl"/>
                ))
            }
        </div>
    )
}
export default PixelAPI