import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Contact from "../Contact/Contact"



export default function More() {
    gsap.registerPlugin(ScrollTrigger);


    useEffect(()=>{


        gsap.to(".more-bg", { opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".more-bg",
          },})  
    




    },[])
  return (
    <>
    <div className='more'>

    <div className="change-flex">
        <h2 className='more-h2'>The Creators Network.</h2>
        <p className="desc-more">Lorem ipsum  sit amet consectetur  elit. Blanditiis ipsa molestiae explicabo. Possimus minus in, corrupti facere iste  earum recusandae accusamus  ipsum rerum iusto numquam. Nam, quod pariatur_____</p>
    </div>

    <div className="more-bg"></div>

    <div className="img-content">

        <h6 className="img-desc1">Immigration</h6>
        <h2 className="img-desc2">New york 's culture</h2>
        <div className="img-desc3">Celelebrate generations</div>

    </div>
    
  


  
<Contact />
   </div>
  
    </>
  )
}
