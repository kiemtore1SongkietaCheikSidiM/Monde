/* Here I import all the package I will use */
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import type { Props } from '../Parts/Recherche';
import { useState } from 'react';



//The main function. All the page that connected to protected route will call this function
const Layout = ({ searchTerm, SetserchTerm, SetSearch, search }: Props) => {
  //declare the state to make a toogle when someone click on the menu icon
  const [sidebarcollaps, setSidebarcollaps] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),linear-gradient(135deg,rgba(248,250,252,1),rgba(224,231,255,0.95),rgba(199,210,254,0.85))] text-slate-800 transition-all duration-500 dark:bg-slate-900 dark:text-slate-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarcollaps={sidebarcollaps} ontoggle={() => setSidebarcollaps((prev) => !prev)} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header
            searchTerm={searchTerm}
            SetserchTerm={SetserchTerm}
            SetSearch={SetSearch}
            search={search}
            sidebarcollaps={sidebarcollaps}
            ontoggle={() => setSidebarcollaps((prev) => !prev)}
          />
          <main className="flex-1 overflow-y-auto overflow-x-hidden block">
            <div className="mx-auto w-full max-w-7xl px-2 py-3 sm:px-4 md:px-5 lg:px-8 xl:px-10">
              {/* Here All the page will be set outlet cALL the page*/}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout