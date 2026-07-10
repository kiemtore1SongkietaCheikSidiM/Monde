import { Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import type { Props } from '../Parts/Recherche';
import { useState } from 'react';

// Adjust path if needed


const Layout = ({searchTerm,SetserchTerm,SetSearch,search}:Props)=>{
  const [sidebarcollaps, setSidebarcollaps] = useState(false)
  return(
    <div className={`min-h-screen bg-linear-to-br from-slate-50 via-blue-50
      to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500`}>
        <div className='flex h-screen overflow-hidden'>
          <Sidebar sidebarcollaps={sidebarcollaps} ontoggle={()=>setSidebarcollaps(prev => !prev)}/>
          <div className='flex-1 flex flex-col overflow-hidden'>
            <Header searchTerm={searchTerm} SetserchTerm={SetserchTerm} SetSearch={SetSearch} search={search}
            sidebarcollaps={sidebarcollaps} ontoggle={()=>setSidebarcollaps(prev => !prev)}/>
            <main className='flex-1 overflow-y-auto overflow-x-hidden bg-transparent'>
              <Outlet/>
            </main>
          </div>
        </div>
    </div>
  )
}
export default Layout