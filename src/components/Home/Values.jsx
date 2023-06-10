import React from 'react'
import { UsersIcon, ShieldCheckIcon, RocketLaunchIcon, KeyIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline'
import i18next from 'i18next'

const Values = () => {
  return (
    <>
        <div className="container text-sgl-gray mt-24 mb-24 bg-sgl-black pt-20 pb-20">
            <h1 className="text-center text-4xl text-white font-bold m-2">{i18next.t('values')}</h1>
            <div className='text-white text-center mt-12 mb-12 flex max-lg:flex-col gap-10 container'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <UsersIcon className='h-[64px]' />
                    <h2 className='font-bold text-2xl text-white'>{i18next.t('teamwork')}</h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <ShieldCheckIcon className='h-[64px]' />
                    <h2 className='font-bold text-2xl text-white'>{i18next.t('honestyandtransparency')}</h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <RocketLaunchIcon className='h-[64px]' />
                    <h2 className='font-bold text-2xl text-white'>{i18next.t('customeroriented')}</h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <PuzzlePieceIcon className='h-[64px]' />
                    <h2 className='font-bold text-2xl text-white'>{i18next.t('adaptability')}</h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <KeyIcon className='h-[64px]' />
                    <h2 className='font-bold text-2xl text-white'>{i18next.t('commitmentandresponsibility')}</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Values