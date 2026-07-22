/* Here I import all the package I will use */
import Cartepays from "../Components/Parts/Cartepays"
import { useState,useEffect } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import type { Pays } from "../types"
import { autorisation,url } from "../constants/Appelapi"




const Dashboard = ({ searchTerm = '' }: { searchTerm?: string }) => {
    // The var to country
    const [country, setCountry] = useState<Pays[]>([])
     
    useEffect(() => {
        response()
    }, [])
    
    // function calling the API by using axios.get
    async function response() {
        try {
            const res = await axios(url, {
                headers: {
                    Authorization: autorisation
                }
            });
            const data = await res.data
            // if the data exist changing the var country to that value
            if (data) setCountry(res.data.data.objects)
        } catch (error) {
            console.log(error)
            const navigate = useNavigate()
            navigate('/error')
        }
    }
    

    // var to look at the data when the user is typing a search
    const filtre = country.filter((countr) => countr.names.common.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        /* Displaying the data getting from the API */
        <div className="md:grid block gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filtre.map((countryItem, index) => (
                <Cartepays key={`${countryItem.names.common}-${index}`} countries={countryItem} />
            ))}
        </div>
    )
}

export default Dashboard