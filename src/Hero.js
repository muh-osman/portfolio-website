// Framer motion npm
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from "./utils/motion"
// Image & icon
import person from "./assets/image/person.png"
import certified from "./assets/image/certified-badge.png"

export default function Hero() {




  return (
    <motion.section
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    >
        <div className="hero">

              <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="left-hero">
                  <h1>Hey There,<br />I'm Sam.</h1>
                  <div className="years-experience-box">
                      <div className="ten">10</div>
                          <div>
                              <div className="years-experience">Years<br />Experience</div>
                          </div>
                  </div>
              </motion.div>

              <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="person-box">
                <img src={person} alt="Sam" />
              </motion.div>

              <motion.div
              variants={fadeIn("left", "tween", 0.4, 1)}
              className="right-hero">
                    <div>
                      <img src={certified} alt="" />
                      <h2>CERTIFIED PROFATIONAL</h2>
                      <h2>UI/UX DESIGNER</h2>
                    </div>
              </motion.div>

        </div>

        <motion.div
        variants={fadeIn("left", "tween", 0.4, 1)}
        className="alt-right-hero">
                    <div>
                      <img src={certified} alt="" />
                      <h2>CERTIFIED PROFATIONAL</h2>
                      <h2>UI/UX DESIGNER</h2>
                    </div>
        </motion.div>
    </motion.section>
  )
}