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
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-3 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-4 md:p-5 lg:p-6">
        <img src={countries.flag.url_png} alt={countries.names.official} className="h-36 w-full rounded-2xl object-cover sm:h-40 md:h-44" />
        <div className="mt-4 flex-1">
            <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">
                {countries.names.common}
            </h2>
            <div className="space-y-2 text-sm text-slate-700">
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Population:</strong>
                    {countries.population.toLocaleString()}
                </p>
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Region:</strong>
                    {countries.region}
                </p>
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Capital:</strong>
                    {countries.capitals?.[0]?.name}
                </p>
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Sous-region:</strong>
                    {countries.subregion}
                </p>
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Langue:</strong>
                    {countries.languages?.[0]?.name}
                </p>
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Monnaies:</strong>
                    {countries.currencies?.[0]?.name} {countries.currencies?.[0]?.symbol}
                </p>
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Pays voisins:</strong>
                    {countries.borders}
                </p>
                <p className="flex flex-wrap gap-2">
                    <strong className="font-semibold">Fuseau Horaires:</strong>
                    {countries.timezones}
                </p>
            </div>
            <div onClick={Ajouterfavorie} className="mt-4 flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-blue-200 bg-blue-500 p-3 text-base font-medium text-white transition-colors hover:bg-blue-600 sm:text-lg">
                <span>Ajouter aux favories</span>
                <MdFavoriteBorder className="h-6 w-6" />
            </div>
        </div>
    </div>
  );
};

export default Cartepays