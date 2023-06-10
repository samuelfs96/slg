import { Card } from "flowbite-react"
import i18next from "i18next"
import Img1 from '../../../img/machine1.jpg'
import Img2 from '../../../img/machine2.jpg'
import Img3 from '../../../img/machine3.webp'
import Img4 from '../../../img/machine4.jpg'
import Img5 from '../../../img/machine5.jpg'
import './style.css'

const Machineries = () => {
  return (
    <>
      <div className="container mt-24 mb-24">
          <h1 className="text-center text-4xl text-sgl-black font-bold m-2 mb-24">
              {i18next.t('ourmachinery1')}
              <span className='text-sgl-blue'> {i18next.t('ourmachinery2')}</span>
          </h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4 container">
          <Card
            className="machine-card"
            imgAlt={i18next.t('machineryitem1tittle')}
            imgSrc={Img2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-sgl-blue">
              {i18next.t('machineryitem1tittle')}
            </h5>
            <ul className="font-normal text-sgl-gray font-lato">
              <li>- {i18next.t('machineryitem1text1')}</li>
              <li>- {i18next.t('machineryitem1text2')}</li>
              <li>- {i18next.t('machineryitem1text3')}</li>
              <li>- {i18next.t('machineryitem1text4')}</li>
              <li>- {i18next.t('machineryitem1text5')}</li>
              <li>- {i18next.t('machineryitem1text6')}</li>
              <li>- {i18next.t('machineryitem1text7')}</li>
              <li>- {i18next.t('machineryitem1text8')}</li>
              <li>- {i18next.t('machineryitem1text9')}</li>
            </ul>
          </Card>
          <Card
            className="machine-card"
            imgAlt={i18next.t('machineryitem2tittle')}
            imgSrc={Img1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-sgl-blue">
              {i18next.t('machineryitem2tittle')}
            </h5>
            <ul className="font-normal text-sgl-gray font-lato">
              <li>- {i18next.t('machineryitem2text1')}</li>
              <li>- {i18next.t('machineryitem2text2')}</li>
              <li>- {i18next.t('machineryitem2text3')}</li>
              <li>- {i18next.t('machineryitem2text4')}</li>
              <li>- {i18next.t('machineryitem2text5')}</li>
              <li>- {i18next.t('machineryitem2text6')}</li>
            </ul>
          </Card>
          <Card
            className="machine-card"
            imgAlt={i18next.t('machineryitem3tittle')}
            imgSrc={Img3}
          >
            <h5 className="text-2xl font-bold tracking-tight text-sgl-blue">
              {i18next.t('machineryitem3tittle')}
            </h5>
            <ul className="font-normal text-sgl-gray font-lato">
              <li>- {i18next.t('machineryitem3text1')}</li>
              <li>- {i18next.t('machineryitem3text2')}</li>
              <li>- {i18next.t('machineryitem3text3')}</li>
              <li>- {i18next.t('machineryitem3text4')}</li>
              <li>- {i18next.t('machineryitem3text5')}</li>
            </ul>
          </Card>
          <Card
            className="machine-card"
            imgAlt={i18next.t('machineryitem4tittle')}
            imgSrc={Img5}
          >
            <h5 className="text-2xl font-bold tracking-tight text-sgl-blue">
              {i18next.t('machineryitem4tittle')}
            </h5>
            <ul className="font-normal text-sgl-gray font-lato">
              <li>- {i18next.t('machineryitem4text1')}</li>
              <li>- {i18next.t('machineryitem4text2')}</li>
            </ul>
          </Card>
          <Card
            className="machine-card"
            imgAlt={i18next.t('machineryitem5tittle')}
            imgSrc={Img4}
          >
            <h5 className="text-2xl font-bold tracking-tight text-sgl-blue">
              {i18next.t('machineryitem5tittle')}
            </h5>
            <ul className="font-normal text-sgl-gray font-lato">
              <li>- {i18next.t('machineryitem5text1')}</li>
              <li>- {i18next.t('machineryitem5text2')}</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Machineries