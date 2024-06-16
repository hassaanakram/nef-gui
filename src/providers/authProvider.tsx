import axios from 'axios';
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';

type AuthStatus = 'authenticated' | 'unauthenticated' | 'undefined';

type AuthContextType = {
    status: AuthStatus;
    login: (credentials: {username: string, password: string}) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<undefined | AuthContextType>(undefined);

const AuthProvider = ({children}: {children: ReactNode}) => {
    const [status, setStatus] = useState<AuthStatus>('undefined');
    const authToken = localStorage.getItem('auth');

    useEffect (() => {
        if (authToken) {
            axios.defaults.headers.common["Authorization"] = "Basic " + authToken;
            setStatus('authenticated');
            console.log('auth found. authenticated');
        } else {
            delete axios.defaults.headers.common["Authorization"];
            setStatus('unauthenticated');
            console.log('no auth found. unauthenticated');
        }
    }, [authToken]);
    console.log('authProvider status:', status);

    const login = async (credentials: {username: string, password: string}) => {
        try {
            const auth = btoa(credentials.username + ':' + credentials.password);
            localStorage.setItem('auth', auth);
            axios.defaults.headers.common["Authorization"] = "Basic " + auth;
            setStatus('authenticated');
        } catch (error) {
            alert('login failed' + error);
            setStatus('unauthenticated');
        }
    };

    const logout = async () => {
        try {
            console.log('logging out')
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('auth');
            setStatus('unauthenticated');
        } catch (error) {
            console.error('logout failed' + error);
            setStatus('authenticated');
        }
    };

    const contextValue = {status, login, logout};

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;