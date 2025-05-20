import APIClient from "../services/api-client";

import {useQuery} from "@tanstack/react-query";
import Trailer from "../entites/Trailer";


const useTrailers = (id: number) => {


    const apiClient = new APIClient<Trailer>(`/games/${id}/movies`)
    return useQuery({
        queryKey: ['trailers', id],
        queryFn: apiClient
            .getAll,
    })


}


export default useTrailers;