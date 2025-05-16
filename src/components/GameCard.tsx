import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Icon, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CritcScore from "./CritcScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface  Props {
    game : Game
}


const GameCard = ({game} :Props) => {


    return (

     <Card>

     <Image src = {getCroppedImageUrl(game.background_image)} />
         <CardBody>

             <HStack justifyContent = {'space-between'} marginBottom = {3}>

                 <PlatformIconList platform={game.parent_platforms?.map(p => p.platform)} />
                 <CritcScore score={game.metacritic}/>

             </HStack>
             <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top} /></Heading>

         </CardBody>
     </Card>


    )

}



export  default GameCard;



