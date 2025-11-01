import React from 'react';

const UndoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
);

const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


interface NavbarProps {
    onSettingsClick: () => void;
    onUserClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSettingsClick, onUserClick }) => {
    return (
        <nav className="w-full flex justify-between items-center p-4 border-b border-gray-200 shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">Gen Quality AI</h1>
            <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <UndoIcon />
                </button>
                <button onClick={onSettingsClick} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <SettingsIcon />
                </button>
                <button onClick={onUserClick} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <UserIcon />
                </button>
                <button className="px-4 py-2 bg-purple-50 text-[#c8437a] font-semibold rounded-md text-sm hover:bg-purple-100 transition-colors">
                    Salir
                </button>
            </div>
        </nav>
    );
};
