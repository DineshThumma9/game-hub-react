import APIClient, {FetchResponse} from "../services/api-client";
import {useInfiniteQuery} from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../store";
import Game from "../entites/Game";

const apiClient = new APIClient<Game>('/games');

export const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);


    return useInfiniteQuery<FetchResponse<Game>, Error>({
        initialPageParam: 1,
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
        staleTime: ms('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
    });
};

