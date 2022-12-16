import { useState } from "react";

export default function useError() {
    const [error, setError] = useState(false);

    const turnOfError = () => setError(false);

    const turnOnError = () => setError(true);

    return {
        isError: error,
        turnOfError,
        turnOnError
    }
}