import { Outlet, Link } from "react-router-dom";
import Logo from '../img/logo.png'
import { PhoneArrowDownLeftIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
import { Footer } from "flowbite-react";

const Layout = () => {
  return (
    <>
      <nav className="fixed w-full bg-white">
      <div className="container flex justify-between">
        <div className='p-4'>
            <img src={Logo} alt='logo'/>
        </div>
        <ul className='flex font-semibold text-sm'>
          <li className='p-4 cursor-pointer flex items-center hover:opacity-60 text-slg-gray'> 
            <Link to="/">Inicio</Link>
          </li>
          <li className='p-4 cursor-pointer flex items-center hover:opacity-60 text-slg-gray'> 
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li className='p-4 cursor-pointer flex items-center hover:opacity-60 text-slg-gray'> 
            <Link to="/servicios">Servicios</Link>
          </li>
          <li className='p-4 cursor-pointer flex items-center hover:opacity-60 text-slg-gray'> 
            <Link to="/sustentabilidad">Sustentabilidad</Link>
          </li>
          <li className='p-4 cursor-pointer flex items-center hover:opacity-60 text-slg-gray'> 
            <Link to="/blog">Blog</Link>
          </li>
          <li className='p-4 cursor-pointer flex items-center hover:opacity-60 text-slg-gray'> 
            <Link to="/contacto" className="bg-slg-blue text-white pt-2 pr-8 pl-8 pb-2 rounded-md">Contacto</Link>
          </li>
        </ul>
        </div>
        <div className='bg-slg-gray'>
            <ul className='container uppercase flex gap-4 font-semibold text-white text-xs'>
                <li className='p-2 cursor-pointer flex items-center'>
                <PhoneArrowDownLeftIcon className='w-5'/> <span className="ml-1">33 1031 4429</span>
                </li>
                <li className='p-2 cursor-pointer flex items-center'>
                <AtSymbolIcon className='w-5' /> <span className="ml-1">contacto@sgl.com.mx</span>
                </li>
            </ul>
        </div>
      </nav>
      <hr />

      <Outlet />
      <hr />
      <Footer container={true} className="rounded-none">
        <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
                <Footer.Brand
                href="#"
                src={Logo}
                alt="Sandstone Logo"
                />
                <p className="mt-4 text-sm text-slg-gray">“Trabajar con excelencia y en beneficio de cada persona y del ambiente, es nuestro norte.”</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Lorem, ipsum dolor.
                    </Footer.Link>
                    <Footer.Link href="#">
                    Lorem.
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Lorem ipsum dolor sit amet.
                    </Footer.Link>
                    <Footer.Link href="#">
                    Lorem, ipsum.
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                    Terms & Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
                href="#"
                by="Sandstone Global"
                year={2022}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                {/* <Footer.Icon
                href="#"
                icon={BsFacebook}
                />
                <Footer.Icon
                href="#"
                icon={BsInstagram}
                />
                <Footer.Icon
                href="#"
                icon={BsTwitter}
                />
                <Footer.Icon
                href="#"
                icon={BsGithub}
                />
                <Footer.Icon
                href="#"
                icon={BsDribbble}
                /> */}
            </div>
            </div>
        </div>
      </Footer>
    </>
  )
};

export default Layout;