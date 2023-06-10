import React from 'react'
import i18next from '../../i18n'

const Intro = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center'>
        <div className='bg-bg1 bg-center bg-auto h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
        <h1 className='absolute text-white p-8 text-3xl text-center font-thin'>
          {i18next.t('welcome1')} <br /> <span className='font-bold'>{i18next.t('welcome2')}</span>
        </h1>
    </div>
  )
}

export default Intro