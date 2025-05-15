import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {AxiosRequestConfig, CanceledError} from "axios";
import {T} from "framer-motion/dist/types.d-CQt5spQA";



interface FetchResponse<T> {
    count: number;
    results: T[];
}

export const useData = <T>(endpoint:string,reuqestConfig? : AxiosRequestConfig ,deps? : any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal , ...reuqestConfig })
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
};

