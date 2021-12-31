import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react'
import initialzeAuthentication from './../Firebase/firebase.initialize'

initialzeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const signout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])

    return {
        user, error,
        signout,
        handleGoogleSignIn
    }
}

export default useFirebase