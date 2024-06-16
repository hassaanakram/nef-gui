import React from 'react';

interface PrimaryButtonProps {
    onClick: () => void;
    Text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, Text}) => {
    return (
        <button onClick={onClick} className="bg-[#FD6360] rounded px-4 py-2 hover:bg-[#fe7371]">
            {Text}
        </button>
    );
};

export default PrimaryButton;