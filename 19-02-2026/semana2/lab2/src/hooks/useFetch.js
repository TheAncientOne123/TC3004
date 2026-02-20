import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
    const [state, setState] = useState({
        data: null,
        isLoadinig: true,
        hasError: null
    })
    const getFetch = async () => {
        setState(prev => ({ ...prev, isLoadinig: true }));
        try {
            const resp = await fetch( url );
            if (!resp.ok) throw new Error(resp.statusText);
            const data = await resp.json();
            setState({
                data,
                isLoadinig: false,
                hasError: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoadinig: false,
                hasError: error.message
            })
        }
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoadinig: state.isLoadinig,
        hasError: state.hasError
    }
}