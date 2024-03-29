import React, { useEffect } from 'react'
import "./style.scss"
import NavBarH from '../NavBarH/NavBarH'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AboutGrid from '../AboutGrid/AboutGrid'



export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() =>{
    var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
    tl.to(".title-flex", { opacity:0, duration:0.2})
    tl.to(".letters",{ opacity:0, duration:0.2})
    tl.to(".bottom-conatainer",{opacity:0, duration:0.2})
    tl.to(".border",{clipPath:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"})
    tl.to(".about-bg-img", { clipPath:"polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)",opacity:0.9, duration:0.8})
  })



  return (
    <>
    <NavBarH />

    <div className="about">
      <div className="title-flex">
        <div className="box"></div>
        <h1 className="title-flex-h1">Property Advisors</h1>
      </div>

      <div className="border"></div>

      <div className="about-bg-img"></div>
      <div className="wrapper">
        <div className="letters">
          <div className="sm-box-hor"></div>
          <div className="sm-box-ver"></div>
          <div className="a">A</div>
          <div className="g">G</div>
          <a href="/about"><div className="circle"></div></a>
          <div className="n">N</div>
        </div>
      </div>


      <div className="bottom-conatainer">
        <div className="bottom-btns">
          <button className="btn1"><a href="/">Prfolio projects</a></button>
          <button className='btn2'><a href="/about">About</a></button>
        </div>

        <div className="bottom-texts">
          <p className="p1">Lorem ipsum,  elit. Magni harum numquam tempora a, aliquam ipsam maiores obcaecati, exercitationem itaque delectus incidunt cumque optio sequi, sint nisi earum .</p>

          <p className="p2">Lorem ipsum  consectetur  elit. Magnam, asperiores, earum nihil accusantium  deserunt voluptatum rerum minus amet eos ratione eaque </p>
        </div>
      </div>

      <AboutGrid />
    </div>
    
    </>
  )
}
