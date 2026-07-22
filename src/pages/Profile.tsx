/* Here I import all the package I will use */
import { MdModeEdit,MdDelete } from "react-icons/md"
import { FaRegUserCircle } from "react-icons/fa";
import { user } from "../constants/Appelapi";

// The main function
const Profile: React.FC = () => {
    return (
        /* The user image must be there if it already exist else letting the icon */
        <div className='p-6 space-y-6 text-center'>
            <div className="text-center m-4 p-5 relative">
                <FaRegUserCircle className="w-25 h-25 text-center"/>
            </div>
            
                            
            {/* The action for the user */}
            <div className="flex flex-col items-center m-4 p-4">
                    
                <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">{user?.displayName}</h5>
                <span className="text-sm text-body">{user?.email}</span>
                <div className="flex mt-4 md:mt-6 gap-4 justify-between">
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
    )
}
export default Profile