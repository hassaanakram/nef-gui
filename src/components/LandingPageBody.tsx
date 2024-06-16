import React from 'react';
import LoginForm from './LoginForm';
import {useAuth} from '../providers/authProvider';

const LandingPageBody: React.FC = () => {
    const {login} = useAuth();

    return (
        <div className="w-dvw h-3/4 flex flex-col place-items-center bg-zinc-900">
            <span className="font-inter font-bold text-xl text-white m-10 text-center">Welcome to the 5G Core Hackathon arranged by Aalto University. This Hackathon aims to test the security of the Network Expsoure Function being used in the Aalto Network. Please login to continue.</span>
            <LoginForm onLogin={(username, password)=>login({username, password})} />
        </div>
    );
};

export default LandingPageBody;