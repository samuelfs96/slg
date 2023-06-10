import { Footer } from 'flowbite-react'
import i18next from 'i18next'
import { Link } from 'react-router-dom'
import Logo from '../../img/iso-white.png'
import './style.css'

const FooterSgl = () => {
  return (
    <Footer container={true} className="bg-sgl-black sgl-footer">
        <div className="w-full container">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='max-lg:mb-8'>
                <Footer.Brand
                href="#"
                src={Logo}
                alt="Sandstone Logo"
                className='sgl-logo'
                name='Sandstone Global'
                />
                <p className="mt-4 text-sm">“{i18next.t('slogan')}”</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 max-sm:grid-cols-1">
                <div>
                <Footer.Title title={i18next.t('contact')} />
                <Footer.LinkGroup col={true}>
                    <Footer.Link href="#">
                        +52 (33) 1031 4429
                    </Footer.Link>
                    <Footer.Link href="#">
                        contacto@sgl.com.mx
                    </Footer.Link>
                    <Footer.Link href="#">
                        Cuautitlán 1056, Chapalita, 44500, Guadalajara, Jal.
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title={i18next.t('links')} />
                <Footer.LinkGroup col={true} className="capitalize">
                    <Link className='hover:underline' to="/servicios">{i18next.t('home')}</Link>
                    <Link className='hover:underline' to="/nosotros">{i18next.t('about')}</Link>
                    <Link className='hover:underline' to="/contratos">{i18next.t('contracts')}</Link>
                    <Link className='hover:underline' to="/blog">{i18next.t('blog')}</Link>
                    <Link className='hover:underline' to="/contacto">{i18next.t('contact')}</Link>
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
            {/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
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
                /> 
            </div> */}
            </div>
        </div>
    </Footer>
  )
}

export default FooterSgl