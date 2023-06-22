// Image
import showCase1 from "./assets/image/showCase1.png"
import showCase2 from "./assets/image/showCase2.png"
import showCase3 from "./assets/image/showCase3.png"
// 
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "./utils/motion";


export default function Portfolio() {
  return (
    <motion.article
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once:true, amount: 0.25 }}
    id="portfolio"
    >
        <h1>My Latest Works</h1>
        <div>
            <p>Perfect solution for digital experience</p>
            <a href="#">Explore More Works</a>
        </div>

        <section>
                <motion.a variants={fadeIn("up", "tween", .5, .6)} href="#">
                    <img src={showCase1} alt="" />
                </motion.a>
                <motion.a  variants={fadeIn("up", "tween", .7, .6)} href="#">
                    <img src={showCase2} alt="" />
                </motion.a>
                <motion.a variants={fadeIn("up", "tween", .9, .6)} href="#">
                    <img src={showCase3} alt="" />
                </motion.a>
        </section>

        
    </motion.article>
  )
}