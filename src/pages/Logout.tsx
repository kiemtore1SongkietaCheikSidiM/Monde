import { signOut } from 'firebase/auth';
import { auth } from '../pages/firebase'; // Adjust to your firebase.ts path
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 1. Tell Firebase to clear the active user session
      await signOut(auth);
      
      // 2. Redirect the user back to the Login page
      navigate('/Login');
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-md shadow-sm transition duration-150 ease-in-out"
    >
      Se déconnecter
    </button>
  );
}
