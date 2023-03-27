import React, { useEffect } from 'react';
import "./style.scss";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function More() {
 
useEffect(()=>{
  gsap.utils.toArray('.section').forEach((section, i) => {
  
    if(section.getAttribute('data-color') !== null) {
      
      var colorAttr = section.getAttribute('data-color')
      
      gsap.to(".wrap", {
        backgroundColor: colorAttr === "dark" ? gsap.getProperty(".wrapper", "--dark") : gsap.getProperty(".wrapper", "--light"),
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          scrub: true,
          start:'top bottom',
          end: '+=100%'
        }
      });
  
    }
    
  });
})




  useEffect(() => {
    gsap.to(".more-bg", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".more-bg",
      },
    });

  
  }, []);

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
      </div>




     {/*  <section class="wrap">

      <div className="bg-text-grid section color-dark" data-color="dark" data-textcolor="#fff" >
        <div className="bg-texts-titles">
          <h2 className="text-h2-grid">New and achivebal</h2>
          <p className="text-p-grid">Lorem ipsum,  sit amet consectetur adipisicing elit. Veritatis hic harum quod quis tenetur, recusandae ipsum officiis ratione soluta consequatur sit tempora nobis voluptatibus repellendus . Nulla ratione iusto totam.</p>
        </div>
        <div className="img-grid"></div>
        </div>
      
  <div class="section color-dark" data-color="dark">
    <h1>One</h1>
  </div>
  <div class="section color-light" data-color="light">
    <h1>Two</h1>
  </div>
  <div class="section color-dark" data-color="dark">
    <h1>Three</h1>
  </div>
  <div class="section color-light" data-color="light">
    <h1>Four</h1>
  </div>

      </section> */}

      {/* ///////////////////////////////////////////////////////////// */}


{/* <div className="wrapper">
<section class="wrap">

<div class="section color-dark" data-color="dark">
    <h1>One</h1>
  </div>
  <div class="section color-light" data-color="light">
    <h1>Two</h1>
  </div>
  <div class="section color-dark" data-color="dark">
    <h1>Three</h1>
  </div>
  <div class="section color-light" data-color="light">
    <h1>Four</h1>
  </div>
  </section>

  </div> */}



  
    </>
  )
}
