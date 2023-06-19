import person from "./assets/image/person.png"
import certified from "./assets/image/certified-badge.png"

export default function Hero() {

















  return (
    <div className="hero">

      <div className="left-hero">
      <h1>Hey There,<br />I'm Sam.</h1>
        <div className="years-experience-box">
          <div className="ten">10</div>
          <div>
            <div className="years-experience">Years<br />Experience</div>
          </div>
        </div>
      </div>

      <div className="person-box">
        <img src={person} alt="Sam" />
      </div>

      <div className="right-hero">
        <div>

          <img src={certified} alt="" />
          <h2>CERTIFIED PROFATIONAL</h2>
          <h2>UI/UX DESIGNER</h2>

        </div>
        
      </div>

    </div>
  )
}