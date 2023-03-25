import React from 'react'
import "./style.scss"

export default function NavBarH() {
  return (
    <>

  {/* useEffect(() =>{
    gsap.to(".title", { opacity:1, duration:1, delay:4.6})
    gsap.to(".ul-container1", { opacity:1, duration:1, delay:4.9})
    gsap.to(".ul-container2", { opacity:1, duration:1, delay:5})
 
  }) */}

  
    <div className="NavBarH">
    <h1 className="title">title</h1>
    <div className="links-container1">
      <ul className="ul-container1">
        <li className="li-container1"><a href="/">Home</a></li>
        <li className="li-container1"><a href="/">About</a></li>
        <li className="li-container1"><a href="/">Info</a></li>
        <li className="li-container1"><a href="/">Blog</a></li>
      </ul>
    </div>

    <div className="links-container2">
      <ul className="ul-container2">
        <li className="li-container2"><a href="/">Contact</a></li>
        <li className="li-container2"><a href="/">Layer</a></li>
        <li className="li-container2"><a href="/">Company</a></li>
        <li className="li-container2"><a href="/">Location</a></li>
      </ul>
    </div>
    </div>
    </>
  )
}

        

