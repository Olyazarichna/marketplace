'use client'
import React, { useEffect } from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Something went wrong! </h2>
            <button
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
};