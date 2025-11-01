import React from 'react';
import { Gen, GenStatus } from '../types';

interface GenTableProps {
    gens: Gen[];
    setGens: React.Dispatch<React.SetStateAction<Gen[]>>;
}

const SaveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
);


export const GenTable: React.FC<GenTableProps> = ({ gens, setGens }) => {

    const handleSelect = (id: number) => {
        setGens(prevGens => prevGens.map(gen => gen.id === id ? { ...gen, selected: !gen.selected } : gen));
    };

    const handleStatusChange = (id: number, status: GenStatus) => {
        setGens(prevGens => prevGens.map(gen => gen.id === id ? { ...gen, status } : gen));
    };
    
    const selectedGens = gens.filter(g => g.selected);
    const totalSelectedQuality = selectedGens.reduce((sum, gen) => sum + gen.quality, 0) * 1000;
    const qualityTarget = 100000000;
    const qualityDifference = totalSelectedQuality - qualityTarget;

    const categoryCounts = selectedGens.reduce((acc, gen) => {
        if (gen.category === 'Alta') acc.alta++;
        else if (gen.category === 'Media') acc.media++;
        else if (gen.category === 'Baja') acc.baja++;
        return acc;
    }, { alta: 0, media: 0, baja: 0 });
    
    const totalCount = selectedGens.length || 1;

    const handleSave = () => {
        const approvedCount = selectedGens.filter(g => g.status === 'Approved').length;
        const incompleteCount = selectedGens.filter(g => g.status === 'Incomplete').length;
        const message = `Resumen de cambios:
- Aprobados: ${approvedCount}
- Incompletos: ${incompleteCount}
- Quality Total: ${totalSelectedQuality.toLocaleString('es-ES')}

¿Desea guardar el trabajo de hoy?`;
        
        if(window.confirm(message)){
            console.log("Guardando cambios...");
        }
    };


    return (
        <div className="bg-white border border-gray-200 rounded-lg flex flex-col h-full">
            {/* Header */}
            <div className="grid grid-cols-4 gap-x-0.5 px-0.5 py-1.5 border-b border-gray-200 text-xs font-semibold text-gray-500">
                <div className="text-center">R</div>
                <div className="text-left">Gen</div>
                <div className="text-right">Quality</div>
                <div className="text-center">AI</div>
            </div>

            {/* Body */}
            <div className="flex-grow overflow-y-auto">
                {gens.map(row => (
                    <div key={row.id} className="grid grid-cols-4 gap-x-0.5 px-0.5 py-1.5 items-center border-b border-gray-100 hover:bg-gray-50 text-sm">
                        <div className="flex justify-center tooltip">
                             <span className="tooltiptext">Review MR</span>
                            <button
                                onClick={() => handleSelect(row.id)}
                                className={`w-4 h-4 rounded-full border cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3fc4e9] ${
                                    row.selected 
                                        ? 'bg-[#3fc4e9] border-[#3fc4e9]' 
                                        : 'bg-transparent border-gray-300 hover:border-[#3fc4e9]'
                                }`}
                                aria-checked={row.selected}
                                role="checkbox"
                            />
                        </div>
                        <div className="font-medium text-gray-800 cursor-pointer hover:underline truncate">{row.name}</div>
                        <div className="text-right font-mono text-gray-600">{row.quality.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</div>
                        <div className="flex justify-center gap-x-1">
                             <div className="tooltip">
                                <span className="tooltiptext">Aprobado</span>
                                <button onClick={() => handleStatusChange(row.id, 'Approved')} className={`w-4 h-4 rounded-full border transition-all ${row.status === 'Approved' ? 'bg-[#4cad9e] border-[#4cad9e]' : 'bg-transparent border-gray-300 hover:border-[#4cad9e]'}`}></button>
                             </div>
                             <div className="tooltip">
                                <span className="tooltiptext">Incompleto</span>
                                <button onClick={() => handleStatusChange(row.id, 'Incomplete')} className={`w-4 h-4 rounded-full border transition-all ${row.status === 'Incomplete' ? 'bg-[#c8437a] border-[#c8437a]' : 'bg-transparent border-gray-300 hover:border-[#c8437a]'}`}></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-2 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                <div>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-xs text-gray-500">{qualityTarget.toLocaleString('es-ES')} - {totalSelectedQuality.toLocaleString('es-ES')} =</span>
                        <span className={`text-base font-bold ${qualityDifference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {qualityDifference.toLocaleString('es-ES')}
                        </span>
                    </div>
                    <div className="w-40 h-1 flex mt-1 rounded-full overflow-hidden">
                       <div style={{ width: `${(categoryCounts.alta / totalCount) * 100}%` }} className="bg-[#4cad9e]"></div>
                       <div style={{ width: `${(categoryCounts.media / totalCount) * 100}%` }} className="bg-[#fad201]"></div>
                       <div style={{ width: `${(categoryCounts.baja / totalCount) * 100}%` }} className="bg-[#c8437a]"></div>
                    </div>
                </div>
                <button onClick={handleSave} className="text-gray-500 hover:text-gray-800 transition-colors">
                    <SaveIcon />
                </button>
            </div>
        </div>
    );
};