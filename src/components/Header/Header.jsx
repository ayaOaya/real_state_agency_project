import React, { useEffect, useState  } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import NextPage from "../NextPage/NextPage"
import { motion } from "framer-motion"
import Navbar from '../Navbar/Navbar'




export default function Header() {


  useEffect(() =>{
    gsap.to(".header-bg-img", { duration:1.4, scale:1,ease: "power4.out"})
    var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
    tl.to(".header-bg-img", { delay:2, clipPath:"polygon(0% 42%, 100% 43%, 100% 100%, 0% 100%)"})
    tl.to(".p1", { opacity:1, duration:0.6 ,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
    tl.to(".p2", { opacity:1, duration:1 , clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
    tl.to(".title-flex-h1", { opacity:1, duration:1 , clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
    tl.to(".bottom-btns", { opacity:1, duration:1 })
    tl.to(".circle", { scale:5, duration:1, ease:"bounce.out"})
   
  }, [])





  return (
    <>

    <Navbar />
    <div className="wrapppp">
    <div className="header">

      <div className="title-flex">
        <div className="box"></div>
        <h1 className="title-flex-h1">Property Advisors</h1>
      </div>

      <div className="border"></div>

      <div className="header-bg-img"></div>
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
      
    </div>
    </div>




    {/* <div className="another-section">
      <h1>hello this is another section</h1>
    </div> */}
    </>
  )
}


