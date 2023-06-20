// Image
import computer from "./assets/image/computer-logo.svg"
import phone from "./assets/image/phone-logo.svg"
import brand from "./assets/image/brand-logo.svg"


export default function Services() {







  return (
    <section id="services">
      <div className="left-services">
          <div>
            <div className="image-box-one">
              <img src={computer} alt="computer logo" />
            </div>
            <div>
              <h2>Website Design</h2>
              <h3>76 Projects</h3>
            </div>
          </div>

          <div>
            <div className="image-box-two">
              <img src={phone} alt="phone logo" />
            </div>
            <div>
              <h2>Mobile App Design</h2>
              <h3>63 Projects</h3>
            </div>
          </div>

          <div>
            <div className="image-box-three">
              <img src={brand} alt="brand logo" />
            </div>
            <div>
              <h2>Brand Identity</h2>
              <h3>47 Projects</h3>
            </div>
          </div>
      </div>


      <div className="right-services">
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
      </div>
    </section>
  );
}
