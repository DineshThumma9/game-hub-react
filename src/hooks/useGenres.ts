import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const apiClient = new APIClient<Genre>('/genres')

export const useGenres = () => useQuery({

        queryKey: ['genres'],
        queryFn: apiClient.getAll


    }
)

// const useGenres = () =>
//     useQuery({
//         queryKey: ['genres'],
//         queryFn: () =>
//             apiClient
//                 .get<FetchResponse<Genre>>('/genres')
//                 .then((res) => res.data),
//         staleTime: 24 * 60 * 60 * 1000, // 24h
//         initialData: { count: genres.length, results: genres }
//     });