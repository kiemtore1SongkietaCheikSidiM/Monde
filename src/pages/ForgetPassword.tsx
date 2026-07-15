/* Here I import all the package I will use */
import Head from "../Components/Parts/Head"
import { TfiWorld } from "react-icons/tfi";
import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../Firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


//function for the firebase
export async function resetPassword(email: string): Promise<void> {
    const navigate = useNavigate()
  try {
    // Firebase sends a localized reset email directly to this address
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent successfully!");
    } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/user-not-found":
          console.error("Aucun utilisateur trouvé avec cette adresse e-mail.");
          break;
        case "auth/invalid-email":
          console.error("L'adresse e-mail n'est pas valide.");
          break;
        default:
          console.error(`Reset error [${error.code}]: ${error.message}`);
          navigate('/error')
      }
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

const ForgetPassword : React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(false);

    const handleResetSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            setMessage(true);
        } catch (err) {
        /* setMessage("Échec de l'envoi de l'e-mail. Veuillez réessayer."); */
        console.error(err)
        }
    };

    return (
        <div>
            <Head/>
            {message ? <div>Un e-mail de réinitialisation a été envoyé !</div>:
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
                            <form onSubmit={handleResetSubmit}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 m-5">
                                    Change
                                </button>
                                <div>
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}
export default ForgetPassword