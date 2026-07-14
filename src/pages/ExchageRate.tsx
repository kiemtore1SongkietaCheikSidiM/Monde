/* Here I import all the package I will use */
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const navigate = useNavigate()
// var calling data from env
const URL:string = import.meta.env.VITE_exchange

// The main function
const ExchangeRate = ()=> {

    // var for the rate
    const [Amount1,SetAmount] = useState<number>(0)
    const [Amount2, SetAmount2] = useState<number>(0)
    const [currencies, setCurrencies] = useState<string>("USD")
    const [currenties2,SetCurrencies2] = useState<string>("INR")
    const [exchangerate, setExchangeRate] = useState<Record<string,number>>({})

    useEffect(()=>{
        async function Exchang(){
            try {
                // waiting for the API response 
                const res =  await axios.get(URL)
                if (!res.data) {
                    throw new Error("Failed to feech your data")
                }
                const response = res.data
                setExchangeRate(response.conversion_rates || {})
            }
            catch (error) 
            {
                console.error("Error call by axios :",error)
                navigate('/error')
            }
        }
        Exchang()
    },[])
    

    // function convertion
    const convert = (amount:number,fromcurrencie:string,toCurrencies:string) =>{
        if (fromcurrencie === toCurrencies) return amount
        const rate = exchangerate[toCurrencies] / exchangerate[fromcurrencie]
        return (amount*rate).toFixed(2)
    }
    useEffect(()=>{
        if(exchangerate[currencies] && exchangerate[currenties2]){
            //setting the value while the user is typing
            const ConvertedAmount : any = convert(Amount1,currencies,currenties2)
            SetAmount2(ConvertedAmount)
        }
  },[Amount1,Amount2,currencies,currenties2,ExchangeRate])
    return (
        <div className="md:block">
           {/*  Welcoming messsage */}
            <div className="text-2xl font-bold text-slate-600 dark:text-slate-100 mt-10 text-center">
                Bienvenue dans la page des devise Ici on fait une convertion actualiser des devises mondiaux 
            </div>
                        
                        

            <div className='md:flex md:flex-row mt-15 gap-x-12 mr-10 sm:block'>
                <div className='border-black border-2 rounded-lg p-3 m-2'>
                    <select name="" id="" value={currencies}
                    onChange={(e)=>setCurrencies(e.target.value)} className='bg-black text-white rounded-lg p-4'>
                        {/* Display all the currenties that the API give */}
                        {
                            Object.keys(exchangerate).map((curr)=>(
                                <option key={curr} value={curr}>
                                    {curr}
                                </option>
                            ))
                        }
                    </select>

                    {/* input for the user to set the value */}
                    <input type="number" className='border-b-2 ml-3 border-blue-700 outline-none' value={Amount1} 
                     onChange={(e)=> SetAmount(e.target.value=== "" ? 0 : Number(e.target.value))}/>
                </div>
                <div className='border-black border-2 rounded-lg p-3 m-2'>
                    <select name="currencies2" id="currencies2" className='bg-black text-white rounded-lg p-4' value={currenties2}
                     onChange={(e)=>SetCurrencies2(e.target.value)} >
                        {
                            Object.keys(exchangerate).map((curr)=>(
                                <option key={curr} value={curr}>
                                    {curr}
                                </option>
                            ))
                        }
                    </select>
                    <input type="number" readOnly className='border-b-2 ml-3 border-blue-700 outline-none' value={Amount2} 
                     onChange={(e)=> SetAmount2(e.target.value=== "" ? 0 : Number(e.target.value))}/>
                </div>
            </div>
        </div>
    )
}
export default ExchangeRate