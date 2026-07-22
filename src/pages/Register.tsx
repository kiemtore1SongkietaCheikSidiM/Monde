/* Here I import all the package I will use */
import Head from '../Components/Parts/Head'
import { TfiWorld } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import loadings from "../image/loading.jpeg"
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../Firebase/LogregistreFir';




//the main function
const Register: React.FC = () => {
    //var for all the value
    const [displayName, setDisplayName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // var to take the function for navigate
    const navigate = useNavigate()


    // 2. Form submission handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the page from reloading
        setError('');

        // Password matching validation
        if (password !== passwordConfirmation) {
            setError("Les mots de passe ne correspondent pas !");
            return;
        }

        setLoading(true);
        try {
            // Call the strictly typed register function
            await registerUser(displayName, email, password);
            alert("Compte créé avec succès !");
            
            // Optional: Clear form after registration
            setDisplayName('');
            setEmail('');
            setPassword('');
            setPasswordConfirmation('');

            navigate("/Login")
        } catch (err) {
            setError("Impossible de créer le compte. Veuillez réessayer.")
            navigate("/error")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='bg-white/50 dark:bg-slate-700 backdrop-blur-xl border-b
             border-slate-200/50 dark:border-slate-700/80 px-6 py-4'>
                <Head/>
            </div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                    <TfiWorld className="mx-auto h-10 w-auto"/>
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Creer ton compte
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                         ou 
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                           Connecte toi a ton compte
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        {/* Show error messages if they exist */}
                        {error && (
                            <div className="mb-4 text-sm font-medium text-red-600 bg-red-50 p-2 rounded border border-red-200 text-center">
                                {error}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium leading-5  text-gray-700">
                                    Nom et Prenom
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="displayName" name="displayName" placeholder="EX:John Doe" type="text"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                    onChange={(e) => setDisplayName(e.target.value)} value={displayName} required/>
                                    <div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
                                        <CgProfile className='h-5 w-5'/>
                                    </div>                                   
                                    
                                </div>
                            </div>

                            
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Adresse Mail
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="email" name="email" placeholder="user@example.com" type="email" value={email}
                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                     onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
                                    <MdEmail className='w-5 h-5'/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Mot de passe
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <div className="mt-1 rounded-md shadow-sm">
                                        <input id="password" name="password" type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Confirme le mot de passe
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="password_confirmation" name="password_confirmation" type="password"
                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                     required value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="submit"
                                     className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"                                     
                                     disabled={loading}>
                                     {loading ? "Création en cours..." : "Créer ton compte"}
                                    </button>
                                </span>
                            </div>
                            <div className='text-center'>
                                {loading ? <img src={loadings} alt="En cours" className='w-20 h-10 text-center'/> : ""}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register