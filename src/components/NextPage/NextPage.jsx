import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function NextPage() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

    })
  return (
    <>
    <div className="next-page">
        <h1>hello this is the next page !</h1>
    </div>

    </>
  )
}
