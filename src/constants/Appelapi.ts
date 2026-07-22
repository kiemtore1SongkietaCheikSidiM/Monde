import { auth } from "../Firebase/firebase";

export const autorisation = import.meta.env.VITE_Authorization
export const url = import.meta.env.VITE_REST_URL
export const URL:string = import.meta.env.VITE_exchange
export const keys = import.meta.env.VITE_Keys
export const base = import.meta.env.VITE_base
export const user = auth.currentUser