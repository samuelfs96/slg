import i18next from 'i18next'
import React from 'react'

const Philosophy = () => {
  return (
    <>
    <div className="container text-sgl-gray mt-24 mb-24">
        <h1 className="text-center text-4xl text-sgl-blue font-bold m-2">{i18next.t('philosophy')}</h1>
    </div>
    <div className='flex max-md:flex-col'>
        <div className='w-1/2 max-md:w-full bg-car1 bg-cover bg-center h-[400px]'></div>
        <div className='w-1/2 max-md:w-full'>
            <div className="container flex justify-center items-center flex-col h-full">
                <h2 className="text-center text-2xl text-sgl-black font-bold max-md:mt-16">{i18next.t('mission')}</h2>
                <p className="text-sgl-gray m-2 text-center mt-8 mb-12 font-lato">
                    {i18next.t('missionmsg')}
                </p>
            </div>
        </div>
    </div>
    <div className='flex max-md:flex-col'>
        <div className='w-1/2 max-md:w-full'>
            <div className="container flex justify-center items-center flex-col h-full">
                <h2 className="text-center text-2xl text-sgl-blue font-bold max-md:mt-16">{i18next.t('vision')}</h2>
                <p className="text-sgl-gray m-2 text-center mt-8 mb-12 font-lato">
                    {i18next.t('visionmsg')}
                </p>
            </div>
        </div>
        <div className='w-1/2 max-md:w-full bg-car2 bg-cover bg-center h-[400px]'></div>
    </div>
    </>
  )
}

export default Philosophy