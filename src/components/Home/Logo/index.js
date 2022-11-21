import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import logo from '../../../assets/images/Logo1.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={logo}
        alt="JavaScript,  Developer"
      />

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="750.000000pt" height="750.000000pt" viewBox="0 0 750.000000 750.000000"
 preserveAspectRatio="xMidYMid meet">

<g 
className="svg-container"
transform="translate(0.000000,750.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
</g>
</svg>
    </div>
  )
}

export default Logo