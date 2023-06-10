import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import './App.css';
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Contracts from "./pages/Contracts";
import { DataProvider } from "./context/createContext";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="servicios" element={<Services />} />
            <Route path="nosotros" element={<AboutUs />} />
            <Route path="contratos" element={<Contracts />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contacto" element={<Contact />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
