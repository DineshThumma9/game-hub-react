import useGameScreenShots from "../hooks/useGameScreenShots";
import {Image, SimpleGrid} from "@chakra-ui/react";

interface Props {
    game_id: number;
}

const GameScreenShots = ({game_id}: Props) => {
    const {data, isLoading, error} = useGameScreenShots(game_id);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {data?.results.map((file: { id: number; image: string }) => (
                <Image key={file.id} src={file.image}/>
            ))}
        </SimpleGrid>
    );
};

export default GameScreenShots;