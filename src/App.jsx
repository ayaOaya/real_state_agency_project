import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import NextPage from './components/NextPage/NextPage'
import Lenis from '@studio-freight/lenis';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical',
  gestureDirection: 'vertical', 
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Footer />

    <BrowserRouter>
     <Routes>
    {/* <Route path="/" element={<Navbar />} />
    <Route path="/header" element={<Header />} />
    <Route path="/about" element={ <About />} />
    <Route path="/footer" element={<Footer />} /> */}
    <Route path="/nextPage" element={<NextPage />} />

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
