'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export const Toast = ({ message, type, duration = 5000, onClose }) => {
    const [progress, setProgress] = useState(100);
    const [isPaused, setIsPaused] = useState(false);
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (!isPaused) {
            const timer = setTimeout(() => {
                onClose();
            }, timeLeft);

            const interval = setInterval(() => {
                setProgress(prev => prev - 100 / (timeLeft / 100));
            }, 100);

            return () => {
                clearTimeout(timer);
                clearInterval(interval);
            };
        }
    }, [isPaused, timeLeft, onClose]);

    const handleMouseEnter = () => {
        setIsPaused(true);
        setTimeLeft(timeLeft - (duration * (100 - progress) / 100));
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-24 right-5 p-4 rounded-md shadow-lg z-50 flex items-center text-white bg-secondary-bannerPill`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {type === 'success' ? (
                <AiOutlineCheckCircle className="mr-2 text-xl text-green-500" />
            ) : (
                <AiOutlineCloseCircle className="mr-2 text-xl text-red-500" />
            )}
            <div className="flex-grow">
                {message}
            </div>
            <div
                className={`absolute bottom-0 left-0 h-[4px] ${type === 'success' ? 'bg-green-500' : "bg-red-500"}`}
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
            ></div>
        </motion.div>
    );
};
