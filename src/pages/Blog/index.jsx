import './style.css'
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
//import testxml from '../../test.xml'
import ReactHtmlParser from 'react-html-parser'; 
import { useDataContext } from '../../hooks/useDataContext'
import Skeleton from "../../components/Skeleton";
import { parseDate } from "../../utils/parseDate";

const Blog = () => {
  const {setLoading, loading} = useDataContext()
  const [imgLoaded, setImgLoaded] = useState(null)
  const URL = 'https://proxysgl.cjp.mx/blog'

  const [blogItems, setBlogItems] = useState([])
    useEffect(() =>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setLoading(true)
      fetch(URL)
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(data => {
        const result = Array.from(data.getElementsByTagName('item')).map((item) => {
          return {
            'title': item.getElementsByTagName('title')[0]?.textContent,
            'desc': item.getElementsByTagName('description')[0]?.textContent,
            'link': item.getElementsByTagName('link')[0]?.textContent,
            'date': item.getElementsByTagName('pubDate')[0]?.textContent,
            'comments': item.getElementsByTagName('comments')[0]?.textContent,
            'category': item.getElementsByTagName('category')[0]?.textContent,
            'img': item.getElementsByTagName('content:encoded')[0]?.textContent.split('src="')[1].split('alt')[0]
          }
        })
        setBlogItems(result)
        setLoading(false)
      })
      .catch(console.error);
    }, [setLoading])
    
    return (
      <>
        <div className='h-[80vh] flex items-center justify-center'>
          <div className='bg-bg4 bg-top bg-cover h-full w-full' style={{filter: 'brightness(0.6)'}}></div>
          <h1 className='absolute text-white p-8 text-5xl text-center font-thin'>
            BLOG <span className='font-bold'>SGL</span></h1>
        </div>
        <div className="container mt-24 mb-24">
          <div className="container">
            <div className="container gap-8 flex flex-col">
              {
                loading ? 
                <>
                  <Skeleton height='250px' width='100%'/>
                  <Skeleton height='250px' width='100%'/>
                  <Skeleton height='250px' width='100%'/>
                </>
                :
                blogItems.map((item, index) => (
                  <Card 
                    key={index}
                    imgAlt={item.title}
                    imgSrc={item.img}
                    onLoad={(val) => setImgLoaded(val)}
                  >
                    {!imgLoaded && <Skeleton height='400px' width='100%'/>}
                    <p className="text-sgl-gray font-light">{parseDate(item.date)} <span className="m-1">|</span> {item.category} <span className="m-1">|</span> Sandstone Global</p>
                    <h5 className="text-2xl font-bold tracking-tight text-sgl-black hover:text-sgl-blue">
                      <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                    </h5>
                    <div className="c-body">
                      {ReactHtmlParser(item.desc)}
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
        </div> 
      </> 
    );
  };
  
  export default Blog;