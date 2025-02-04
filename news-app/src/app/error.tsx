"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold">Oops...?</h1>
                <h2 className="text-2xl">Something went wrong!</h2>
            </div>
        </div>
    );
}
