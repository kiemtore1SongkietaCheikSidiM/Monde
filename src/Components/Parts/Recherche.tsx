import { IoMdSearch } from "react-icons/io";
type Props={
    searchTerm:string,
    SetserchTerm: React.Dispatch<React.SetStateAction<string>>
}
const Recherche = ({SetserchTerm}:Props)=> {
    return (
        <div className='relative '>
            <IoMdSearch className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2
                          text-slate-400 dark:text-slate-100"/>
            <input type="text" className='w-full pl-10 pr-4
            py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800
             dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' placeholder='Rechercher un pays'
             onChange={(e)=>{SetserchTerm(e.target.value)}} />
        </div>
    )
}
export default Recherche