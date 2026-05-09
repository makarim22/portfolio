import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold mb-6">About Me</h3>
      <div className="space-y-6">
        <article className="blog-post p-6">
          <h4 className="text-xl font-bold mb-3">The Journey from Data Professional to Backend Engineer</h4>
          <p className="mb-4">
            I began my career in data, where I honed my skills in data science, visualization, and extracting insights from complex datasets. 
            After 2 years, I discovered a passion for building the underlying systems that power applications, leading me to transition into backend engineering. 
            This journey has equipped me with a unique perspective, allowing me to build robust, scalable, and data-aware solutions.
          </p>
          <p>
            I blend analytical thinking with modern web development practices to create intelligent and efficient applications. 
            My experience spans fullstack development, with a deep dive into Java (Springboot) and JavaScript ecosystems. I currently learn Go.
          </p>
        </article>

        <article className="blog-post p-6">
          <h4 className="text-xl font-bold mb-3">Sports: My Personal Interest</h4>
          <p>
            Outside of coding, I'm an avid sports fan. While I enjoy analyzing data, my interest in sports is purely for enjoyment. 
            It's a great way to unwind and stay active!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
