import Sidebar from "../Components/Layout/Sidebar"
import Header from "../Components/Layout/Header"
import { MdLightMode } from "react-icons/md"
import { MdNightlight } from "react-icons/md"
import type { Search } from "../Components/Layout/Header"

const Setting = ({searchTerm,SetserchTerm}:Search) => {
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
                        <div className="flex gap-6 grid-cols-2">
                            <div className="block p-15 m-2 border rounded-2xl ">
                                <button className="">
                                    <MdLightMode className="w-25 h-25 text-center"/>
                                    <p className="mt-20 mr-5  text-slate-700 dark:text-slate-200 ">
                                        Theme Clair
                                    </p>
                                </button>
                            </div>


                            <div className="block p-15 m-2 border rounded-2xl">
                                <MdNightlight className="w-25 h-25 text-center"/>
                                <p className="mt-20 mr-5  text-slate-700 dark:text-slate-200 ">
                                    Theme 
                                </p>
                        </div>
                        </div>
                      </div>
                    </main>
                </div>
            </div>
      </div> 
    )
}
export default Setting