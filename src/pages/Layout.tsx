import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Box padding="2rem" maxWidth="100vw" margin="0" textAlign="center">
                <Outlet/>
            </Box>
        </>
    );
};

export default Layout;