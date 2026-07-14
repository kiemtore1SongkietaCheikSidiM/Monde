/* Here I import all the package I will use */
import React from 'react'
import { IoMdHome } from "react-icons/io"
import { FaMoneyCheckAlt} from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { CiLogout } from "react-icons/ci"
import { TfiWorld } from "react-icons/tfi"
import { CiSettings } from "react-icons/ci"
import { TiWeatherCloudy } from "react-icons/ti"
import { AiFillPicture } from "react-icons/ai"
import { FaHeart } from "react-icons/fa"
import { RiTimeZoneFill } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/firebase'
import type { Search } from './Header'




let role : string = "Visiteur"
const user = auth.currentUser;
interface SidebarProps {
    id: number,
    icon: React.ElementType,
    label: string,
    path?:string,
    action?:string
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
        label:'Accueil',
        path:"/"
    },
    {
        id:2,
        icon:FaHeart,
        label:'Favoris',
        color:'red',
        count:2,
        path: "/favorie"

    },
    {
        id:4,
        icon:CgProfile,
        label: 'Profil',
        active:true,
        path:"/profile"
    },
    {
        id:7,
        icon:TiWeatherCloudy,
        label:"Meteo",
        path:"/temps"
    },
    {
        id:8,
        icon:AiFillPicture,
        label:"Paysage",
        path:"/pixel"
    },
    {
        id:9,
        icon:FaMoneyCheckAlt,
        label:"Devise",
        path:"/rate"
    },
    {
        id:10,
        icon:RiTimeZoneFill,
        label:"Heure Locale",
        path:"/timezone"
    },
    {
        id:5,
        icon:CiSettings,
        label: 'Parametres',
        path:"/setting"
    },
    {
        id:6,
        icon:CiLogout,
        label: 'Deconnexion',
        action:"logout"
    },
]





const Sidebar = ({ sidebarcollaps, ontoggle }: Search) => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/Login');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <aside className={`flex flex-col border-r border-slate-200/50 bg-white/80 backdrop-blur-xl transition-all duration-300 ease-in-out dark:border-slate-700/50 dark:bg-slate-900/80 ${!sidebarcollaps ? 'w-20 md:w-22 lg:w-24' : 'w-64 md:w-68 lg:w-72'} relative z-10`}>
            <div className="flex items-center justify-between border-b border-slate-200/50 p-4 dark:border-slate-700/50 sm:p-6">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-purple-600 shadow-lg">
                        <TfiWorld className="h-6 w-6 text-white" />
                    </div>

                    {sidebarcollaps && (
                        <div className="min-w-0">
                            <h1 className="text-lg font-bold text-slate-800 dark:text-white">Le Monde</h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Platforme de decouverte des pays du monde</p>
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={ontoggle}
                    className="hidden rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:inline-flex"
                    aria-label={sidebarcollaps ? 'Replier la barre latérale' : 'Etendre la barre latérale'}
                >
                    {sidebarcollaps ? <span className="text-sm"></span> : <span className="text-sm"></span>}
                </button>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto p-3 sm:p-4">
                {MenuItem.map((item) => {
                    const handleClick = () => {
                        if (item.action === 'logout') {
                            handleLogout();
                        } else if (item.path) {
                            navigate(item.path);
                        }
                    };
                    return (
                        <div key={item.id}>
                            <button
                                className={`flex w-full cursor-pointer items-center rounded-xl p-3 transition-all duration-200 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:hover:bg-blue-400/80 dark:focus:ring-offset-slate-900 ${sidebarcollaps ? 'justify-start' : 'justify-center'}`}
                                onClick={handleClick}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className={item.color === 'red' ? 'h-5 w-5 text-red-500' : 'h-5 w-5 text-slate-600 dark:text-slate-300'} />

                                    {sidebarcollaps && (
                                        <div className="flex items-center gap-2">
                                            <span className="ml-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {item.label}
                                            </span>
                                            {item.count && (
                                                <span className="rounded-full bg-slate-200 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-100">
                                                    {item.count}
                                                </span>
                                            )}
                                            {item.badge && (
                                                <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                                                    {item.badge}
                                                </span>
                                            )}
                                            {item.active && (
                                                <span className="rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                                                    {item.active}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </button>
                        </div>
                    );
                })}
            </nav>

            <div className="border-t border-slate-200/50 p-3 dark:border-slate-700/50 sm:p-4">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/50">
                    <CgProfile className="h-8 w-8 shrink-0 text-slate-600 dark:text-slate-300" />
                    <div className="min-w-0 flex-1">
                        {sidebarcollaps && (
                            <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-slate-800 dark:text-white">{user?.displayName}</p>
                                <p className="truncate text-sm text-slate-500 dark:text-slate-400">{role}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
};
export default Sidebar