import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { delay } from 'framer-motion';
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'
import Contact from "../Contact/Contact"
import Extra from '../Extra/Extra';

export default function AboutGrid() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
        tl.to(".img1", { delay:2.5, duration:1, opacity:1, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
        tl.to(".animation", { opacity:1, duration:1.3, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
        tl.to(".top-leftcorner", { opacity:1, duration:0.9 })
        tl.to(".img1-h2", { opacity:1, duration:0.9 })
        tl.to(".grid-h2", { opacity:1, duration:0.9, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
    })


  return (
    <>
    <div className="AboutGrid">

     <div className="imgs-grid">
      <motion.div whileHover={{scale:1.02}} className="img1"></motion.div>
      <motion.div whileHover={{scale:1.02}} className="img2 animation"></motion.div>
      <motion.div whileHover={{scale:1.02}} className="img3 animation"></motion.div>
      <motion.div whileHover={{scale:1.02}} className="img4 animation">
        <h6 className='img-h6'>John smith</h6>
        <h3 className='img-h3'>3 Reasons to buy a <br /> luxurious house.</h3>
        <h6 className="link">Know more</h6>

      </motion.div>
      <motion.div whileHover={{scale:1.02}} className="img5 animation"></motion.div>
     </div>

     <div className="texts">
     <div className="top-leftcorner">Expedita  ex, earum aspernatur incidunt.</div>

     <h2 className="img1-h2">Where sustainblty <br /> meet affordablty.</h2>

     <div className="grid-h2">
      <p className="p1">Lorem ipsum consectetur  elit. Distinctio illum blanditiis sequi sunt  excepturi ad sint alias nulla nobis ipsa ab eius laboriosam, nisi officiis tempora commodi sapiente </p>
      <p className="p2"> quas  consequuntur corporis ad illo est explicabo maiores soluta esse amet dolore, reprehenderit in. Accusantium, excepturi magnam!</p>
     </div>

    <div className="desc">
      <div className="desc1">
        <h6 className="desc1-h6-1">Medium</h6>
        <h6 className="desc1-h6-2">Washington Dc</h6>

      </div>
      <div className="desc2">
      <h6 className="desc2-h6-1">Luxurious</h6>
        <h6 className="desc2-h6-2">New york</h6>
      </div>
    </div>
     </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br /><br /><br /><br />
    <br />

    <Extra />

    <Contact />  
    </>
  )
}
