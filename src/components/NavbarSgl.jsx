import { Navbar } from 'flowbite-react'
import i18next from 'i18next'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../img/logo.png'
import { changeLanguage } from '../utils/changeLanguage'
import LanguageSwitch from './LanguageSwitch'

const NavbarSgl = () => {

  const [language, setLanguage] = useState(localStorage.getItem('lng') || 'es')
  const handleChangeLanguage = (language) => {
    setLanguage(language)
    changeLanguage(language)
  }

  const handleActiveMenu = () => {
    const menu = document.getElementById('menu-list')
    menu.classList.toggle('hidden')
  }

  return (
    <>
      <div className="sticky top-0 bg-white z-10 shadow-md">
        <Navbar
          fluid={false}
        >
          <Navbar.Brand href="/">
              <img
              src={Logo}
              className="mr-3 h-12 sm:h-14"
              alt="Sgl logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleActiveMenu}/>
          <Navbar.Collapse id='menu-list' className='p3 capitalize'>
            <li className='max-lg:p-2 flex items-center justify-center'> 
              <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'text-sgl-blue' : '') + ' h-full flex justify-center items-center text-sgl-gray hover:text-sgl-blue'} to="/">{i18next.t('home')}</NavLink>
            </li>
            <li className='max-lg:p-2 flex items-center justify-center'> 
              <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'text-sgl-blue' : '') + ' h-full flex justify-center items-center text-sgl-gray hover:text-sgl-blue'} to="/servicios">{i18next.t('services')}</NavLink>
            </li>
            <li className='max-lg:p-2 flex items-center justify-center'> 
              <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'text-sgl-blue' : '') + ' h-full flex justify-center items-center text-sgl-gray hover:text-sgl-blue'} to="/nosotros">{i18next.t('about')}</NavLink>
            </li>
            <li className='max-lg:p-2 flex items-center justify-center'> 
              <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'text-sgl-blue' : '') + ' h-full flex justify-center items-center text-sgl-gray hover:text-sgl-blue'} to="/contratos">{i18next.t('contracts')}</NavLink>
            </li>
            <li className='max-lg:p-2 flex items-center justify-center'> 
              <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'text-sgl-blue' : '') + ' h-full flex justify-center items-center text-sgl-gray hover:text-sgl-blue'} to="/blog">{i18next.t('blog')}</NavLink>
            </li>
            <li className='max-lg:p-2 flex items-center'> 
              <NavLink onClick={handleActiveMenu} className={({ isActive }) => (isActive ? 'bg-sgl-black' : '') + ' bg-sgl-blue hover:bg-sgl-black text-white pt-2 pr-8 pl-8 pb-2 w-full text-center'} to="/contacto">{i18next.t('contact')}</NavLink>
            </li>
            <li className='max-lg:p-2 flex items-center justify-center'>
              <LanguageSwitch language={language} handleChangeLanguage={handleChangeLanguage}/>
            </li>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default NavbarSgl