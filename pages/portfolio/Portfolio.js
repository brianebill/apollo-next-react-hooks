import { useState, useEffect } from "react";
import useWindowScrollPosition from './hooks/useWindowScrollPosition'
import Button from './components/Button';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Portfolio = function() {

  const [buttonOneOpacity, setButtonOneOpacity] = useState(0);
  const [clickedButtonOne, setClickedButtonOne] = useState(false);
  useEffect(() => {
      clickedButtonOne ? setButtonOneOpacity(0) : setButtonOneOpacity(1)
    }, [clickedButtonOne]
  );

  const [projectsNavOpacity, setProjectsNavOpacity] = useState(0);
  useEffect(
    () => {
      clickedButtonOne ? setProjectsNavOpacity(1) : setProjectsNavOpacity(0);
    }, [clickedButtonOne]
  );

  useEffect(
    () => {
      if (window.pageYOffset > 320 && window.pageYOffset < 600) {
        setProjectsNavOpacity(1)
        setButtonOneOpacity(0)
      } else {
        setProjectsNavOpacity(0)
        setButtonOneOpacity(1)
      }
    }
  )

  return (
    <div id='app'>
      <Home>
        <Projects opacity={projectsNavOpacity} />
      </Home>
      <style jsx global>{`
        #app {
          position: absolute;
          overflow: hidden;
          width:100%;
        }
        .button-container {
          position: relative;
          z-index: 10;
        }
      `}</style>
    </div>
  )
}

export default Portfolio
