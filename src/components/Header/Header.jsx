import React, { useEffect, useState } from 'react';
import "./style.scss";
import gsap from 'gsap';
import Barba from 'barba.js';

export default function Header() {
  const [isAnimating, setIsAnimating] = useState(false);

  function handleScroll() {
    // check if user has scrolled 2 pixels from top of viewport and animation is not currently running
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 2 && !isAnimating) {
      // set flag variable to indicate animation is running
      setIsAnimating(true);

      // disable scrolling on body element
      document.body.style.overflow = "hidden";

      // fade out current page using Barba.js
      Barba.Pjax.start({
        url: '/about',
        container: '.header',
        fragment: '.header',
        scrollTo: false,
        beforeEnter: function() {
          gsap.to(".header", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              // enable scrolling on body element and reset flag variable
              setIsAnimating(false);
              document.body.style.overflow = "auto";
            }
          });
        },
        afterEnter: function() {
          // animate new page using GSAP
          gsap.to(".about", {
            opacity: 1,
            duration: 0.5,
            delay: 0.5
          });
        }
      });
    }
  }

  useEffect(() => {
    // add scroll event listener on mount
    window.addEventListener("scroll", handleScroll);

    // remove scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(".header-bg-img", { duration:1.4, scale:1, ease: "power4.out"})
    var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
    tl.to(".header-bg-img", { delay:2, clipPath:"polygon(0% 42%, 100% 43%, 100% 100%, 0% 100%)"})
    tl.to(".p1", { opacity:1, duration:1 ,clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
    tl.to(".p2", { opacity:1, duration:1 , clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
    tl.to(".title-flex-h1", { opacity:1, duration:1 , clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
    tl.to(".bottom-btns", { opacity:1, duration:1 })
    tl.to(".circle", { scale:5, duration:1, ease:"bounce.out" })
  }, [])

  return (
    <>
      <div className="wrapppp">
        <div className="header">
          <div className="title-flex">
            <div className="box"></div>
            <h1 className="title-flex-h1">Company name</h1>
          </div>

          <a href="/about">onClick</a>

          <div className="border"></div>

          <div className="header-bg-img"></div>
          <div className="wrapper">
            <div className="letters">
          <div className="sm-box-hor"></div>
          <div className="sm-box-ver"></div>
          <div className="a">A</div>
          <div className="g">G</div>
          <a href="/about" /* onClick={handleClick} */><div className="circle"></div></a>
          <div className="n">N</div>

        </div>
      </div>

      <div className="bottom-conatainer">

        <div className="bottom-btns">
          <button className="btn1"><a href="/">Prfolio projects</a></button>
          <button className='btn2'><a href="/">About</a></button>
        </div>

        <div className="bottom-texts">
          <p className="p1">Lorem ipsum,  elit. Magni harum numquam tempora a, aliquam ipsam maiores obcaecati, exercitationem itaque delectus incidunt cumque optio sequi, sint nisi earum .</p>

          <p className="p2">Lorem ipsum  consectetur  elit. Magnam, asperiores, earum nihil accusantium  deserunt voluptatum rerum minus amet eos ratione eaque </p>
        </div>
      </div>
      <div style={{ height: "2px" }}></div>
      
    </div>
    </div>




    {/* <div className="another-section">
      <h1>hello this is another section</h1>
    </div> */}
    </>
  )
}




              
