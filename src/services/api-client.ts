// src/services/api-client.ts - Make sure it looks similar to this
import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api", // Make sure your API base URL is correct
    params: {
        key: "b863e0ce16f646778120699b6ab8ba8f" // Make sure you have your API key set
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    };

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + '/' + id)
            .then(res => res.data);
    };
}

export default APIClient;