import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Contact from "../Contact/Contact"
import { useRef } from 'react'


export default function More() {
    gsap.registerPlugin(ScrollTrigger);
    const elementRef = useRef(null);


    useEffect(() => {
      gsap.to(".more-bg", {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".more-bg",
        },
      });
    
      const element = elementRef.current;
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
      });
    
      gsap.to(".bg-text-grid", {
        backgroundColor: '#000000',
        scrollTrigger: {
          trigger: ".bg-text-grid",
          start: 'top bottom',
          end: 'bottom bottom',
        }
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


    {/* <div className="bg-text-grid">
    <div className="bg-texts-titles">
    <h2 className="text-h2-grid">New and achivebal</h2>
    <p className="text-p-grid">Lorem ipsum,  sit amet consectetur adipisicing elit. Veritatis hic harum quod quis tenetur, recusandae ipsum officiis ratione soluta consequatur sit tempora nobis voluptatibus repellendus . Nulla ratione iusto totam.</p>
    </div>
    <div className="img-grid"></div>

   </div> */}

   {/* <Contact /> */}
    </div>
    

    <div className="bg-text-grid" ref={elementRef}>
    <div className="bg-texts-titles">
    <h2 className="text-h2-grid">New and achivebal</h2>
    <p className="text-p-grid">Lorem ipsum,  sit amet consectetur adipisicing elit. Veritatis hic harum quod quis tenetur, recusandae ipsum officiis ratione soluta consequatur sit tempora nobis voluptatibus repellendus . Nulla ratione iusto totam.</p>
    </div>
    <div className="img-grid"></div>

   </div>
  


  

   
  
    </>
  )
}

/* to do:
change the bg color only when it in view.
add a component animation to the home page.

*/
