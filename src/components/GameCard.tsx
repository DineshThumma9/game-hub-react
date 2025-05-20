import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CritcScore from "./CritcScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import {Link} from "react-router-dom";
import Game from "../entites/Game";

interface Props {
    game: Game
}


const GameCard = ({game}: Props) => {


    return (

        <Card _hover={{
            transform: `scale(1.03)`,
            transition: `transition .15s ease-in`
        }}>

            <Image
                src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>

                <HStack justifyContent={'space-between'} marginBottom={3}>

                    <PlatformIconList platform={game.parent_platforms?.map(p => p.platform)}/>
                    <CritcScore score={game.metacritic}/>

                </HStack>
                <Heading fontSize={'2xl'}>

                    <Link to={`/games/` + game.slug}>
                        {game.name}
                    </Link>


                    <Emoji rating={game.rating_top}/></Heading>

            </CardBody>
        </Card>


    )

}


export default GameCard;



