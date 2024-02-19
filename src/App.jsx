import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyles from "./styles/Base";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}></Route>
                    </Route>
                    <Route path='*' element={<PageNotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
