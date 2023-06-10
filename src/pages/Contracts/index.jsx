import { Card } from 'flowbite-react';
import i18next from 'i18next';
import { useEffect, useState } from 'react'
import ModalContract from '../../components/Contracts/ModalContract';
import Img1_1 from '../../img/contrato1-1.png'
import Img1_2 from '../../img/contrato1-2.png'
import Img2_1 from '../../img/contrato2-1.png'
import Img2_2 from '../../img/contrato2-2.png'
import Img3_1 from '../../img/contrato3-1.png'
import Img3_2 from '../../img/contrato3-2.png'
import Img4_1 from '../../img/contrato4-1.png'
import Img4_2 from '../../img/contrato4-2.png'
import Img5_1 from '../../img/contrato5-1.png'
import Img5_2 from '../../img/contrato5-2.png'
import Img6_1 from '../../img/contrato6-1.png'
import Img6_2 from '../../img/contrato6-2.png'
import './style.css'

const Contracts = () => {
  const contractsData = [
    {
      id: 1,
      name: `“Mejoramiento de Pavimento Hidráulico en Boulevard Luis Donaldo Colosio”
      Entre Calle Zacatecas, Calle Sonora y Calle Alameda, Fraccionamiento Bulevares, Villa Hidalgo, Jalisco. ZAP
      0370. AGEB 1411600010370.`,
      term: '31 de mayo al 30 de julio del 2021.',
      time: '61 días naturales.',
      customer: 'Municipio de Villa Hidalgo, Jalisco.',
      ammount: `$2´961,791.87 (Dos Millones Novecientos Sesenta y Un Mil Setecientos Noventa y
        Un Pesos 87/100 M.N.)`,
      description: `Los trabajos realizados en el sitio se iniciaron con el trazo y nivelación
      del área de trabajo, se continuo con el corte y acarreo del material producto de la escarificaciones de la
      capa base, se conformaron tres diferentes capas comenzando con el pedraplén (piedra bola), después la
      sub-base (tepetate), y por último la base hidráulica (mezcla de grava de ½ a finos), también se realizo el
      sondeo y verificación de pruebas hidrostáticas en la tubería de agua potable existente, para finalizar con
      un pavimento de concreto hidráulico de 20 cm de espesor con F´c=250 kg/cm2 en el que se utilizó una
      malla electrosoldada 6-6/10-10 y canastillas de redondo liso de 1”, se continuo con un tramo faltante de
      guarnición de 0.40 x 0.15 cm, para hacer el cierre de obra solo se completó con el calafateo con emulsión
      asfáltica y se hizo limpieza general de la obra.`,
      images: [Img1_1,Img1_2]
    },
    {
      id: 2,
      name: `“Mejoramiento de Línea de Agua Potable y Tomas Domiciliarias de la Privada
      Aldama entre Calle Independencia y 12 de Diciembre en la Colonia Los Cedros, Villa Hidalgo, Jalisco.” ZAP
      0101 Proyecto Mids 162635.`,
      term: '08 de agosto al 27 de agosto del 2021.',
      time: '17 días naturales.',
      customer: 'Municipio de Villa Hidalgo, Jalisco.',
      ammount: '$111,940.00 (Ciento Once Mil Novecientos Cuarenta Pesos 00/100 M.N.)',
      description: `Esta obra consistió en el reemplazo de la línea principal del agua potable,
      para los trabajos estipulados se dio inicio con un levantamiento topográfico para definir los niveles,
      se continuo con las excavaciones para el retiro de la tubería existente y se reemplazó por tubo de
      PVC Hidráulico RD 26 de 3”, colocándose 20 descargas domiciliarias para los predios aledaños, para el
      correcto funcionamiento y para cualquier reparación futura se construyó una caja de válvulas para dar
      el paso al flujo de agua, se continuo con el relleno de la zanja excavada con material producto de la
      excavación y su correcta compactación.`,
      images: [Img2_1,Img2_2]
    },{
      id: 3,
      name: `“Mejoramiento de Línea de Drenaje y Descargas Domiciliarias de la Privada Aldama entre Calle Independencia y 12 de Diciembre en la Colonia Los Cedros, Villa Hidalgo, Jalisco.” ZAP
      0101 Proyecto Mids 162652.`,
      term: '16 de agosto al 03 de septiembre del 2021.',
      time: '17 días naturales.',
      customer: 'Municipio de Villa Hidalgo, Jalisco.',
      ammount: '$157,120.52 (Ciento Cincuenta y Siete Mil Ciento Veinte Pesos 52/100 M.N.)',
      description: `Obra consistente en el remplazo de la tubería de drenaje en la Calle
      Aldama comenzando con el levantamiento topográfico para proseguir con la excavación de la zanja y el
      remplazo de la tubería por un tubo de PVC para alcantarillado S-20 de 10”, continuando con el encamado
      y acostillado del mismo, aditando sus descargas domiciliarias para 20 predios, para finalizar con el
      relleno de la zanja y su compactación.`,
      images: [Img3_1,Img3_2]
    },
    {
      id: 4,
      name: `“Mejoramiento de Guarniciones y Banquetas de la Privada Aldama entre Calle
      Independencia y 12 de Diciembre en la Colonia Los Cedros, Villa Hidalgo, Jalisco.” ZAP 0101 Proyecto Mids
      162656.`,
      term: '16 de agosto al 03 de septiembre del 2021.',
      time: '17 días naturales.',
      customer: 'Municipio de Villa Hidalgo, Jalisco.',
      ammount: '$157,120.52 (Ciento Cincuenta y Siete Mil Ciento Veinte Pesos 52/100 M.N.)',
      description: `Obra realizada para el mejoramiento de la guarnición y la banqueta de
      la Calle Aldama, considerando los trabajos de la demolición de la banqueta anterior y su retiro, el trazo
      topográfico para colocar la cimbra de la nueva banqueta y colocar un concreto f´c = 150 kg/cm2.`,
      images: [Img4_1,Img4_2]
    },{
      id: 5,
      name: `“Mejoramiento de Pavimento de la Privada Aldama entre las Calles Independencia y 12 de Diciembre en la Colonia Los Cedros, Villa Hidalgo, Jalisco.” ZAP 0101 Proyecto Mids 162659.`,
      term: '09 de agosto al 24 de septiembre del 2021.',
      time: '41 días naturales.',
      customer: 'Municipio de Villa Hidalgo, Jalisco.',
      ammount: '$424,289.66 (Cuatrocientos Veinticuatro Mil Doscientos Ochenta y Nueve Pesos 66/100 M.N.)',
      description: `Esta obra consistió en los trabajos que van desde las terracerías
      comenzando con la colocación de un pedraplén con un espesor de 20 cm; pasando a una base hidráulica
      con material producto de trituración de 1 ½” homogeneizada con agua hasta alcanzar su compactación
      al 100%, para continuar y finalizar con una capa de 20 cm. De concreto f´c=250 kg/cm2, utilizando
      malla electrosoldada 6-6/10-10 y canastilla de alambrón de 5/16” y redondo liso de 1” para otorgar
      una mejor resistencia y un menor agrietamiento en las losas, se realizo un corte con disco a 7 cm.
      Para cumplimiento de norma N-CTR-CAR-1-04-009/06, sellado con material asfaltico para su correcto
      funcionamiento.`,
      images: [Img5_1,Img5_2]
    },{
      id: 6,
      name: `“Pavimentación con Concreto Hidráulico, Tomas de Agua y Drenaje en la Calle
      Cirilo Marmolejo en la Cabecera Municipal de Teocaltiche, Jalisco”. Contrato de Obra Pública. 01/2021.
      Programa FAIS-2021. Contrato Interno No. 6SM/32-09/2021.`,
      term: `22 de noviembre al 31 de diciembre del 2021.`,
      time: '40 días naturales.',
      customer: 'Municipio de Teocaltiche, Jalisco.',
      ammount: '$2,500,000.00 (Dos Millones Quinientos Mil Pesos 00/100 M.N.)',
      description: `Obra consistente en los trabajos de trazo y nivelación topográfica, la
      excavación para colocar la tubería sanitaria que la misma estaría conectada por 4 pozos de visita, los
      cuales tienen unas medidas de la más alta 3.5 metros a 1.20 metros como la menor, la tubería que
      se utilizo fue un tubo de PVC Alcantarillado S-25 de 8”, a los pozos de visita se les colocaron brocales
      de concreto para soportar una carga pesada que circula por la vialidad, se instaló una tubería de
      PVC Hidráulico RD-26 de 2 ½” y para regular el flujo de agua por la misma se construyo una caja de
      válvulas de 1.20X1.20X1.00 con tabique de 14 cm el cual se enjarro y se pulió, la válvula que se instalo
      fue de 2 ½”, con esto se terminarían las obras de agua y drenaje para pasar a las obras de terracerías
      y que dieron inicio con una capa de base hidráulica de ½“ debido a que el subsuelo cumplía con las
      características para comenzar con la misma, una vez que se alcanzó la compactación máxima se continuo
      con la instalación de la cimbra para iniciar con el colado de la losa de concreto en el cual se empleó un
      concreto f´c=250 kg/cm2, ya que se descimbro se realizaron cortes a 7 cm de profundidad en las losas`,
      images: [Img6_1,Img6_2]
    }
  ]
  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  const [hovered, setHovered] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [dataModal, setDataModal] = useState(null)
  const handleOpenModal = (id) => {
    setDataModal(contractsData.find(item => item.id === id))
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  return (
    <>
      <ModalContract show={openModal} onClose={handleCloseModal} contractData={dataModal}/>
      <div className='h-[80vh] flex items-center justify-center'>
          <div className='bg-bg2 bg-top bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
          <h1 className='absolute text-white p-8 text-5xl text-center font-thin uppercase'>
          {i18next.t('contracts')}</h1>
      </div>
      <div className="container mt-24 mb-24">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1 gap-4 container">
          {
            contractsData.map(({id,images}) => (
              <Card 
                className='h-[300px] relative overflow-hidden' 
                key={id} 
                onMouseOver={() => setHovered(id)} 
                onMouseOut={() => setHovered(false)}
                >
                <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center z-[1] opacity-${hovered === id ? '100' : '0'} transition-all bg-sgl-blue-trans`}>
                  <button className='border-solid border-2 p-2 pr-6 pl-6 text-white' onClick={() => handleOpenModal(id)}>Ver Contrato</button>
                </div>
                <div className='absolute top-0 left-0 w-full h-full covered'>
                    <img src={images[1]} alt={`c${id}-2`} className="w-full min-[1280px]:absolute min-[1280px]:top-[-25%] max-lg:h-full" />
                </div>
              </Card>
            ))
          }
          
        </div>
      </div>
    </>
  )
}

export default Contracts