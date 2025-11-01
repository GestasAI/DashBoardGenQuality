import React from 'react';

interface ModalProps {
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, title, children }) => (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white w-full max-w-xl max-h-[90vh] rounded-lg shadow-xl flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-3 border-b">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
            </div>
            <div className="p-4 overflow-y-auto">
                {children}
            </div>
        </div>
    </div>
);


const SettingsSection: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
    <div className="mb-4">
        <h3 className="text-base font-bold text-gray-700 mb-3">{title}</h3>
        <div className="space-y-2">{children}</div>
    </div>
)

const SettingInput: React.FC<{label: string, type: string, defaultValue: string, unit: string}> = ({label, type, defaultValue, unit}) => (
     <div className="flex items-center justify-between text-sm">
        <label className="text-gray-600">{label}</label>
        <div className="flex items-center space-x-2">
            <input type={type} defaultValue={defaultValue} className="w-32 text-right border-b-2 px-1 py-0.5 focus:outline-none focus:border-[#c8437a]" />
            <span className="text-gray-500 w-16">{unit}</span>
        </div>
    </div>
)

const RangeSettingInput: React.FC<{label: string, default1: string, default2: string, unit: string}> = ({label, default1, default2, unit}) => (
    <div className="flex items-center justify-between text-sm">
        <label className="text-gray-600">{label}</label>
        <div className="flex items-center space-x-2">
            <input type="number" defaultValue={default1} className="w-16 text-right border-b-2 px-1 py-0.5 focus:outline-none focus:border-[#c8437a]" />
            <span className="text-gray-500">A</span>
            <input type="number" defaultValue={default2} className="w-16 text-right border-b-2 px-1 py-0.5 focus:outline-none focus:border-[#c8437a]" />
            <span className="text-gray-500 w-16">{unit}</span>
        </div>
    </div>
);

const MinSettingInput: React.FC<{label: string, default1: string, unit: string}> = ({label, default1, unit}) => (
    <div className="flex items-center justify-between text-sm">
        <label className="text-gray-600">{label}</label>
        <div className="flex items-center space-x-2">
            <span className="text-gray-500 font-bold">&gt;</span>
            <input type="number" defaultValue={default1} className="w-16 text-right border-b-2 px-1 py-0.5 focus:outline-none focus:border-[#c8437a]" />
            <span className="text-gray-500 w-16">{unit}</span>
        </div>
    </div>
);


export const SettingsModal: React.FC<{onClose: () => void}> = ({onClose}) => {
    return (
        <Modal onClose={onClose} title="Opciones de Ajuestes">
            <SettingsSection title="Gen">
                 <RangeSettingInput label="Initial Optimum" default1="8" default2="12" unit="/Meses" />
                 <RangeSettingInput label="Peak Performance" default1="12" default2="30" unit="/Meses" />
                 <MinSettingInput label="Declining Fertility" default1="36" unit="/Meses" />
                 <RangeSettingInput label="Low Fertility" default1="48" default2="60" unit="/Meses" />
            </SettingsSection>
            <hr className="my-4" />
            <SettingsSection title="Quality">
                 <SettingInput label="Quantity" type="text" defaultValue="100.000.000,00" unit="/Qmax" />
                 <SettingInput label="Collections Per Day" type="number" defaultValue="1" unit="/PerDay" />
            </SettingsSection>
             <hr className="my-4" />
            <SettingsSection title="Review MR.">
                <SettingInput label="Prediction Time" type="time" defaultValue="07:00" unit="/am" />
                <SettingInput label="Min Registrer R" type="number" defaultValue="1000" unit="/Rmin" />
                <SettingInput label="Wear Coefficient" type="text" defaultValue="0,002" unit="/%" />
            </SettingsSection>
        </Modal>
    );
};


const UserSection: React.FC<{title?: string; children: React.ReactNode}> = ({ title, children }) => (
    <div className="mb-4">
        {title && <h3 className="text-base font-bold text-gray-700 mb-3">{title}</h3>}
        <div className="space-y-2">{children}</div>
    </div>
)

const ActionButton: React.FC<{children: React.ReactNode}> = ({children}) => (
    <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-md transition-colors">
        {children}
    </button>
)

const WifiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.556A5.5 5.5 0 0112 15c1.472 0 2.842.55 3.889 1.556M4.5 12.5c2.25-2.25 5.3-3.5 8.5-3.5s6.25 1.25 8.5 3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5c.5 0 .5-.5.5-.5s0-.5-.5-.5-.5.5-.5.5.5.5.5.5z" />
    </svg>
);


export const UserModal: React.FC<{onClose: () => void}> = ({onClose}) => {
    return (
        <Modal onClose={onClose} title="Cuentas">
            <UserSection>
                <div className="flex flex-col items-center space-y-2">
                    <div className="relative mb-2">
                        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                            U
                        </div>
                        <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md text-xs">✏️</button>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold text-gray-800 text-lg">Usuario Ejemplo</p>
                        <p className="text-sm text-gray-500">usuario@ejemplo.com</p>
                        <p className="text-sm text-gray-500">Calidad Genética</p>
                    </div>
                </div>
            </UserSection>
            <hr className="my-3" />
             <UserSection title="Organizacion">
                <ActionButton>Añadir Entidad</ActionButton>
                <ActionButton>Editar Entidad</ActionButton>
                <ActionButton>Añadir Departameto</ActionButton>
                <ActionButton>Editar Departamentos</ActionButton>
            </UserSection>
            <hr className="my-3" />
            <UserSection title="Cuentas">
                <ActionButton>Añadir Cuenta</ActionButton>
                <ActionButton>Editar Cuentas</ActionButton>
            </UserSection>
             <hr className="my-3" />
             <div className="flex justify-between items-center p-2">
                <div className="flex items-center space-x-2">
                    <WifiIcon />
                    <span className="text-sm text-gray-700 font-medium">Modo Offline</span>
                </div>
                <label htmlFor="offline-toggle" className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" defaultChecked id="offline-toggle" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
             <hr className="my-3" />
             <button className="w-full text-red-600 font-semibold hover:bg-red-50 p-2 rounded-md transition-colors text-sm">
                Cerrar Sesión
            </button>
        </Modal>
    );
};