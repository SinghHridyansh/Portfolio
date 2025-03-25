import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/Cussrutt.png",
    title: "Cussrutt - Workout Tracking Application",
    tags: ["MVC", "Development", "API"],
    projectLink:
      "https://github.com/SinghHridyansh/Cussrutt---Workout-Tracking-App",
  },
  {
    imgSrc: "/images/Redux2.png",
    title: "Redux Store - Ecommerce Application",
    tags: ["eCommerce", "Development"],
    projectLink:
      "https://github.com/SinghHridyansh/Redux-Store---Ecommerce-Application",
  },
  {
    imgSrc: "/images/Tasksphere.png",
    title: "TaskSphere - Dynamic To-do Application",
    tags: ["Development", "UI"],
    projectLink: "https://github.com/SinghHridyansh/Dynamic_ticketing_app",
  },
  {
    imgSrc: "/images/TAES.png",
    title: "Triumph Adventure Experience  Landing Page",
    tags: ["Web-design", "Development"],
    projectLink: "https://billygoatgarage.com/",
  },
  {
    imgSrc: "/images/BrightCanvas.png",
    title: "Bright Canvas website",
    tags: ["Web-design", "Development"],
    projectLink: "https://brightcanvas.in/",
  },
  {
    imgSrc: "/images/SPS.png",
    title: "SPS Architects Website",
    tags: ["Web-design", "Development"],
    projectLink: "https://spsarchitects.in/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
