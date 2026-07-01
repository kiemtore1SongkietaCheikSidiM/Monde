import Head from "../Components/Parts/Head"
import { TfiWorld } from "react-icons/tfi";

const ForgetPassword : React.FC = () => {
    return (
        <div>
            <Head/>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <TfiWorld className="w-8 h-8 mr-2"/>
                        Le monde  
                    </div>
                    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Change de mot de passe
                        </h2>
                        <form>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Username
                                </label>
                                <input type="email" name="email" id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Nouveau mot de passe
                                </label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirme le mot de passe
                                </label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            </div>
                            <div className="flex items-start m-5">
                                <div className="flex items-center h-5">
                                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label className="font-light text-gray-500 dark:text-gray-300">
                                        J'accepte les<a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Termes et Conditions</a>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 m-5">
                                Change
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ForgetPassword