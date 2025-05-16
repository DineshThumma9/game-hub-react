import {Genre, useGenres} from "../hooks/useGenres";
import {useData} from "../hooks/useData";
import {Button, Heading, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


interface Props{
    onSelectedGenre:(genre:Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre,onSelectedGenre} : Props) => {


    const {data,isLoading,error} = useGenres();

    if(error) return null


    if (isLoading) return <Spinner />

     return (
         <>
             <Heading as = 'h1' fontSize = '2xl' marginBottom = {3}>

                 Genres

             </Heading>
         <List>
             {data.map(genre =>
                 <ListItem key={genre.id}  paddingY = '5px' >
                 <HStack>
                     <Image
                         objectFit = 'cover'
                         boxSize='32px'
                         borderRadius={8}
                         src = {getCroppedImageUrl(genre.image_background)}/>
                     <Button
                         whiteSpace={'normal'}
                         textAlign={'left'}
                         fontWeight = {genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                         fontSize={'lg'} onClick = {() => onSelectedGenre(genre) }
                         variant = "link">
                         {genre.name}
                     </Button>
                 </HStack>
             </ListItem>)}
         </List>

             </>
     )
}


export default GenreList