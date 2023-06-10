import { useEffect } from "react";
import Intro from "../components/Home/Intro"
import Machineries from "../components/Home/Machineries";
import Objective from "../components/Home/Objective";
import Philosophy from "../components/Home/Philosophy";
import Values from "../components/Home/Values";

const Home = () => {
    useEffect(() =>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, [])
    return (
      <>
        <Intro />
        <Objective />
        <Philosophy />
        <Values />
        <Machineries/>
      </>
    );
  };
  
  export default Home;