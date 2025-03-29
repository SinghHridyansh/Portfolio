import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Experience = () => {
  const planeRef = useRef(null);
  const pathRef = useRef(null);
  const solidLineRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const solidLine = solidLineRef.current;
    const plane = planeRef.current;

    if (!path || !solidLine || !plane) return;

    const pathLength = path.getTotalLength();
    gsap.set(plane, { opacity: 1 });

    // Animate plane manually along the path
    gsap.to(plane, {
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1,
        // markers: true,
      },
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
    // Dotted line turning into a solid path
    gsap.fromTo(
      solidLine,
      { strokeDasharray: pathLength, strokeDashoffset: pathLength },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: path,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );
  }, [pathRef, solidLineRef, planeRef]);

  return (
    <section
      // className="relative flex flex-col items-center justify-center py-20 bg-gray-900 text-white "
      className="hidden md:hidden relative section lg:flex flex-col items-center justify-center "
      id="experience"
    >
      <div className="container flex flex-col justify-center items-center ">
        {/* <h2 className="text-4xl font-bold mb-10">Work Experience</h2> */}
        <div className="w-full">
          <h2 className="headline-2 ">Work experience timeline</h2>
          <p className="text-zonc-400 mt-3 mb-8 max-w-[50ch] ">
            A quick recap of my professional journey
          </p>
        </div>

        <div className="relative w-full max-w-4xl h-[900px]  ">
          {/* h-[650px] */}
          {/* SVG Timeline Path */}
          <svg className="py-20 absolute w-full h-full flex justify-center items-center ">
            <path
              ref={pathRef}
              // d="M100,50 Q300,200 500,50 T900,50"

              //     d="M 50 50
              //  L 600 50
              //  C 650 50 750 50 750 150
              //  C 750 250 650 250 600 250
              //  L 150 250
              //  C 100 250 50 300 50 350
              //  C 50 400 100 450 150 450
              //  L 750 450"

              //     d="M 50 50
              //  L 600 50
              //  C 650 50 750 50 750 150
              //  C 750 250 650 250 600 250
              //  L 150 250
              //  C 100 250 50 300 50 350
              //  C 50 400 100 450 150 450
              //  L 750 450"
              // maybe final one
              d="M 50 50 L 700 50 C 750 50 850 50 850 150 C 850 250 750 250 700 250 L 200 250 C 150 250 50 250 50 350 C 50 450 150 450 200 450 L 700 450 C 750 450 850 450 850 550 C 850 650 750 650 700 650 L 50 650 "
              // d="M 50 50 L 700 50 C 750 50 850 50 850 150 C 850 250 750 250 700 250 L 200 250 C 150 250 50 250 50 350 C 50 450 150 450 200 450 L 850 450 "
              stroke="gray"
              strokeWidth="4"
              strokeDasharray="8,8"
              fill="none"
            />
            <path
              ref={solidLineRef}
              //     d="M 50 50
              //  L 600 50
              //  C 650 50 750 50 750 150
              //  C 750 250 650 250 600 250
              //  L 150 250
              //  C 100 250 50 300 50 350
              //  C 50 400 100 450 150 450
              //  L 750 450"
              //     d="M 50 50
              // L 600 50
              // C 650 50 750 50 750 150
              // C 750 250 650 250 600 250
              // L 150 250
              // C 100 250 50 300 50 350
              // C 50 400 100 450 150 450
              // L 750 450"

              // Maybe final one
              d="M 50 50 L 700 50 C 750 50 850 50 850 150 C 850 250 750 250 700 250 L 200 250 C 150 250 50 250 50 350 C 50 450 150 450 200 450 L 700 450 C 750 450 850 450 850 550 C 850 650 750 650 700 650 L 50 650"
              // d="M 50 50 L 700 50 C 750 50 850 50 850 150 C 850 250 750 250 700 250 L 200 250 C 150 250 50 250 50 350 C 50 450 150 450 200 450 L 850 450 "
              stroke="#38bdf8"
              strokeWidth="4"
              fill="none"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>

          {/* Airplane */}
          <img
            ref={planeRef}
            src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png"
            alt="Plane"
            className="absolute w-12 opacity-0"
          />

          {/* Work Experience Entries */}
          <div className="text-left absolute top-10 left-12">
            <p className="text-lg font-semibold">Graduate Engineer Trainee</p>
            <p className="text-sm text-gray-400">Jakson Group pvt. Ltd.</p>
            <p className="text-sm">Feb 2022 - Feb 2022</p>
          </div>

          <div className="text-right absolute top-48 right-20 ">
            <p className="text-lg font-semibold">
              Senior Motion Graphics Designer
            </p>
            <p className="text-sm text-gray-400">Fantasy Squad pvt. Ltd.</p>
            <p className="text-sm">2022 - Jun 2023</p>
          </div>

          <div className="text-left absolute top-96 left-24">
            <p className="text-lg font-semibold">Motion Designer</p>
            <p className="text-sm text-gray-400">Throttl Group</p>
            <p className="text-sm">Jun 2023 - Aug 2023</p>
          </div>

          <div className="text-right absolute bottom-60 right-20">
            <p className="text-lg font-semibold">Web Developement Intern</p>
            <p className="text-sm text-blue-400">EazyByts</p>
            <p className="text-sm">Jun 2024 - July 2024</p>
          </div>

          <div className="text-left absolute bottom-20 left-12">
            <p className="text-lg font-semibold">Full Stack Web Developer</p>
            <p className="text-sm text-blue-400">
              Triumph Adventure Experience Spain
            </p>
            <p className="text-sm">September 2024 - Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

{
  /* <section className="section">
  <div className="container">
    <h2 className="headline-2 reveal-up">Work experience timeline</h2>
    <p className="text-zonc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
      A quick recap of my professional journey
    </p>
  </div>
</section>; */
}
