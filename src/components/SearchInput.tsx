import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import {BsSearch} from "react-icons/all";
import {useRef} from "react";
import useGameQueryStore from "../store";
import {useNavigate} from "react-router-dom";


interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = () => {


    const setSearchText = useGameQueryStore(s => s.setSearchText);


    const ref = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    return (

        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) setSearchText(ref.current.value);
            navigate("/");
        }}>
            <InputGroup>

                <InputLeftElement children={<BsSearch/>}/>

                <Input ref={ref} borderRadius={20}
                       placeholder='Search games....'
                       variant='filled'/>


            </InputGroup>

        </form>


    )


}


export default SearchInput;