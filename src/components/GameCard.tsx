import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CritcScore from "./CritcScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import noImage from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp"

interface Props {
    game: Game
}


const GameCard = ({game}: Props) => {


    return (

        <Card>

            <Image
                src={game.background_image != null ? getCroppedImageUrl(game.background_image) : noImage}/>
            <CardBody>

                <HStack justifyContent={'space-between'} marginBottom={3}>

                    <PlatformIconList platform={game.parent_platforms?.map(p => p.platform)}/>
                    <CritcScore score={game.metacritic}/>

                </HStack>
                <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top}/></Heading>

            </CardBody>
        </Card>


    )

}


export default GameCard;



