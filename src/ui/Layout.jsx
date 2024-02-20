import {Outlet} from "react-router-dom";
import {Main} from "/src/styles/Utils.js";
import Nav from "/src/ui/Nav";
import Footer from "/src/ui/Footer";

export default function Layout() {
    return (
        <>
            <Nav/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </>
    )
}