import Header from "../Components/Layout/Header"
import Sidebar from "../Components/Layout/Sidebar"
import  type {Search} from '../Components/Layout/Header'
import { MdModeEdit,MdDelete } from "react-icons/md"
import { FaRegUserCircle } from "react-icons/fa";


let name: string = "Salimata Sawadogo"
let email: string ='salimata47sawadogo@gmail.com'
const Profile = ({searchTerm,SetserchTerm}:Search) => {
    return (
        <div className={`min-h-screen bg-linear-to-br from-slate-50 via-blue-50
        to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500`}>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar/>
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <Header searchTerm={searchTerm} SetserchTerm={SetserchTerm}/>
                    <main className='flex-1 overflow-y-auto bg-transparent'>
                      <div className='p-6 space-y-6'>
                        {/* <Dashboard/> */}
                        <div className="relative bg-neutral-primary-soft max-w-xs w-full p-6 shadow-xs text-center">
                            

                            <div className="flex flex-col items-center">
                                <FaRegUserCircle className="w-25 h-25"/>
                                <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">{name}</h5>
                                <span className="text-sm text-body">{email}</span>
                                <div className="flex mt-4 md:mt-6 gap-4">
                                    <button type="button" className="inline-flex items-center text-slate-700 dark:text-white bg-blue-400 box-border border border-transparent hover:bg-blue-600 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-2xl">
                                        <MdModeEdit className="w-6 h-6 "/>
                                        Modifier
                                    </button>
                                    <button type="button" className="inline-flex self-start w-auto text-body bg-red-400 box-border border rounded-2xl hover:bg-red-600 hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                                        <MdDelete className="w-6 h-6"/>
                                        Effacer
                                    </button>
                                </div>
                            </div>
                        </div>
                      </div>
                    </main>
                </div>
            </div>
      </div> 
    )
}
export default Profile