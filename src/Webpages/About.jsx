import profileImage from "../assets/navprofile2.png";
import Skillset from "./Skillset";

function About() {
  return (
    <div className="about-container">
      <div className="p-5 m-5 fluid">
        <div className="container fluid">
          <div className="row p-5 m-5">
            <div className="col-md-6 col-12" data-aos="fade-right"data-aos-duration="3000">
              <h6 className="fw-bold">About me ______________</h6>
              <img className="picture" src={profileImage} alt=""/>
            </div>
            <div className="col-md-6 col-12" data-aos="fade-left" data-aos-duration="3000">
              <p className="about-para">
                Hi I'm Reyson Carpio. I'm a junior web developer from
                Philippines and I live in San Pablo Sto. Tomas, Batangas. I'm 28
                years old. I really enjoy what i do right now, in my opinion,
                creating a programs is not just a job, but also an art that has
                aesthetic value.
              </p>
              <span />

              <div className="technology-stacks">
                
                <h3>Technology Stacks</h3>

                <div className="technology-stacks-content">
                  <Skillset />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
