import React from 'react';
import Header from '../components/Header';
import LandingPageBody from '../components/LandingPageBody';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col place-items-center h-dvh">
            <Header scheme={'primary'}/>
            <LandingPageBody />
        </div>
    );
};

export default LandingPage;