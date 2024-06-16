import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
interface UELocationFormProps {
    onSubmit: (afid: string, imsi: string) => void;
}

const UELocationForm: React.FC<UELocationFormProps> = ({ onSubmit }) => {
    const [afid, setAfid] = useState('');
    const [imsi, setImsi] = useState('');

    const handleAfidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAfid(event.target.value);
    };

    const handleImsiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImsi(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(afid, imsi);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row gap-3 text-white font-inter font-bold px-4 py-5 bg-black">
                <label htmlFor="afid">AFID</label>
                <input
                    type="text"
                    id="afid"
                    value={afid}
                    onChange={handleAfidChange}
                    className="text-black font-normal"
                />
                <label htmlFor="imsi">IMSI</label>
                <input
                    type="text"
                    id="imsi"
                    value={imsi}
                    onChange={handleImsiChange}
                    className="text-black font-normal"
                />
                <PrimaryButton onClick={() => handleSubmit} Text="Get Location" />
            </div>
        </form>
    );
};

export default UELocationForm;