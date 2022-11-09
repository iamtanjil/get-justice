import React, { createContext } from 'react';

export const AuthProvider = createContext();


const AuthContext = ({children}) => {
    const authInfo ={
        name: 'Tanjil'
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;