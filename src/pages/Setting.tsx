/* Here I import all the package I will use */
import { MdLightMode } from "react-icons/md"
import { MdNightlight } from "react-icons/md"
import { useEffect, useState } from "react"
import { FaCloudUploadAlt } from "react-icons/fa"

const Setting = () => {

    //var for localstorage looking for the current theme
    const defaultState : string = localStorage.getItem('theme') || 'light'
    //var to theme
    const [theme, setTheme] = useState<string>(defaultState)

    useEffect(()=>{
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('dark', theme === 'dark')
    },[theme])

    //function for the theme clair if it clair it remain but if it dark it came back
    const Clair: React.FC =() =>{
        if(theme=='light'){
            setTheme('light')
        }
        else{
            setTheme('light')
        }
    }
    const Sombre:React.FC = ()=>{
        if (theme=='dark') {
            setTheme('dark')
        }else {
            setTheme("dark")
        }
    }
    /* const handleButton:React.FC = () => {
    // Switches the theme:
    setTheme(theme == 'light' ? 'dark' : 'light')
   } */
    return (
        <div className='p-6 space-y-6 md:flex'>
            {/* <Dashboard/> */}
            <div className="md:flex gap-6 md:grid-cols-2 block md:overflow-auto">
                <div className="block p-15 m-2 border rounded-2xl ">
                    <button className="cursor-pointer" onClick={Clair}>
                        <MdLightMode className="w-25 h-25 text-center text-yellow-300"/>
                        <p className="mt-20 mr-5  text-slate-700 dark:text-slate-700 ">
                            Theme Clair
                        </p>
                    </button>
                </div>


                <div className="block p-15 m-2 border rounded-2xl">
                    <button onClick={Sombre}>
                        <MdNightlight className="w-25 h-25 text-center"/>
                        <p className="mt-20 mr-5  text-slate-700 dark:text-slate-700 ">
                            Theme Sombre
                        </p>
                    </button>
                </div>
                <div className="flex items-center justify-center w-full">
                    <label id="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium">
                        <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                            <FaCloudUploadAlt className="h-5 w-5"/>
                            <p className="mb-2 text-sm">
                                <span className="font-semibold">Click pour mettre ta photo pour le profile</span> 
                                oui glisse le fichier
                            </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
        </div>
                    
    )
}
export default Setting