import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

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
    <Router>

    <Link to="/about"></Link>
    <Link to='/'></Link>

    
    <Switch>
    <Route path='/' exact> <Header /> </Route>
    <Route path='/about' exact> <About /> </Route>
     </Switch>

    </Router>
     
    </>
  )
}

export default App
