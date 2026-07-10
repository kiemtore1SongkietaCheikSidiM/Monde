import { MdLightMode } from "react-icons/md"
import { MdNightlight } from "react-icons/md"
import { useEffect, useState } from "react"

const Setting = () => {
    const defaultState : string = localStorage.getItem('theme') || 'light'
    const [theme, setTheme] = useState<string>(defaultState)

    useEffect(()=>{
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('dark', theme === 'dark')
    },[theme])
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
        <div className='p-6 space-y-6'>
            {/* <Dashboard/> */}
            <div className="flex gap-6 grid-cols-2">
                <div className="block p-15 m-2 border rounded-2xl ">
                    <button className="cursor-pointer" onClick={Clair}>
                        <MdLightMode className="w-25 h-25 text-center text-yellow-300"/>
                        <p className="mt-20 mr-5  text-slate-700 dark:text-slate-200 ">
                            Theme Clair
                        </p>
                    </button>
                </div>


                <div className="block p-15 m-2 border rounded-2xl">
                    <button onClick={Sombre}>
                        <MdNightlight className="w-25 h-25 text-center"/>
                        <p className="mt-20 mr-5  text-slate-700 dark:text-slate-200 ">
                            Theme Sombre
                        </p>
                    </button>
                </div>
            </div>
        </div>
                    
    )
}
export default Setting