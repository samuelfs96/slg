import i18next from "i18next"
import { useEffect } from "react"
import About from "../components/AboutUs/About"
import Company from "../components/AboutUs/Company"

const AboutUs = () => {
  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  return (
    <>
      <div className='h-[80vh] flex items-center justify-center'>
          <div className='bg-bg5 bg-top bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
          <h1 className='absolute text-white p-8 text-5xl text-center font-thin uppercase'>{i18next.t('aboutus')}</h1>
      </div>
      <About />
      <Company />
    </>
  )
}

export default AboutUs