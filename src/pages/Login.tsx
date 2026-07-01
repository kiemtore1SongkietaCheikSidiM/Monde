import Head from '../Components/Parts/Head'
import { TfiWorld } from "react-icons/tfi";


const Login : React.FC = () => {
    return (
        <div className="relative items-center"> 
            <div className='bg-white/50 dark:bg-slate-700 backdrop-blur-xl border-b
             border-slate-200/50 dark:border-slate-700/80 px-6 py-4'>
                <Head/>
            </div>
            <div className="h-full w-full bg-slate-50 dark:bg-neutral-700 text-center justify-center items-center mr-10">
                <div className="container h-full p-10 items-center text-center">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 text-center m-10">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap">
                                    {/* <!-- Left column container--> */}
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            {/* <!-- Logo --> */}
                                            <div className="text-center">
                                                <TfiWorld className="mx-auto h-10 w-48"/>
                                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                    Ameliorer vos connaissances des pays du monde
                                                </h4>
                                            </div>

                                            <form>
                                                {/* Username input */}
                                                <div className="relative m-2">
                                                    <input type="text" id="hs-floating-input-email" className="border peer p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none focus:pt-6
                                                     focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2" placeholder="you@email.com"/>
                                                    <label className="absolute top-0 inset-s-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-foreground origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                     peer-focus:scale-90
                                                     peer-focus:translate-x-0.5
                                                     peer-focus:-translate-y-1.5
                                                     peer-focus:text-muted-foreground-1
                                                     peer-not-placeholder-shown:scale-90
                                                     peer-not-placeholder-shown:translate-x-0.5
                                                     peer-not-placeholder-shown:-translate-y-1.5
                                                     peer-not-placeholder-shown:text-muted-foreground-1">
                                                        Nom d'utilisateur
                                                    </label>
                                                </div>

                                                {/* Password input */}
                                                <div className="relative m-2">
                                                    <input type="password" id="hs-floating-input-passowrd" className="border peer p-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-transparent focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none
                                                     focus:pt-6
                                                     focus:pb-2
                                                     not-placeholder-shown:pt-6
                                                     not-placeholder-shown:pb-2
                                                     autofill:pt-6
                                                     autofill:pb-2" placeholder="********"/>
                                                    <label className="absolute top-0 inset-s-0 p-4 h-full sm:text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-foreground origin-top-left peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                     peer-focus:scale-90
                                                     peer-focus:translate-x-0.5
                                                     peer-focus:-translate-y-1.5
                                                     peer-focus:text-muted-foreground-1
                                                     peer-not-placeholder-shown:scale-90
                                                     peer-not-placeholder-shown:translate-x-0.5
                                                     peer-not-placeholder-shown:-translate-y-1.5
                                                     peer-not-placeholder-shown:text-muted-foreground-1">
                                                        Mot de passe
                                                    </label>
                                                </div>
                                                  
                                               
                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    {/* <TERipple  className="w-full"> */}
                                                        <button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]" type="button"
                                                         style={{
                                                         background:
                                                         "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                         }}>
                                                         Se connecter
                                                        </button>
                                                    {/* </TERipple> */}
                                                    
                                                    {/* ForgetPassword */}
                                                    <a href="#!">Mot de passe oublié?</a>
                                                </div>

                                                {/* Register button */}
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2">Vous n'avez pas de compte ?</p>
                                                    {/* <TERipple rippleColor="light"> */}
                                                        <button type="button" className="inline-block rounded border-2 border-danger px-6 pb-1.5 pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                                            Creer un compte
                                                        </button>
                                                    {/* </TERipple> */}
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* <!-- Right column container with background and description--> */}
                                    <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                      style={{
                                       background:
                                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",}}>
                                            <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                                <h4 className="mb-6 text-xl font-semibold">
                                                    Bienvenue sur la plateforme
                                                </h4>
                                                <p className="text-sm">
                                                    Cette plateforme vous permet d'acceder a des informations consernant tous les pays du monde. La meteo, la culture, le fuseau horaire et bien d'autres informations sont disponibles sur cette plateforme.
                                                </p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login