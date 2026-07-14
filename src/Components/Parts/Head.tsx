/* Here I import all the package I will use */
import { TfiWorld } from "react-icons/tfi"
import { FaGithub,FaDiscord,FaYoutube,FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"

const Head : React.FC = () =>{
    return(
        /* The code come from online prebuit tailwind css */
        <nav className="bg-white/50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 sm:px-4 sm:py-2.5
         md:px-5 md:py-3
         xl:px-8
          2xl:px-10">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                <div className="flex items-center">
                    <TfiWorld className="w-6 h-6 mr-2 "/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">
                        Le Monde
                    </span>
                </div>
                <div className="flex items-center lg:order-2">
                    <a href="https://github.com/kiemtore1SongkietaCheikSidiM"
                     className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <FaGithub className="w-6 h-6 text-white bg-slate-600 rounded-full"/>
                    </a>
                    <a href="https://discord.gg/8HKbzczy"
                     className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <FaDiscord className="w-6 h-6 text-white bg-blue-600 rounded-full"/>
                    </a>
                    <a href="https://www.youtube.com/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <FaYoutube className="w-6 h-6 text-red-500"/>
                    </a>
                    <a href="https://www.facebook.com/mohamed.kiemtore.351" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        <FaFacebook className="w-6 h-6 text-blue-600"/>
                    </a>
                </div>

                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                       <li> <Link to="/">Home</Link></li>
                       <li> <Link to="/login">Connexion</Link></li>
                       <li> <Link to="/register">Cree son compte</Link></li>
                       <li><a href="mailto:kiemtorecheik@gmail.com">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    ) 
}
export default Head