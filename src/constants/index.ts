import { CiSettings } from "react-icons/ci"
import { TiWeatherCloudy } from "react-icons/ti"
import { AiFillPicture } from "react-icons/ai"
import { FaHeart } from "react-icons/fa"
import { RiTimeZoneFill } from "react-icons/ri"
import { CiLogout } from "react-icons/ci"
import { IoMdHome } from "react-icons/io"
import { FaMoneyCheckAlt} from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import type { SidebarProps } from "../types"



// Menu item that take sidebarprops and assigne to the var a value
export const MenuItem : SidebarProps[] =[
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