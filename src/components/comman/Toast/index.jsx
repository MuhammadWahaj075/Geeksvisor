"use client"

import React, { useState } from 'react';

export const Toast = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [toastType, setToastType] = useState('');
    const [message, setMessage] = useState({ title: '', description: '' });

    const openToast = (type, title, desc) => {
        setToastType(type);
        setMessage({ title, description: desc });
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };

    const toastTypeClasses = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        warning: 'bg-yellow-100 text-yellow-800',
        info: 'bg-blue-100 text-blue-800'
    };

    return (
        <>
            <main className="flex flex-col space-y-2 p-5">
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => openToast('success', 'Success!', 'Operation completed successfully.')}>Success</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => openToast('warning', 'Warning!', 'There might be an issue.')}>Warning</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => openToast('error', 'Error!', 'Something went wrong!')}>Error</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => openToast('info', 'Info!', 'Here is some info.')}>Info</button>
            </main>
            {isVisible && (
                <div className={`fixed z-10 top-5 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded shadow-lg ${toastTypeClasses[toastType]} animate-slide-down`}>
                    <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${toastTypeClasses[toastType]}`}>
                            <span className="block w-3 h-3 bg-white rounded-full"></span>
                        </div>
                        <div className="flex-grow">
                            <h4 className="font-semibold">{message.title}</h4>
                            <p className="text-sm">{message.description}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600" onClick={() => setIsVisible(false)}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full h-1 bg-white rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-current animate-countdown"></div>
                    </div>
                </div>
            )}
        </>
    );
};
