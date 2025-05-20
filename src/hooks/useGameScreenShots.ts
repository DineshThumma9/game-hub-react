import APIClient from "../services/api-client";
import {useQuery} from "@tanstack/react-query";
import ms from "ms";
import Screenshots from "../entites/Screenshots";


const useGameScreenShots = (id: number) => {

    const apiClient = new APIClient<Screenshots>(`/games/${id}/screenshots`)

    return useQuery({

        queryKey: ['screenshots', id],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),

    })

}


export default useGameScreenShots;