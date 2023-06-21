import {motion} from 'framer-motion'
import { footerVariants, staggerChildren } from "./utils/motion";


export default function Footer() {
  return (
    <motion.footer
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    
    >

        <motion.div
          variants={footerVariants}
           className="footer-slogan">
          <h1>Let's make something<br/>amazing together.</h1>
          <h1>Start by <a href="mailto:me@mail.com">Saying Hi</a></h1>
        </motion.div>

        <motion.div
          variants={footerVariants}
          >
          <div>
            <h2>Information</h2>
            <a href="https://goo.gl/maps/33ZCPRbhHaMXVMYt5">145 New York, FL 5467, USA</a>
          </div>

          <div className="footer-link">
            <a href="#services">Services</a>
            <a href="#portfolio">Works</a>
            <a href="#testimonials">Notes</a>
            <a href="#experience">Experience</a>
          </div>

        </motion.div>

    </motion.footer>
  )
}
