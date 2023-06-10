import { Card } from 'flowbite-react'
import i18next from 'i18next'
import './style.css'

const Objective = () => {
  return (
    <div className="container text-sgl-gray mt-24 mb-24">
        <h1 className="text-center text-4xl text-sgl-black font-bold m-2">{i18next.t('ourgoal1')} <span className='text-sgl-blue'>{i18next.t('ourgoal2')}</span></h1>
        <p className="text-sgl-gray m-2 text-center mt-12 mb-12 font-lato">
            {i18next.t('ourgoalmsg')}
        </p>
        <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-4 container'>
        <Card className='custom-box'>
            <div className='flex justify-center gap-4 items-center flex-col text-center'>
                <span className='bg-sgl-blue w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold font-lato'>
                    1
                </span>
                <h5 className="text-2xl font-bold tracking-tight text-sgl-black">
                {i18next.t('goal1title')}
                </h5>
            </div>
            <p className="font-normal text-center font-lato text-sgl-gray">
                {i18next.t('goal1msg')}
            </p>
        </Card>
        <Card className='custom-box'>
            <div className='flex justify-center gap-4 items-center flex-col text-center'>
                <span className='bg-sgl-blue w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold font-lato'>
                    2
                </span>
                <h5 className="text-2xl font-bold tracking-tight text-sgl-black">
                {i18next.t('goal2title')}
                </h5>
            </div>
            <p className="font-normal text-center font-lato text-sgl-gray">
                {i18next.t('goal2msg')}
            </p>
        </Card>
        <Card className='custom-box'>
            <div className='flex justify-center gap-4 items-center flex-col text-center'>
                <span className='bg-sgl-blue w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold font-lato'>
                    3
                </span>
                <h5 className="text-2xl font-bold tracking-tight text-sgl-black">
                    {i18next.t('goal3title')}
                </h5>
            </div>
            <p className="font-normal text-center font-lato text-sgl-gray">
                {i18next.t('goal3msg')}
            </p>
        </Card>
        <Card className='custom-box bg-sgl-black'>
            <div className='flex justify-center gap-4 items-center flex-col text-center'>
                <span className='bg-sgl-blue w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold font-lato'>
                    4
                </span>
                <h5 className="text-2xl font-bold tracking-tight text-white">
                    {i18next.t('goal4title')}
                </h5>
            </div>
            <p className="font-normal text-center font-lato text-white">
                {i18next.t('goal4msg')}
            </p>
        </Card>
        <Card className='custom-box bg-sgl-black'>
            <div className='flex justify-center gap-4 items-center flex-col text-center'>
                <span className='bg-sgl-blue w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold font-lato'>
                    5
                </span>
                <h5 className="text-2xl font-bold tracking-tight text-white">
                    {i18next.t('goal5title')}
                </h5>
            </div>
            <p className="font-normal text-center font-lato text-white">
                {i18next.t('goal5msg')}
            </p>
        </Card>
        <Card className='custom-box bg-sgl-black'>
            <div className='flex justify-center gap-4 items-center flex-col text-center'>
                <span className='bg-sgl-blue w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold font-lato'>
                    6
                </span>
                <h5 className="text-2xl font-bold tracking-tight text-white">
                    {i18next.t('goal6title')}
                </h5>
            </div>
            <p className="font-normal text-center font-lato text-white">
                {i18next.t('goal6msg')}
            </p>
        </Card>
        </div> 
    </div>
  )
}

export default Objective