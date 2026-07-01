import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md"
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
let name: string
let role : string
name = 'Karim'
role = 'Visiteur'
interface SidebarProps {
    id: number,
    icon: React.ElementType,
    label: string,
    count?:number,
    active?:boolean,
    badge?:boolean,
    color?: string,
    submenu?: SidebarProps[]
}
const MenuItem : SidebarProps[] =[
    {
        id:1,
        icon:IoMdHome,
        label:'Accueil'
    },
    {
        id:2,
        icon:MdFavoriteBorder,
        label:'Favoris',
        color:'red',
        count:2,

    },
    {
        id:3,
        icon:FaHistory,
        label:'Historique',
        badge:true,
    },
    {
        id:4,
        icon:CgProfile,
        label: 'Profil',
        active:true,
    },
    {
        id:5,
        icon:CiSettings,
        label: 'Parametres'
    },
    {
        id:6,
        icon:CiLogout,
        label: 'Deconnexion'
    }
]
const Sidebar: React.FC = ()=>{
    return (
        <div className={` 
         transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80
         backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 
         flex flex-col relative z-10`}>
           {/*  Logo */}
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-linear-to-r from-blue-600
                     to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <TfiWorld className='w-6 h-6 text-white'/>
                     </div>

                     {/* Condition rendering */}
                     <div>
                      <h1
                       className='text-xl font-bold text-slate-800 dark:text-white'>
                        Le Monde
                      </h1>
                      <p className='
                        text-xs text-slate-500 dark:text-slate-400'>
                        Platforme de decouverte des pays du monde
                      </p>
                    </div>
                </div>
            </div>

            {/* Navigation. I will display the navigation items in a list and map through the MenuItem array to display each item with its icon and label. If the item has a count or badge, I will display that as well. If the item is active, I will apply a different style to indicate that it is currently selected. */}
            <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
                {MenuItem.map((item)=>{
                    return(
                        <div key={item.id}>
                            <button className="w-full flex items-center justify-between p-3 rounded-xl
                             transition-all duration-200 hover:bg-blue-200 dark:hover:bg-slate-800
                              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                               focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900">
                                <div className='flex items-center space-x-3'>
                                    
                                    <item.icon className={`w-5 h-5 text-slate-600 dark:text-slate-300 ${item.color ? '' : `text-${item.color}-700`}`} />
                                    
                                    {/* Condition Rendering */}
                                    <span className='font-medium ml-2'>
                                        {item.label}
                                    </span>
                                    {item.count && (
                                        <span className='px-2 py-1 text-xs bg-slate-200
                                        dark:bg-slate-800 text-slate-600 dark:text-slate-100
                                         rounded-full'>
                                            {item.count}
                                        </span>
                                    )}
                                    {item.badge && (
                                        <span className='px-2 py-1 text-xs bg-red-500 text-white
                                         rounded-full'>
                                            {item.badge}
                                        </span>
                                    )}
                                    {item.active &&(
                                        <span className='px-2 py-1 text-xs bg-blue-500 text-white
                                         rounded-full'>
                                            {item.active}
                                        </span>
                                    )}
                                </div>
                            </button>
                        </div>
                    )
                })
                }
            </nav>

            {/* User profile section. I will display the user's profile picture, name, and role. I will also include a button to log out of the application. */}
            <div className='p-4 border-t border-slate-200/50
             dark:border-slate-700/50'>
                <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50
                 dark:bg-slate-800/50'>
                    <CgProfile className='w-8 h-8 text-slate-600 dark:text-slate-300'/>
                    <div className='flex-1 min-w-0'>
                        <div className='flex-1 min-w-0'>
                            <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>
                               {name}
                            </p>
                            <p className='text-sm text-slate-500 dark:text-slate-400 truncate'>
                                {role}
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
    )
}
export default Sidebar