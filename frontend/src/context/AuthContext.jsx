import React, { createContext, useState, useEffect } from 'react';
import { getMeAPI, loginAPI, logoutAPI } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser]       = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            setTimeout(() => setLoading(false), 0);
            return;
        }

        getMeAPI()
            .then((userData) => setUser(userData))
            .catch(() => localStorage.removeItem('accessToken'))
            .finally(() => setLoading(false));
    }, []);

    const login = async (email, password) => {
        const data = await loginAPI(email, password);
        localStorage.setItem('accessToken', data.accessToken);
        setUser(data.data.user);
        return data.data.user;
    };

    const logout = async () => {
        try {
            await logoutAPI();
        } catch (error) {
            console.error('Logout error:', error);
        }
        localStorage.removeItem('accessToken');
        setUser(null);
    };

    const isAdmin = user?.role === 'admin';

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}


export { AuthContext };