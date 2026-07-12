import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import type { Props } from '../Parts/Recherche';
import { useState } from 'react';

const Layout = ({ searchTerm, SetserchTerm, SetSearch, search }: Props) => {
  const [sidebarcollaps, setSidebarcollaps] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_30%),linear-gradient(135deg,_rgba(248,250,252,1),_rgba(224,231,255,0.95),_rgba(199,210,254,0.85))] text-slate-800 transition-all duration-500 dark:bg-slate-900 dark:text-slate-100">
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
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mx-auto w-full max-w-7xl px-2 py-3 sm:px-4 md:px-5 lg:px-8 xl:px-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout