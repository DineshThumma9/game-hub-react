import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown, FaNeos} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Platform} from "../hooks/useGames";



interface Prop{
    onSelectPlatform : (platform:Platform) => void
    selectedPlatform : Platform | null
}

const  PlatformSelector = ({onSelectPlatform,selectedPlatform} : Prop) => {



    const {data,error} = usePlatforms();


    return (

        <Menu>
            <MenuButton as = {Button} rightIcon = {<BsChevronDown/>}>
                {selectedPlatform !== null ? selectedPlatform.name : "Platform"}
            </MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key = {platform.id} >{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}


export default PlatformSelector;