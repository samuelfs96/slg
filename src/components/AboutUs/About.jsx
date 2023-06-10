import i18next from 'i18next'
import React from 'react'

const About = () => {
  return (
    <>
        <div className="container text-sgl-gray mt-24 mb-24">
            <h1 className="text-center text-4xl text-sgl-black font-bold m-2">
                {i18next.t('whoweare1')}
                <span className='text-sgl-blue'> {i18next.t('whoweare2')}</span>
            </h1>
        </div>
        <div className='flex max-lg:flex-col'>
            <div className='w-1/2 max-lg:w-full bg-car3 bg-cover bg-center h-[400px]'></div>
            <div className='w-1/2 max-lg:w-full'>
                <div className="container flex justify-center items-center flex-col h-full">
                    <p className="text-sgl-gray m-2 text-center mt-8 mb-12 font-lato">
                        {i18next.t('whowearemsg')}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About