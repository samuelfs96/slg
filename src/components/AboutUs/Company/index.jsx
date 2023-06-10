import i18next from 'i18next'
import React from 'react'
import LogoFull from '../../../img/logo-full.png'
import './style.css'

const Company = () => {
  return (
    <div className='mt-24 mb-24'>
        <div className='w-[75%] max-lg:w-full p-7 flex justify-center items-center bg-sgl-blue text-white pix'>
            <h1 className="text-center text-4xl m-2 font-light container">{i18next.t('ourcompany1')} <span className='font-semibold'>{i18next.t('ourcompany2')}</span></h1>
        </div>
        <div className='flex items-center max-lg:flex-col container'>
            
            <div className="w-[75%] max-lg:w-full">
                <p className='text-center text-sgl-gray max-lg: m-2 mt-12 mb-12 font-lato'>
                    {i18next.t('ourcompanymsg1')} <br /><br />
                    {i18next.t('ourcompanymsg2')} <br /><br />
                    {i18next.t('ourcompanymsg3')}
                </p>
            </div>
            <img className='w-[25%] max-lg:w-full' src={LogoFull} alt="logo" />

        </div>
    </div>
  )
}

export default Company