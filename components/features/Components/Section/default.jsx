import React from "react";
import "./ContentSection.css";

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="content-container">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed vitae justo in turpis accumsan bibendum. Vivamus 
          tristique, velit ac aliquet euismod, odio ex tempus erat, 
          nec dictum mi velit a neque. Curabitur dignissim porttitor 
          libero, sit amet malesuada nisl fringilla nec. 
        </p>
        <p>
          Integer at eros nec magna volutpat tincidunt. Donec maximus 
          sagittis risus, eget cursus libero gravida at. Proin vitae 
          bibendum justo, vel facilisis purus. Sed fermentum justo ac 
          diam interdum, nec viverra odio vehicula.
        </p>
      </div>
    </section>
  );
};

export default ContentSection;
