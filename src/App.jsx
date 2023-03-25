import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import NextPage from './components/NextPage/NextPage'
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
       {/* <Navbar />  */}

    <Link to="/about"></Link>
    <Link to='/'></Link>
   {/*  <Link to="/nextPage"></Link>
    <Link to='/contact'></Link>
    <Link to="/company"></Link> */}
  

    <Switch>

    <Route path='/' exact> <Header /> </Route>
    <Route path='/about' exact> <About /> </Route>
    {/* <Route path='/nextPage' exact> <Header /> </Route>
    <Route path='/contact' exact> <About /> </Route>
    <Route path='/company' exact> <Header /> </Route> */}
   

     </Switch>
{/* <Footer /> */}
     
    </Router>
     
    </>
  )
}

export default App

/* 

here is what i need to do :
+ fix react router
+ use fm to the nextPage
+ edit the next page
+ finish the whole project

*/