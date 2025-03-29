import React from "react";
import ReviewCard from "./ReviewCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register gsap plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Sophia Ramirez",
    imgSrc: "",
    company: "PixelForge",
  },
  {
    content:
      "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
    name: "Ethan Caldwell",
    imgSrc: "/images/people-2.jpg",
    company: "NexaWave",
  },
  {
    content:
      "Over the past six months, Hridyansh has consistently demonstrated exceptional dedication, skill, and professionalism in his work. His attention to detail, problem-solving abilities, and commitment to delivering high-quality results have been invaluable to our development team.&nbsp; Hridyansh is not only technically proficient but also a great team player, always ready to collaborate and contribute innovative ideas. His ability to adapt to challenges and find effective solutions has significantly improved our workflow and project outcomes.&nbsp; We truly appreciate his hard work and dedication, and we look forward to seeing him continue to grow and excel within the team. Keep up the great work, Hridyansh!",
    name: "Antonio Urrea",
    imgSrc: "/images/TAES_person.jpg",
    company: "Ttriumph Adventure Experience Spain",
  },
  {
    content:
      "I am extremely pleased with the work that Hridyansh did on developing my website. His technical expertise, combined with a clear understanding of my vision, resulted in a site that is both highly functional and visually appealing.&nbsp; Throughout the project, he maintained excellent communication, ensuring that every detail met my expectations. The coding is clean, efficient, and carries a thoughtful, human touch that enhances the user experience.&nbsp; The project was completed on time and within budget, and I am confident the website will serve my needs for years to come. I highly recommend Hridyansh for anyone seeking a skilled and reliable web developer.",
    name: "Siddharth Gautam",
    imgSrc: "/images/BrightCanvas_person.jpg",
    company: "Bright Canvas",
  },
  {
    content: "'Very nice'",
    name: "Siddharth Pratap Singh",
    imgSrc: "/images/SPS_person.jpg",
    company: "SPS Architects",
  },
  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Jonathan",
    imgSrc: "/images/people-6.jpg",
    company: "Skyline Digital",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-1000",
    });
  });

  return (
    <section className="section overflow-hidden" id="reviews">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">What my collaborators say</h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit ">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <div>
              <ReviewCard
                key={key}
                content={content}
                name={name}
                imgSrc={imgSrc}
                company={company}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
