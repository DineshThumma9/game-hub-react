import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Icon, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CritcScore from "./CritcScore";
import getCroppedImageUrl from "../services/image-url";

interface  Props {
    game : Game
}


const GameCard = ({game} :Props) => {


    return (

     <Card>

     <Image src = {getCroppedImageUrl(game.background_image)} />
         <CardBody>
              <Heading fontSize={'2xl'}>{game.name}</Heading>
             <HStack justifyContent = {'space-between'}>

                 <PlatformIconList platform={game.parent_platforms?.map(p => p.platform)} />
                 <CritcScore score={game.metacritic}/>

             </HStack>

         </CardBody>
     </Card>


    )

}



export  default GameCard;



