import {motion} from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "./utils/motion";

export default function Experience() {
  return (
    <motion.main
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="experience" id="experience"
    >

      <h1>My Work Experience</h1>

            <article className="article-experience">
                
                    <motion.section variants={textVariant2} className="section-experience">
                            <div>
                                <h2>Self-Employed, Brisbane</h2>
                                <p>Aug 2014 - Sep 2016</p>
                            </div>
                            <div>
                                <h2>Visual Designer</h2>
                                <p>A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts</p>
                            </div>
                    </motion.section>
                    <motion.section variants={textVariant2} className="section-experience">
                            <div>
                                <h2>New Man Services</h2>
                                <p>Aug 2014 - Sep 2016</p>
                            </div>
                            <div>
                                <h2>UI/UX Designer</h2>
                                <p>A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts</p>
                            </div>
                    </motion.section>
                    <motion.section variants={textVariant2} className="section-experience" style={{margin: 0}}>
                            <div>
                                <h2>Global Solution</h2>
                                <p>Aug 2014 - Sep 2016</p>
                            </div>
                            <div>
                                <h2>Sr. Product Designer</h2>
                                <p>A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts</p>
                            </div>
                    </motion.section>

                    <motion.div variants={zoomIn(1, 1)} className="progressbar">
                            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className="line"></motion.div>
                            <div><div className="circle" style={{background: "#286F6C"}}></div></div>
                            <div><div className="circle" style={{background: "#F2704E"}}></div></div>
                            <div><div className="circle" style={{background: "#EEC048"}}></div></div>
                    </motion.div>

            </article>


    </motion.main>
  );
}
