import { useRef } from "react"
//React router
import { Link } from "react-router-dom"
// Framer motion npm
import { motion } from "framer-motion"
import {headerVariants} from "./utils/motion"
import useHeaderShadow from "./utils/useHeaderShadow"
//Image & logo
import logo from "./assets/image/logo.svg"
import phone from "./assets/image/phone.svg"
import burgerMenu from './assets/image/burger-menu.svg'

import facebook from "./assets/image/facebook.svg"
import twitter from "./assets/image/twitter.svg"
import instagram from "./assets/image/instagram.svg"
import youtube from "./assets/image/youtube.svg"



export default function Header() {




  const smallScreenNav = useRef()
  const toggleNav = () => {
    smallScreenNav.current.classList.toggle("show-hide-nav");
  }

  const headerShadow = useHeaderShadow();

  return (
    <motion.header
      initial= "hidden"
      whileInView= "show"
      variants= {headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav>
            <ul className="big-screen-nav">
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#testimonials">TESTIMONIALS</a></li>
                <li><a href="tel:+001 (313) 345 678"><span>+001 (313) 345 678</span> <img src={phone} alt="phone logo" /></a></li>
            </ul>

            <button onClick={()=> toggleNav()}>
              <img src={burgerMenu} alt="menu" />
            </button>

            <div  ref={smallScreenNav} className="small-screen-nav">
              <ul>
                  <li onClick={()=> toggleNav()}><a href="#services">SERVICES</a></li>
                  <li onClick={()=> toggleNav()}><a href="#experience">EXPERIENCE</a></li>
                  <li onClick={()=> toggleNav()}><a href="#portfolio">PORTFOLIO</a></li>
                  <li onClick={()=> toggleNav()}><a href="#testimonials">TESTIMONIALS</a></li>
                  <li onClick={()=> toggleNav()}><a href="tel:+001 (313) 345 678"> <img src={phone} alt="phone logo" /><span>+001 (313) 345 678</span> </a></li>
              </ul>

              <div className="mobile-nav-footer">
                <div>
                  <a href="#"><img src={facebook} alt ="facebook" /></a>
                  <a href="#"><img src={twitter} alt ="twitter" /></a>
                  <a href="#"><img src={instagram} alt ="instagram" /></a>
                  <a href="#"><img src={youtube} alt ="youtube" /></a>
                </div>
                <p>© 2023 LogoAI, LLC. All Rights Reserved</p>
              </div>

            </div>

        </nav>


    </motion.header>
  )
}