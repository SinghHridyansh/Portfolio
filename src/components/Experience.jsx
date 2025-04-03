import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./experience.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Experience = () => {
  const planeRef = useRef(null);
  const pathRef = useRef(null);
  const solidLineRef = useRef(null);
  const waypointsRef = useRef([]);
  const triggeredDots = useRef(new Set());

  useEffect(() => {
    const path = pathRef.current;
    const solidLine = solidLineRef.current;
    const plane = planeRef.current;
    const waypoints = waypointsRef.current;

    if (!path || !solidLine || !plane) return;

    const pathLength = path.getTotalLength();
    gsap.set(plane, { opacity: 1 });

    // Animate plane along path
    gsap.to(plane, {
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1,
        onUpdate: () => checkOverlap(), // Important
      },
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      transformOrigin: "50% 50%",
    });

    // Animate line drawing
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

    // Check overlap dynamically
    function checkOverlap() {
      const planeRect = plane.getBoundingClientRect();

      waypoints.forEach((circle, index) => {
        if (!circle || triggeredDots.current.has(index)) return;

        const circleRect = circle.getBoundingClientRect();
        const dx =
          planeRect.left +
          planeRect.width / 2 -
          (circleRect.left + circleRect.width / 2);
        const dy =
          planeRect.top +
          planeRect.height / 2 -
          (circleRect.top + circleRect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 40) {
          triggeredDots.current.add(index); // Avoid retriggering
          glowEffect(circle);
        }
      });
    }

    function glowEffect(circle) {
      const tl = gsap.timeline();
      tl.to(circle, {
        scale: 1.5,
        backgroundColor: "#ffffff",
        boxShadow: "0 0 10px #ffffff",
        duration: 0.5,
      }).to(circle, {
        scale: 1.2,
        boxShadow: "0 0 20px #ffffff",
        repeat: 1,
        yoyo: true,
        duration: 0.3,
      });
    }
  }, []);

  return (
    <section
      className="hidden md:hidden relative section lg:flex flex-col items-center justify-center"
      id="experience"
    >
      <div className="container flex flex-col justify-center items-center">
        <div className="w-full">
          <h2 className="headline-2">Work experience timeline</h2>
          <p className="text-zonc-400 mt-3 mb-8 max-w-[50ch]">
            A quick recap of my professional journey
          </p>
        </div>

        <div className="relative w-full max-w-4xl h-[900px]">
          <svg className="py-20 absolute w-full h-full flex justify-center items-center">
            <path
              ref={pathRef}
              d="M 50 50 L 700 50 C 750 50 850 50 850 150 C 850 250 750 250 700 250 L 200 250 C 150 250 50 250 50 350 C 50 450 150 450 200 450 L 700 450 C 750 450 850 450 850 550 C 850 650 750 650 700 650 L 50 650 "
              stroke="gray"
              strokeWidth="4"
              strokeDasharray="8,8"
              fill="none"
            />
            <path
              ref={solidLineRef}
              d="M 50 50 L 700 50 C 750 50 850 50 850 150 C 850 250 750 250 700 250 L 200 250 C 150 250 50 250 50 350 C 50 450 150 450 200 450 L 700 450 C 750 450 850 450 850 550 C 850 650 750 650 700 650 L 50 650"
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

          {/* Waypoints */}
          {[
            { top: "7.7rem", left: "2.6rem" },
            { top: "13.5rem", right: "2.4rem" },
            { top: "26.5rem", left: "2.6rem" },
            { bottom: "16.5rem", right: "2.4rem" },
            { bottom: "10.1rem", left: "2.6rem" },
          ].map((pos, index) => (
            <div
              key={index}
              ref={(el) => (waypointsRef.current[index] = el)}
              className={`absolute w-4 h-4 bg-gray-400 rounded-full waypoint`}
              style={pos}
            />
          ))}

          {/* Experience Entries */}
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
            <p className="text-lg font-semibold">Web Development Intern</p>
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
