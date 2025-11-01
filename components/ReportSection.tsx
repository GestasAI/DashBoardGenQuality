import React from 'react';

const PrintIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);

const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);


export const ActionAndSubHeader: React.FC = () => {
    return (
        <div className="shrink-0 space-y-2">
            {/* Action Bar */}
            <div className="flex justify-between items-center py-1">
                <div className="flex items-center space-x-3">
                    <input 
                        type="date" 
                        defaultValue={new Date().toISOString().substring(0, 10)}
                        className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#c8437a]"
                    />
                    <button className="text-gray-500 hover:text-gray-800 transition-colors">
                        <PrintIcon />
                    </button>
                </div>
                <button className="px-6 py-2 text-sm font-semibold text-[#c8437a] border border-[#c8437a] rounded-md hover:bg-purple-50 transition-colors">
                    Generar
                </button>
            </div>

            {/* Sub-header */}
            <div className="flex justify-between items-center text-xs text-gray-400 py-1">
                <button className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
                    <span>Gametos Porcinos</span>
                    <DatabaseIcon />
                </button>
                <span>Ranking</span>
            </div>
        </div>
    );
};
