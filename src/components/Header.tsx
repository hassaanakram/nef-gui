import React from 'react';
import AaltoLogoWhite from '../assets/aalto-logo-white.png';
import AaltoLogoBlack from '../assets/aalto-logo-black.png';
import PrimaryButton from './PrimaryButton';
import { useAuth } from '../providers/authProvider';

interface HeaderProps {
    scheme: string;
}

const Header: React.FC<HeaderProps> = ({scheme}) => {
    const {logout} = useAuth();
    const headerStyle = {
        background: scheme === "primary" ? "bg-[#FD6360]" : "bg-black",
        textColour: scheme === "primary" ? "text-black" : "text-white",
        logo: scheme === "primary" ? AaltoLogoBlack : AaltoLogoWhite,
        logoutButton: scheme === "alternate" ? true : false,
    }

    return (
        <div className={`w-dvw h-1/4 flex flex-row place-items-center ${headerStyle.background} ${headerStyle.textColour}`}>
            <img src={headerStyle.logo} alt="aalto logo" className="object-left-top aspect-auto w-1/5" />
            <span className="grow m-auto font-inter font-bold text-2xl">Aalto University 5G Core Hackathon</span>
            <span className="mr-10">{headerStyle.logoutButton && <PrimaryButton onClick={() => {logout()}} Text="Logout"/>}</span>
        </div>
    );
};

export default Header;