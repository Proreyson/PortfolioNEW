import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const startTypewriter = () => {
      if (typewriterRef.current) {
        typewriterRef.current
          .typeString("Hi there!")
          .pauseFor(1000)
          .deleteAll()
          .typeString("I'm Reyson Carpio!")
          .start();
      }
    };

    const timer = setTimeout(startTypewriter, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="details-background">
        <div className="Layout-content">
          <div className="details">
            <div className="Typewriter">
              <Typewriter
                options={{ loop: false }}
                onInit={(typewriter) => {
                  typewriterRef.current = typewriter;
                }}
              />
            </div>
            <h3
              className="Junior pt-3"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Junior Web Developer
            </h3>
            <h6 className="para" data-aos="fade-left" data-aos-duration="3000">
              I design and code beautifully simple things, and I love what I do.
            </h6>
            
          </div>
        </div>
       
       
       
      </div>
      
    </>
  );
}

export default Home;
