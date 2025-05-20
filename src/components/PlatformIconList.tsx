import {HStack, Icon} from "@chakra-ui/react";
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {BsGlobe, MdPhoneIphone, SiNintendo} from "react-icons/all";
import {IconType} from "react-icons";
import Platform from "../entites/Platform";


interface Props {
    platform: Platform[];

}


const PlatformListIconList = ({platform}: Props) => {


    const iconMap: { [key: string]: IconType } = {

        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        web: BsGlobe,
        max: FaApple,
        android: FaAndroid


    }


    return (
        <>

            <HStack margin={1}>

                {
                    platform.map((platform) => (
                        <Icon key={platform.id} as={iconMap[platform.slug]} color="grey.500"/>

                    ))
                }


            </HStack>
        </>
    )
}

export default PlatformListIconList