import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Exploring the world isn't just about changing your location, it's
            about changing your perspective. It's about understanding the
            nuances of cultures, languages, and landscapes, and realizing that
            the true difference lies not just in what you see, but in how you
            see it.
          </p>
          <p>
            We are the world's most awarded and loved travel company, assisting
            people in achieving their dream to travel.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
