import { FiMenu } from "react-icons/fi"
import Recherche from '../Parts/Recherche'
import { IoIosAddCircle } from "react-icons/io"
import { FaBell } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { FaChevronDown } from "react-icons/fa"
import { auth } from '../../Firebase/firebase'
import { Link } from "react-router-dom"





const user = auth.currentUser
let newnotification : number =3
let role: string = 'Visiteur'
export type Search={
    searchTerm?:string | (()=> void) 
    search?:string
    SetserchTerm?:React.Dispatch<React.SetStateAction<string>>
    SetSearch?:React.Dispatch<React.SetStateAction<string>>
    sidebarcollaps?:boolean
    ontoggle?:()=>void
} 
const Header = ({ searchTerm, SetserchTerm, SetSearch, search, sidebarcollaps, ontoggle }: Search) => {
    return (
        <header className="border-b border-slate-200/50 bg-white/80 px-3 py-3 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80 sm:px-4 md:px-5 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                    <button
                        className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        onClick={ontoggle}
                        aria-label="Ouvrir ou fermer la barre latérale"
                    >
                        <FiMenu className="h-5 w-5" />
                    </button>

                    <div className={`hidden md:block ${sidebarcollaps ? 'max-w-48' : 'max-w-56 lg:max-w-sm'}`}>
                        <h1 className="text-lg font-black text-slate-800 dark:text-white sm:text-xl lg:text-2xl">Le Monde</h1>
                        <p className="text-xs font-medium text-slate-700 dark:text-zinc-300 sm:text-sm">Bienvenue dans notre reseau {user?.displayName}</p>
                    </div>
                </div>

                <div className="order-3 w-full md:order-2 md:flex-1 md:max-w-xl lg:max-w-2xl">
                    <Recherche searchTerm={searchTerm} SetserchTerm={SetserchTerm} SetSearch={SetSearch} search={search} />
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <button className="hidden rounded-xl bg-linear-to-r from-blue-500 to-purple-600 px-3 py-2 text-sm font-medium text-white transition-all hover:shadow-lg md:flex md:items-center md:gap-2 lg:px-4">
                        <IoIosAddCircle className="h-5 w-5" />
                        <span>Action</span>
                    </button>

                    <button className="relative rounded-xl p-2.5 text-slate-800 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700" aria-label="Notification">
                        <FaBell className="h-5 w-5" />
                        <span className="absolute -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                            {newnotification}
                        </span>
                    </button>

                    <button className="rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                        <Link to='/setting'><IoSettingsOutline className="h-5 w-5" /></Link>
                    </button>

                    <div className="hidden items-center gap-3 border-l border-slate-200 pl-3 dark:border-slate-700 md:flex">
                        <CgProfile className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{user?.displayName}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
                        </div>
                        <FaChevronDown className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header