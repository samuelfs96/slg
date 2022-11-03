import { Card, Carousel } from "flowbite-react";
import { CheckIcon } from '@heroicons/react/24/outline'
import Img1 from '../img/img-01.jpg'
import Img2 from '../img/img-02.webp'
import Marca1 from '../img/marca-1.webp'
import Marca2 from '../img/marca-2.webp'
import Marca3 from '../img/marca-3.webp'
import Marca4 from '../img/marca-4.webp'


const Home = () => {
    return (
      <>
      <div className="h-[80vh]" style={{marginTop: '117px'}}>
        <Carousel slide={false}>
          <div className="flex h-full items-center justify-center">
            <div className="bg-car1 bg-no-repeat bg-cover bg-center w-full h-full" style={{filter: 'brightness(0.6)'}}></div>
            <h2 className="text-white text-3xl font-semibold text-center absolute">
              Construir y Desarrollar un futuro para las generaciones <br/> venideras y que este perdure en el tiempo.
            </h2>
          </div>
          <div className="flex h-full items-center justify-center">
            <div className="bg-car2 bg-no-repeat bg-cover bg-center w-full h-full" style={{filter: 'brightness(0.6)'}}></div>
            <h2 className="text-white text-3xl font-semibold text-center absolute">
              Generar valor agregado a la población a través de construcciones <br/> qeue sustenten la calidad de vida que todos deseamos.
            </h2>
          </div>
          <div className="flex h-full items-center justify-center">
            <div className="bg-car3 bg-no-repeat bg-cover bg-center w-full h-full" style={{filter: 'brightness(0.6)'}}></div>
            <h2 className="text-white text-3xl font-semibold text-center absolute">
              Trabajar con excelencia y en beneficio de <br/> cada persona y del ambiente, es nuestro norte.
            </h2>
          </div>
        </Carousel>
      </div>
      <div className="container text-slg-gray mt-24 mb-24">
        <h4 className="text-center text-2xl text-slg-blue font-bold m-2">QUE HACEMOS</h4>
        <h2 className="text-center text-slg-gray m-2 text-xl">Nuestros Servicios Premium</h2>
        <p className="text-slg-gray m-2 text-center mt-12 mb-12">Construcción de autopistas, carreteras y caminos, puentes, estructuras, entronques y distribuidores, 
          pistas y calles de rodaje en aeropuertos, obras hidráulicas, obras marítimas, 
          vías férreas incluyendo puentes y viaductos.</p>
          <div className="grid grid-cols-3 gap-4 container">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-slg-blue dark:text-white">
                Lorem ipsum dolor sit amet.
              </h5>
              <p className="font-normal text-slg-gray dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, incidunt? Recusandae cum quidem accusamus 
                id adipisci perspiciatis aliquid nulla cumque voluptatibus ipsa qui quas laboriosam corrupti ab, magni officiis
                magnam excepturi tenetur iste modi autem facere. 
              </p>
            </Card>
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-slg-blue dark:text-white">
                Lorem ipsum dolor sit amet.
              </h5>
              <p className="font-normal text-slg-gray dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, incidunt? Recusandae cum quidem accusamus 
                id adipisci perspiciatis aliquid nulla cumque voluptatibus ipsa qui quas laboriosam corrupti ab, magni officiis
                magnam excepturi tenetur iste modi autem facere. 
              </p>
            </Card>
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-slg-blue dark:text-white">
                Lorem ipsum dolor sit amet.
              </h5>
              <p className="font-normal text-slg-gray dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, incidunt? Recusandae cum quidem accusamus 
                id adipisci perspiciatis aliquid nulla cumque voluptatibus ipsa qui quas laboriosam corrupti ab, magni officiis
                magnam excepturi tenetur iste modi autem facere. 
              </p>
            </Card>
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-slg-blue dark:text-white">
                Lorem ipsum dolor sit amet.
              </h5>
              <p className="font-normal text-slg-gray dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, incidunt? Recusandae cum quidem accusamus 
                id adipisci perspiciatis aliquid nulla cumque voluptatibus ipsa qui quas laboriosam corrupti ab, magni officiis
                magnam excepturi tenetur iste modi autem facere. 
              </p>
            </Card>
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-slg-blue dark:text-white">
                Lorem ipsum dolor sit amet.
              </h5>
              <p className="font-normal text-slg-gray dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, incidunt? Recusandae cum quidem accusamus 
                id adipisci perspiciatis aliquid nulla cumque voluptatibus ipsa qui quas laboriosam corrupti ab, magni officiis
                magnam excepturi tenetur iste modi autem facere. 
              </p>
            </Card>
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-slg-blue dark:text-white">
                Lorem ipsum dolor sit amet.
              </h5>
              <p className="font-normal text-slg-gray dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, incidunt? Recusandae cum quidem accusamus 
                id adipisci perspiciatis aliquid nulla cumque voluptatibus ipsa qui quas laboriosam corrupti ab, magni officiis
                magnam excepturi tenetur iste modi autem facere. 
              </p>
            </Card>
          </div>
      </div>
      <div className="container bg-[#fafafa] mt-24 mb-24">
        <h2 className="text-center pt-16 text-2xl text-slg-blue font-bold">POR QUÉ NOSOTROS</h2>
        <div className="text-slg-gray flex justify-evenly items-center pt-10 pb-10">
          <div>
            <h2 className="text-xl font-semibold">Realizamos mejoras continuas en los proyectos actuales y futuros mediante:</h2>
            <br />
            <ul style={{lineHeight: '28px'}}>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Optimización del proyecto ejecutivo.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Manejo integral de los residuos.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Protección y aprovechamiento sustentable de los recursos naturales.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Utilización de energías limpias.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Fomento al desarrollo de las capacidades de los trabajadores.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Sostenimiento de una cultura de seguridad y salud entre los empleados.
              </li>
            </ul>
          </div>
          <img src={Img1} alt="img" className="rounded-full w-[16rem] h-[16rem] border-4 border-white" />
        </div>
        <div className="text-slg-gray flex justify-evenly items-center pt-10 pb-10">
          <img src={Img2} alt="img" className="rounded-full w-[16rem] h-[16rem] border-4 border-white" />
          <div>
            <h2 className="text-xl font-semibold">Habilidades que marcan una diferencia significativa para nuestro negocio:</h2>
            <br />
            <ul style={{lineHeight: '28px'}}>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Nos orientamos al logro.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Contamos con iniciativa e innovación.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> La superación y el aprendizaje es nuestro norte.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Vamos de la mano con una visión futurista.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Manejamos la autoconfianza.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Nuestra aliada es la resilencia.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Asumimos nuestras habilidades y las convertimos en fortalezas.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Medimos los riesgos.
              </li>
              <li className="flex gap-2">
                <CheckIcon className="w-5 text-slg-blue"/> Trabajamos la capacidad de comunicación, liderazgo y toma de decisiones oportunas.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-24 mb-24">
        <h2 className="text-center text-2xl text-slg-blue font-bold">MARCAS</h2>
        <div className="flex justify-evenly m-10">
          <img src={Marca1} alt="img" className="w-40" />
          <img src={Marca2} alt="img" className="w-40"/>
          <img src={Marca3} alt="img" className="w-40"/>
          <img src={Marca4} alt="img" className="w-40"/>
        </div>
      </div>
      </>
    );
  };
  
  export default Home;