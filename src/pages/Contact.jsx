import { useEffect } from 'react'
import Img1 from '../img/icons/telefono.png'
import Img2 from '../img/icons/email.png'
import Img3 from '../img/icons/ubicacion.png'
import i18next from 'i18next'

const Contact = () => {
  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  return (
    <div>
        <div className="text-sgl-gray">
          <div className='bg-slate-100 pt-24 pb-24'>
            <div className="container">
              <h1 className="text-center text-4xl text-sgl-black font-bold mb-16">{i18next.t('contactus')}</h1>
              <div className="flex justify-center items-start gap-8 max-sm:flex-col max-sm:items-center">
                <div className="w-[23.33%] max-sm:w-auto text-center flex flex-col justify-start items-center gap-4 pb-4">
                  <img src={Img1} alt="icon1" className='w-[64px]'/>
                  <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('phone')}</h2>
                  <p className="text-sgl-gray font-lato">+52 (33) 1031 4429</p>
                </div>
                <div className="w-[23.33%] max-sm:w-auto text-center flex flex-col justify-start items-center gap-4 pb-4">
                  <img src={Img2} alt="icon2" className='w-[64px]'/>
                  <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('Email')}</h2>
                  <p className="text-sgl-gray font-lato">contacto@sgl.com.mx</p>
                </div>
                <div className="w-[23.33%] max-sm:w-auto text-center flex flex-col justify-start items-center gap-4 pb-4">
                  <img src={Img3} alt="icon3" className='w-[64px]'/>
                  <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('location')}</h2>
                  <p className="text-sgl-gray font-lato">Cuautitlán 1056, Chapalita, 44500, Guadalajara, Jal.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-24 mb-24">
            <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1204153813683!2d-103.39781198524318!3d20.664679486196693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae78528f1b85%3A0xdada6e0053842577!2sC.%20Cuautitl%C3%A1n%201056%2C%20Chapalita%2C%2044500%20Guadalajara%2C%20Jal.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sve!4v1668530990765!5m2!1ses!2sve" style={{border: 0, width: '100%', height: '600px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
  )
}

export default Contact