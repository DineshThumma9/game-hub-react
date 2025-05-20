import {ReactNode} from "react";
import {Box, Heading} from "@chakra-ui/react";


interface Props {
    term: string;
    children: ReactNode | ReactNode[]

}


const DefinationItem = ({term, children}: Props) => {
    return (
        <Box marginY={5}>
            <Heading as={'dt'} fontSize={"md"} color={"grey.600"}>{term}</Heading>
            <dt>{children}</dt>
        </Box>
    )
}

export default DefinationItem;