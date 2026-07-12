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

const Dashboard = ({ searchTerm = '' }: { searchTerm?: string }) => {
    const [country, setCountry] = useState<Pays[]>([])

    useEffect(() => {
        response()
    }, [])

    async function response() {
        try {
            const res = await axios(url, {
                headers: {
                    Authorization: autorisation
                }
            });
            const data = await res.data
            if (data) setCountry(res.data.data.objects)
        } catch (error) {
            console.log(error)
        }
    }

    const filtre = country.filter((countr) => countr.names.common.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filtre.map((countryItem, index) => (
                <Cartepays key={`${countryItem.names.common}-${index}`} countries={countryItem} />
            ))}
        </div>
    )
}

export default Dashboard