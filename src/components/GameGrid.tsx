import {Box, Button, SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const GameGrid = () => {


    const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames();

    if (error) return <Text>{error.message}</Text>;
    const skeletons = [1, 2, 3, 4, 5, 6];

    const fetchedGamesCount: number = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <>

            <InfiniteScroll
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={<Text>Loading...</Text>}
                dataLength={fetchedGamesCount}
            >
                <Box padding="10px">
                    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6}>
                        {isLoading &&
                            skeletons.map((skeleton) => (
                                <GameCardContainer key={skeleton}>
                                    <GameCardSkeleton/>
                                </GameCardContainer>
                            ))}
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page.results.map((game) => (
                                    <GameCardContainer key={game.id}>
                                        <GameCard game={game}/>
                                    </GameCardContainer>
                                ))}
                            </React.Fragment>
                        ))}
                    </SimpleGrid>
                </Box>
            </InfiniteScroll>

            {hasNextPage && (
                <Button onClick={() => fetchNextPage()} marginY={5}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            )}
        </>
    );
};

export default GameGrid;