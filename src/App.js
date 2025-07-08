import './App.css';
import {motion} from 'framer-motion'
import {useRef,useEffect,useState} from 'react'
import images from './components/images.js'

function App() {
  const carouselRef = useRef();
  const [width,setWidth] = useState(0);
  useEffect(()=>{
    setWidth(carouselRef.current.scrollWidth-carouselRef.current.offsetWidth);
  },[]);
  return (
    <div className="App">
  <motion.div ref={carouselRef} className="carousel">
  <motion.div
  drag="x" 
  dragConstraints={ { right : 0 , left : -width} }
  className="inner-carousel"
  >
  {images.map((image) =>(
    <motion.div className="item" key={image} >
    <img src={image} alt="carousel-img"/>
    </motion.div>
    ))}
  </motion.div>
  </motion.div>
    </div>
  );
}

export default App;

/*

rsync -av --progress --exclude=node_modules --delete ~/storage/shared/slider/ ~/slider/
cd ~/slider
npm start

 ====================================
rsync -av --progress --exclude=node_modules --delete ~/storage/shared/slider/ ~/slider/
cd ~/slider
npm install
npm start
====================================

cd ~/slider
npm install framer-motion
npm start


====================================
 quick copy

rsync -av --exclude 'node_modules' ~/react-app/slider/ ~/storage/shared/slider/

*/