import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyles from "/src/styles/Base";
import Layout from "/src/ui/Layout";
import Home from "/src/pages/Home";
import Record from "/src/pages/Record";
import PageNotFound from "/src/pages/PageNotFound";

function App() {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}></Route>
                    </Route>
                    <Route element={<Layout/>}>
                        <Route path='/record' element={<Record/>}></Route>
                    </Route>
                    <Route path='*' element={<PageNotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
