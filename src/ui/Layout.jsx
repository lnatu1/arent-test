import {Outlet} from "react-router-dom";
import Nav from "/src/ui/Nav";
import Footer from "/src/ui/Footer";

export default function Layout() {
    return (
        <>
            <Nav/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}