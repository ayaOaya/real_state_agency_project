import React from 'react'
import "./style.scss"

export default function Header() {
  return (
    <>
    <div className="header">

      <div className="title-flex">
        <div className="box"></div>
        <h1 className="title-flex-h1">Company name</h1>
      </div>

      <div className="border"></div>

      <div className="header-bg-img"></div>
      <div className="wrapper">
        <div className="letters">
          <div className="sm-box-hor"></div>
          <div className="sm-box-ver"></div>
          <div className="a">A</div>
          <div className="g">G</div>
          <div className="circle"></div>
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
      
    </div>

    </>
  )
}
