import { FiMenu } from "react-icons/fi";
import Recherche from '../Parts/Recherche';
import { IoIosAddCircle } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown,FaFilter  } from "react-icons/fa";

let name: string
name = 'Karim'
let newnotification : number
newnotification = 3
let role: string
role = 'Visiteur'
 export type Search={
    searchTerm:string
    SetserchTerm:React.Dispatch<React.SetStateAction<string>>
} 
const Header = ({ searchTerm, SetserchTerm }: Search) =>{
    
    return (
        <div className={` bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
        border-slate-200/50 dark:border-slate-700/80 px-6 py-4`}>
            <div className="flex items-center justify-between">
                {/* left section */}
                <div className="flex items-center space-x-4">
                    <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
                     hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                     > {/* We put that button where you can hide the sidebar and show it again when we need it */}
                        <FiMenu className='w-5 h-5'/>
                    </button>
                    <div className=' md:blok'>
                        <h1 className='text-2xl font-black text-slate-800 dark:text-white'>Le Monde</h1>
                        <p className="font-medium text-slate-800 dark:text-zinc-300">Bienvenue dans notre reseau {name}</p>
                    </div>
                </div>
                {/* center */}
                <div className='flex-1 max-w-md mx-8'>
                    {/* Je vais mettre en place la recherche */}
                    <Recherche searchTerm={searchTerm} SetserchTerm={SetserchTerm}/>
                </div>
                {/* Right section */}
                <button className="" name="filtre">
                    <FaFilter className="w-5 h-5 ml-1"/>
                </button>
                
                <div className='flex items-center space-x-3'>
                    <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-to-r 
                     from-blue-500 to-purple-600 text-white rounded-xl 
                     hover:shadow-lg transsition-all cursor-pointer'>
                        <IoIosAddCircle className='w-5 h-5'/>
                        <span className='text-sm font-medium'>Action</span>
                    </button>
                   {/*  Notification */}
                   <button className='relative p-2.5 rounded-xl text-slate-800 dark:text-slate-300
                    hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors'>
                        <FaBell className='w-5 h-5'/>
                        <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs
                         rounded-ful flex items-center justify-center'>{newnotification}</span>
                    </button>

                    {/* Settings */}
                    <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
                    hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                        <IoSettingsOutline className='w-5 h-5'/>
                    </button>

                    {/* User profile */}
                    <div className='flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700'>
                        {/* <img src={Mohamed} alt="User" className='w-8 h-8 rounded-full ring-2 ring-blue-500'/> */}
                        <CgProfile className='w-5 h-5 text-slate-600 dark:text-slate-300'/>
                        <div className='hidden md:block'>
                            <p className='text-sm font-medium text-slate-500
                             dark:text-slate-400'>{name}</p>
                             <p className='text-xs text-slate-500 dark:text-slate-400'>{role}</p>
                        </div>
                        <FaChevronDown className='w-4 h-4 text-slate-400 dark:text-slate-500'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header