// Image
import computer from "./assets/image/computer-logo.svg"
import phone from "./assets/image/phone-logo.svg"
import brand from "./assets/image/brand-logo.svg"
// Framer motion npm
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from './utils/motion'


export default function Services() {







  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    
    id="services"
    >

      <motion.div

      className="left-services">
          <motion.div variants = {fadeIn("right", "tween", (1)*0.2, 1)}>
            <div className="image-box-one">
              <img src={computer} alt="computer logo" />
            </div>
            <div className="services-title">
              <h2>Website Design</h2>
              <h3>76 Projects</h3>
            </div>
          </motion.div>

          <motion.div variants = {fadeIn("right", "tween", (2)*0.2, 1)}>
            <div className="image-box-two">
              <img src={phone} alt="phone logo" />
            </div>
            <div className="services-title">
              <h2>Mobile App Design</h2>
              <h3>63 Projects</h3>
            </div>
          </motion.div>

          <motion.div variants = {fadeIn("right", "tween", (3)*0.2, 1)}>
            <div className="image-box-three">
              <img src={brand} alt="brand logo" />
            </div>
            <div className="services-title">
              <h2>Brand Identity</h2>
              <h3>47 Projects</h3>
            </div>
          </motion.div>
      </motion.div>


      <motion.div
      variants={textVariant(0.5)}
      className="right-services">
          <h1>What do I help?</h1>
          <p>I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.</p>
          <p>We use process design to create digital products. Besides that also help their business</p>
          <div>
            <div>
              <h2>+285</h2>
              <h3>Projects Completed</h3>
            </div>
            <div>
              <h2>+190</h2>
              <h3>Happy Clients</h3>
            </div>
          </div>
      </motion.div>

    </motion.section>
  )
}
