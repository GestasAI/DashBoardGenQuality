import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Header';
import { ActionAndSubHeader } from './components/ReportSection';
import { GenTable } from './components/DataTable';
import { QualityChart } from './components/DataChart';
import { SettingsModal, UserModal } from './components/ImageGenerator';
import { Gen, GenCategory } from './types';

const generateGens = (): Gen[] => {
    const gens: Gen[] = [];
    for (let i = 1; i <= 30; i++) {
        const quality = Math.floor(Math.random() * (70000 - 5000) + 5000);
        let category: GenCategory;
        if (quality > 50000) category = 'Alta';
        else if (quality > 25000) category = 'Media';
        else if (quality > 10000) category = 'Baja';
        else category = 'Refurbish';
        
        gens.push({
            id: i,
            name: `verraco${i.toString().padStart(3, '0')}`,
            quality: quality,
            status: Math.random() > 0.3 ? 'Approved' : 'Incomplete',
            selected: quality > 30000 && Math.random() > 0.4, // Pre-select some
            category: category
        });
    }
    return gens;
};


const initialGens: Gen[] = generateGens();

const App: React.FC = () => {
    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const [isUserModalOpen, setUserModalOpen] = useState(false);
    const [gens, setGens] = useState<Gen[]>(initialGens);

    const Q_TARGET = 100000000;

    const selectedGens = useMemo(() => gens.filter(g => g.selected), [gens]);
    const totalSelectedQuality = useMemo(() => selectedGens.reduce((sum, gen) => sum + gen.quality, 0) * 1000, [selectedGens]);

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-2 sm:p-4">
            <div className="w-full max-w-7xl h-[96vh] bg-white rounded-lg shadow-lg flex flex-col">
                <Navbar onSettingsClick={() => setSettingsModalOpen(true)} onUserClick={() => setUserModalOpen(true)} />
                <div className="flex-grow px-0.5 py-2 md:p-4 flex flex-col gap-3 overflow-hidden">
                    <ActionAndSubHeader />
                    <div className="flex-grow overflow-y-auto pr-2">
                         <GenTable gens={gens} setGens={setGens} />
                    </div>
                    <div className="shrink-0">
                       <QualityChart allGens={gens} selectedGens={selectedGens} />
                    </div>
                </div>
            </div>

            {isSettingsModalOpen && <SettingsModal onClose={() => setSettingsModalOpen(false)} />}
            {isUserModalOpen && <UserModal onClose={() => setUserModalOpen(false)} />}
        </div>
    );
};

export default App;