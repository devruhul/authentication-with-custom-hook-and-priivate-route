import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react'
import initializeAuthentication from './../Firebase/firebase.initialize'

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    // handle google sign in
    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    // handle sign out
    const userLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    // observe user state changes
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false)
        });

        return () => unsubscribed
    }, [auth])

    return {
        user,
        error,
        loading,
        setLoading,
        setError,
        userLogout,
        handleGoogleSignIn
    }
}

export default useFirebase;