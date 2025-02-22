import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase_init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Create User with Email & Password
    const createUser = async (email, password) => {
        setLoading(true);
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign In User
    const signInUser = async (email, password) => {
        setLoading(true);
        return await signInWithEmailAndPassword(auth, email, password);
    };

    // Sign Out User
    const signOutUser = async () => {
        setLoading(true);
        return await signOut(auth);
    };

   
    // Sign in with Google
    const googleAuth =async () => {
        setLoading(true);
        return await signInWithPopup(auth, googleProvider);
    };

    // Track Authentication State 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current User-->', currentUser?.email);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe(); 
    }, []);

    // Context Value
    const info = {
        user,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        loading,
        googleAuth,
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
