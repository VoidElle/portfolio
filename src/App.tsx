import { BrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import { LangProvider } from "./context/LangContext";

function AppInner() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="projects/:slug" element={<CaseStudy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function App() {
    return (
        <LangProvider>
            <AppInner />
        </LangProvider>
    );
}
export default App;
