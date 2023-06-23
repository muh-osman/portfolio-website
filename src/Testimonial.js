// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Framer motion
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "./utils/motion"
// Image
import people1 from "./assets/image/people1.png"
import people2 from "./assets/image/people2.png"



export default function Testimonial() {


    const settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      touchMove: true,
      useCSS: true,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };


  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}

      id="testimonials"
      >

        <h1>People talk about us</h1>
        <p>I got a job that was in accordance with the salary and field of work<br />The process of submitting an appilication was quite cosy</p>




        <motion.div
        variants={footerVariants}
        className="comments"
        >
            <Slider {...settings} className="slider">
                  <div className="testtimonial-card comment">
                      <img src={people1} alt="" />
                      <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <hr />
                      <h3>Anamika Sandula</h3>
                      <h6>Creative Manager</h6>
                  </div>
                  <div className="testtimonial-card">
                      <img src={people2} alt="" />
                      <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <hr />
                      <h3>Anamika Sandula</h3>
                      <h6>Creative Manager</h6>
                  </div>
                  <div className="testtimonial-card">
                      <img src={people1} alt="" />
                      <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <hr />
                      <h3>Anamika Sandula</h3>
                      <h6>Creative Manager</h6>
                  </div>
                  <div className="testtimonial-card">
                      <img src={people2} alt="" />
                      <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <hr />
                      <h3>Anamika Sandula</h3>
                      <h6>Creative Manager</h6>
                  </div>
                  <div className="testtimonial-card">
                      <img src={people1} alt="" />
                      <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <hr />
                      <h3>Anamika Sandula</h3>
                      <h6>Creative Manager</h6>
                  </div>
                  <div className="testtimonial-card">
                      <img src={people2} alt="" />
                      <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                      <hr />
                      <h3>Anamika Sandula</h3>
                      <h6>Creative Manager</h6>
                  </div>
            </Slider>
        </motion.div>




    </motion.section>
  )
}