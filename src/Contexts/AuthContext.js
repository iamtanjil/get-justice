import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthProvider = createContext();
const auth = getAuth(app)


const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const loginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => { })
            .catch(error => console.error(error))
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setLoading(false);
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        loginProvider,
        logOut,
        createUser,
        signIn,
        updateUserProfile,
        setLoading
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;