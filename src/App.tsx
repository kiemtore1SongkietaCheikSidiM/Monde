/* Here I import all the package I will use */
import { useState } from 'react';
import { ProtectedRoute } from './Components/Parts/ProtectedRoute';
import { AuthProvider } from './Firebase/AuthContext';
import './App.css'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Error from './pages/Error'
import ForgetPassword from './pages/ForgetPassword'
import Favories from './pages/Favories'
import ExchangeRate from './pages/ExchageRate'
import OpenWheather from './pages/OpenWheather'
import PixelAPI from './pages/PixelAPI'
import TimeZoneAPI from './pages/TimeZoneApi'
import Layout from './Components/Layout/Layout';




// Here is the main function to set all the web app
const App = () => {
  // define of the variable
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');
  return(
    /* An AuthProvider that give the Authentification */
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes Anyone can access here without any keys */}
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/oublie' element={<ForgetPassword/>}/>
          <Route path='/error' element={<Error/>}/>

          {/* Protected Routes if you want to access here you must have an permissions to acces by email and password */}
          <Route element={<ProtectedRoute><Layout search={search} SetSearch={setSearch} SetserchTerm={setSearchTerm} searchTerm={searchTerm}/></ProtectedRoute>}>
            <Route path='/' element={<Dashboard searchTerm={searchTerm} />}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/favorie' element={<Favories/>}/>
            <Route path='/rate' element={<ExchangeRate/>}/>
            <Route path='/temps' element={<OpenWheather/>}/>
            <Route path='/pixel' element={<PixelAPI/>}/>
            <Route path='/timezone' element={<TimeZoneAPI/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App


























/* 

<div className='flex flex-row mt-15 gap-x-12'>
      <div className='border-black border-2 rounded-lg p-1'>
        <select name="" id="" value={currencies}
        onChange={(e)=>setCurrencies(e.target.value)} className='bg-black text-white rounded-lg pt-2 pb-2'>
          {
            Object.keys(ExchangeRate).map((curr)=>(
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))
          }
        </select>
        <input type="number" className='border-b-2 ml-3 border-blue-700 outline-none' value={Amount1} onChange={(e)=> SetAmount(e.target.value)}/>
      </div>
      <div className='border-black border-2 rounded-lg p-1'>
        <select name="" id="" className='bg-black text-white rounded-lg pt-2 pb-2' value={currenties2}
        onChange={(e)=>SetCurrencies2(e.target.value)} >
          {
            Object.keys(ExchangeRate).map((curr)=>(
              <option key={curr}>
                {curr}
              </option>
            ))
          }
        </select>
        <input type="number" className='border-b-2 ml-3 border-blue-700 outline-none' value={Amount2} onChange={(e)=> SetAmount2(e.target.value)}/>
      </div>
      
    </div> */










/* const pays:string = "Japan"
  const API_Key:string= "pTWZnAHWzP8o7TbNdxJNWkn9oFC2ODitrvnfHeQdMUbEQyT9ncNfujjg"
  const URL:string = `https://api.pexels.com/v1/search?query=${pays}&per_page=12`
  const ok =async ()=>{
    const res = await axios.get(URL,{
      headers:{
        Authorization:API_Key
    }
    })
    console.log(res.data)
  }
  ok() */


















{/* <div className={`min-h-screen bg-linear-to-br from-slate-50 via-blue-50
        to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500`}>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar/>
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <Header/>
                    <main className='flex-1 overflow-y-auto bg-transparent'>
                      <div className='p-6 space-y-6'>
                        <Dashboard/>
                      </div>
                    </main>
                </div>
            </div>
      </div> */}

      /* useEffect(() => {
    async function response() {
    const res = await fetch("https://api.restcountries.com/countries/v5",
    {
      headers: {
        Authorization: "Bearer rc_live_84ece2b1a1794a1cbfbdc9dcdba4627d"
      }
     }
     );

    console.log("Status :", res.status);

  const text = await res.text();
  console.log(text);
}

response();
}, []); */




/* import { useEffect } from 'react' */
/* import axios from 'axios' */
/* import Setting from './pages/Setting' */
/* import Error from './pages/Error' */
/* import ForgetPassword from './pages/ForgetPassword' */
/* import Register from './pages/Register' */
/* import Login from './pages/Login' */
/* import Head from './Components/Parts/Head' */
/* import Dashboard from './pages/Dashboard'
import Header from './Components/Layout/Header'
import Sidebar from './Components/Layout/Sidebar' */
/*  */
/* const cle_API_REST : string = 'rc_live_665264788e314c599245d0a226b09913' */