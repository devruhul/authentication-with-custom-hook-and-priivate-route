import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const initialAuthntication = () => {
     initializeApp(firebaseConfig)
}

export default initialAuthntication;

