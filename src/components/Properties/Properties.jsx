import React, { useEffect } from 'react'
import "./style.scss"
import Contact from "../Contact/Contact"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
export default function Properties() {
  useEffect(()=>{
    gsap.to(".prop-img1",{ opacity:1,  duration:1.2, clipPath:"polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%)", scrollTrigger:{trigger:".prop-img1"}})
    gsap.to(".prop-img2",{ opacity:1, duration:1.2, delay:1 ,clipPath:"polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%)", scrollTrigger:{trigger:".prop-img2"}})
    gsap.to(".big-bg-image1",{ opacity:1, duration:1.2, clipPath:"polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%)", scrollTrigger:{trigger:".big-bg-image1"}})
    gsap.to(".h2-img",{ opacity:1, duration:1.2, clipPath:"polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%)", scrollTrigger:{trigger:".h2-img"}})
    gsap.to(".textss",{ opacity:1, duration:0.7, scrollTrigger:{trigger:".textss"}})
    gsap.to(".big-bg-image2",{ opacity:1, duration:1.2, clipPath:"polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%)", scrollTrigger:{trigger:".big-bg-image2"}})
    gsap.to(".contact-property",{ opacity:1, duration:1.2, })
    

  },[])

  return (
    <>

    <div className="properties">
        <div className="properties-paragraph">Lorem consectetur adipisicing elit.  eos, assumenda ipsum iste aliquid excepturi! Adipisci aliquid perferendis accusantium consectetur! Voluptatibus perferendis  consequatur . numquam necessitatibus aspernatur tempore.</div>

        <div className="properties-imgs1">
        <div className="prop-img1"></div>
        <div className="prop-img2"></div>
        </div>

        <div className="properties-description">
            <div className="property-titles-h3">
            <h3 className='property-h3-one'>This is a sm title</h3>
            <h3 className='property-h3-two'>This is a sm title</h3>
            </div>
            <div className="property-titles-paragraph">Lorem ipsum,  sit amet consectetur adipisicing elit. Minus, magni repudiandae! Minima tempora itaque nulla  iure accusantium ducimus reprehenderit a repellat Quidem rerum, dignissimos excepturi!</div>
        </div>



        <div className="big-bg-image1"></div>

        <div className="property-imgs2">
          <div className="img-texts">
            <div className="h2-img"></div>
            <div className="textss">
            <h2 className='property-h2'>This is a title</h2>
            <p className="h2-paragraph">Lorem ipsum  sit amet consectetur adipisicing elit.  modi eius necessitatibus ullam,  blanditiis, nulla corrupti tempore voluptatibus itaque rem sapiente nihil recusandae repudiandae excepturi eum</p>
            </div>
          </div>
        </div>

        <div className="big-bg-image2"></div>


        <div className="contact-property">
        <Contact />
        </div>

        


    </div>

    </>
  )
}
