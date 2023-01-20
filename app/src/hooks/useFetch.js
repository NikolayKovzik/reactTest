import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log('isLoading', isLoading)
    const fetch = async (...args) => {
        try {
            setIsLoading(true)
            console.log('render is loading');
            await callback(...args)
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
            console.log('render is not loading');
        }
    }
    return [fetch, isLoading, error]
}