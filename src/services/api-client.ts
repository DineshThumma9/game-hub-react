import axios, {AxiosRequestConfig} from "axios";


export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b863e0ce16f646778120699b6ab8ba8f'
    }
})


export default class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (params: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, {params})
            .then(res => res.data)
    }
}

