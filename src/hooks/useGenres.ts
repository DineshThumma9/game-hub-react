import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';
import Genre from "../entites/Genre";
import genres from "../data/genres";


const apiClient = new APIClient<Genre>('/genres')

export const useGenres = () => useQuery({

        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres


    }
)

