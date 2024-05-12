"use client";

export default function ErrorBoundary({
    error, 
    reset
}: {
    error: Error, 
    reset: () => void
}) {
    return <div>Error in main page: &quot;{error.message}&quot;<br/>
    <button onClick={reset}>Try again</button>
    </div>
}