import type { Pays } from "../../pages/Dashboard"
import { MdFavoriteBorder } from "react-icons/md"

type Props = {
  countries: Pays;
};


const Cartepays = ({ countries }: Props) => {
    const Ajouterfavorie = ()=>{
        //Catch favorie
        const favories:Pays [] = JSON.parse(
            localStorage.getItem("favories") || "[]"
        )
        //Check if it already exist
        const existe = favories.some(
            (item) => item.names.common === countries.names.common
        )
        if(existe){
            alert("CE pays existe deja dans les favories")
            return
        }
        favories.push(countries)
        localStorage.setItem("favories",JSON.stringify(favories))
        alert(`Ajouter aux favories`)
    }
  return (
    <div className="bg-neutral-100 block max-w-sm p-6 border border-default rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105">
        <img src={countries.flag.url_png} alt={countries.names.official} className="rounded-base w-full  h-37 object-cover  text-center"/>
        <div className="mt-2">
            <h2 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-center">
                {countries.names.common}
            </h2>
            <p className="flex space-x-2">
                <strong className="font-bold ">Population: </strong>
                {countries.population.toLocaleString()}
            </p>
            <p className="flex space-x-2">
                <strong className="font-semibold">Region: </strong>
                {countries.region}
            </p>
            <p className="flex space-x-2">
                <strong className="font-semibold">Capital: </strong>
                {countries.capitals?.[0]?.name}
            </p>
            <p className="flex space-x-2">
                <strong className="font-semibold">Sous-region: </strong>
                {countries.subregion}
            </p>
            <p className="flex space-x-2">
                <strong className="font-semibold">Langue: </strong>
                {countries.languages?.[0]?.name}
            </p>
            <p className="flex space-x-2">
                <strong className="font-semibold">Monnaies: </strong>
                 {countries.currencies?.[0]?.name} {countries.currencies?.[0]?.symbol}
            </p>
            <p className="flex space-x-2">
                <strong className="font-semibold">Pays voisins: </strong>
                {countries.borders}
            </p>
            <p className="flex space-x-2">
                <strong className="font-semibold">Fuseau Horaires: </strong>
                {countries.timezones}
            </p>
            <div onClick={Ajouterfavorie} className="mt-2 p-2 flex space-x-4 bg-blue-400 border rounded-2xl hover:bg-blue-600 cursor-pointer text-2xl text-slate-900 dark:text-slate-100">
                <p>Ajouter aux favories</p>
                <div>
                    <MdFavoriteBorder className="w-7 h-7"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Cartepays