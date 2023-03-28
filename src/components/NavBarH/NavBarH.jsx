import React from 'react'
import "./style.scss"

export default function NavBarH() {
  return (
    <>
    <div className="NavBarH">
    <h1 className="title">Title</h1>
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

        

