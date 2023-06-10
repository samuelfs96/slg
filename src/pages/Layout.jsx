import { Outlet } from "react-router-dom";
import NavbarSgl from "../components/NavbarSgl";
import FooterSgl from "../components/FooterSgl";
import imgws from '../img/icons/whatsapp.png'
import imgpdf from '../img/icons/pdf.png'
import { Tooltip } from "flowbite-react";

const Layout = () => {
  return (
    <>
      
        <a href="https://wa.me/523310314429?text=Estoy%20interesado.%20Float" className="float flex justify-center items-center" target="_blank" rel="noreferrer">
          <Tooltip
            content="Whatsapp"
            placement="right"
            className="left-24"
          >
            <img src={imgws} className="w-8 ml-[3px]" alt="wsicon" />
          </Tooltip>
        </a>
      
      <a href="https://contacto.sgl.com.mx/SGL.pdf" className="float-pdf flex justify-center items-center" target="_blank" rel="noreferrer">
        <Tooltip
          content="Portafolio"
          placement="left"
          className="-left-24"
        >
          <img src={imgpdf} className="w-8" alt="pdficon" />
        </Tooltip>
      </a>
      <NavbarSgl />
        <Outlet />
      <FooterSgl/>
    </>
  )
};

export default Layout;