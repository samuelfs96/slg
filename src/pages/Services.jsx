import i18next from 'i18next'
import { useEffect } from 'react'
import Img1 from '../img/icons/services1.png'
import Img2 from '../img/icons/services2.png'
import Img3 from '../img/icons/services3.png'
import Img4 from '../img/icons/services4.png'
import Img5 from '../img/icons/services5.png'
import Img6 from '../img/icons/services6.png'

const Services = () => {
  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  return (
    <>
      <div className='h-[80vh] flex items-center justify-center'>
          <div className='bg-bg3 bg-top bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
          <h1 className='absolute text-white p-8 text-5xl text-center font-thin'>
            {i18next.t('ourservices1')} <span className='font-bold'>{i18next.t('ourservices2')}</span></h1>
      </div>
      <div className="container mt-32 mb-32">
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8">
          <div className="text-center flex flex-col justify-start items-center gap-4 pb-4">
            <img src={Img3} alt="icon1" className='w-[64px]'/>
            <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('production')}</h2>
            <p className="text-sgl-gray font-lato">{i18next.t('productiontext')}</p>
          </div>
          <div className="text-center flex flex-col justify-start items-center gap-4 pb-4">
            <img src={Img4} alt="icon2" className='w-[64px]'/>
            <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('construction')}</h2>
            <p className="text-sgl-gray font-lato">{i18next.t('constructiontext')}</p>
          </div>
          <div className="text-center flex flex-col justify-start items-center gap-4 pb-4">
            <img src={Img2} alt="icon3" className='w-[64px]'/>
            <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('urbanization')}</h2>
            <p className="text-sgl-gray font-lato">{i18next.t('urbanizationtext')}</p>
          </div>
          <div className="text-center flex flex-col justify-start items-center gap-4 pb-4">
            <img src={Img1} alt="icon4" className='w-[64px]'/>
            <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('projects')}</h2>
            <p className="text-sgl-gray font-lato">{i18next.t('projectstext')}</p>
          </div>
          <div className="text-center flex flex-col justify-start items-center gap-4 pb-4">
            <img src={Img5} alt="icon5" className='w-[64px]'/>
            <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('industrialworks')}</h2>
            <p className="text-sgl-gray font-lato">{i18next.t('industrialworkstext')}</p>
          </div>
          <div className="text-center flex flex-col justify-start items-center gap-4 pb-4">
            <img src={Img6} alt="icon6" className='w-[64px]'/>
            <h2 className="text-2xl text-sgl-black font-bold">{i18next.t('constructioncontrol')}</h2>
            <p className="text-sgl-gray font-lato">{i18next.t('constructioncontroltext')}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services