import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AboutJWoC from "../AboutJWoc";
import InfinityCard from "../InfintyCard1";
import { TimelineDemo } from "../TimelineDemo";
import Card from "../giftComponent";



gsap.registerPlugin(ScrollTrigger);

const Starvideo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "I am not a student of JGEC. Can I participate?",
      answer: "Yes, you can definitely participate.",
    },
    {
      question: "I am a beginner. Can I participate?",
      answer: "There is no restriction, but having some development knowledge in any domain will be helpful.",
    },
    {
      question: "Can I participate as a team?",
      answer: "No, this is an individual event.",
    },
    {
      question: "I don't know about open source. Can I participate?",
      answer: "Yes, you must participate because the aim of our event is to introduce more people to open source development.",
    },
    {
      question: "Can I participate both as a mentor and a mentee?",
      answer: "No, we don't encourage that.",
    },
    {
      question: "What perks will I get?",
      answer: "Let's keep that a secret, but we promise you won't be disappointed.",
    },
  ];


  const videoContainerRef = useRef(null);
  const initialTextRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null); // Add this ref

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoContainerRef.current,
        start: "top top",
        end: "+=90%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
      },
    });

    gsap.set([contentRef.current, headingRef.current, buttonRef.current], {
      opacity: 0,
      y: 100,
    });

    gsap.set(initialTextRef.current, {
      opacity: 1,
      y: 0,
    });

    tl.to(initialTextRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
    });

    tl.to(contentRef.current, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: "power2.out",
    });

    tl.to(
      headingRef.current,
      {
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power2.out",
      },
      "<+=0.2"
    );

    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power2.out",
      },
      "<+=0.2"
    );

    gsap.to("img:not(.navbar-logo)", {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: videoContainerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <div>
      <div
        ref={videoContainerRef}
        className="relative min-h-screen w-full  overflow-hidden flex flex-col items-center justify-center"
        style={{
          minHeight: "100vh",
          height: "100dvh",
        }}
      >
        <div
          ref={initialTextRef}
          className="fixed w-full top-[20%] sm:top-[15%] md:top-1/3 lg:top-[15%] left-1/2 transform -translate-x-1/2 px-4 text-center"
        >
          <div className="relative">
            <span className="absolute inset-0 w-[620px] h-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-900 via-[rgba(0, 255, 255, 0.2)] to-cyan-800 blur-lg"></span>
            <h1
  className="relative font-extrabold font-rubik text-8xl text-white"
  style={{
    wordSpacing: window.innerWidth >= 1024 ? '0.5em' : 'normal',
  }}
>
   JWoC 2025
</h1>


          </div>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-cyan-500 glow-subtext mt-2 sm:mt-3">
            Season 6
          </p>

          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[15px] text-white mt-1 sm:mt-2">
            In association with
          </p>

          <div className="flex justify-center items-center glow-subtext gap-2 mt-2">
            <img
              className="w-8 h-4 sm:w-10 sm:h-5"
              src="gdsc.png"
              alt="GDSC Logo"
            />
            <div>
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-bold opacity-70">
                Google Developer Student Club
              </h2>
              <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-[15px] text-white opacity-50">
                Jalpaiguri Government Engineering College
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0 xs:top-48 md:top-[6rem] mobile:top-48 xl:top-48">
          <div className="relative w-full glow-effect h-full">
            <img
              src="jwoc_v1.svg"
              alt="Winter Scene"
              className="w-full h-[calc(100vh-5rem)] object-cover object-center"
              style={{
                maxHeight: "calc(100vh - 8rem)",
                marginTop: "clamp(2rem, 5vw, 4rem)",
              }}
            />
          </div>
        </div>

        {/* Content Wrapper */}
        <div
          ref={contentRef}
          className="absolute top-1/4 sm:top-1/3 left-0 w-full h-full z-50 flex flex-col items-center justify-start gap-3 px-4"
        >
          <h1
            ref={headingRef}
            className="text-4xl sm:text-3xl md:text-7xl bg-clip-text
         text-transparent bg-gradient-to-r text-center from-cyan-400 via-blue-500 to-violet-600 mb-4 sm:mb-8"
            style={{
              fontFamily: "Jersey, sans-serif",
              // textShadow:
              //   "0 0 10px rgba(0, 199, 255, 0.5), 0 0 20px rgba(0, 199, 255, 0.3)",
              // opacity: 0.8,
            }}
          >
            Welcome To A Month Of Open-Source
          </h1>

          <Link
            to="/registrationcard"
            className="relative px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold lg:text-lg text-lg rounded-lg shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-cyan-200 flex items-center justify-center z-50"
            style={{
              background: "linear-gradient(45deg, #00cc66, #0066cc, #6600cc)",
              backgroundSize: "400% 400%",
              animation: "aurora 10s ease infinite",
              boxShadow:
                "0 0 20px rgba(0, 204, 102, 0.5), 0 0 30px rgba(102, 0, 204, 0.5)",
              filter: "brightness(0.9)",
            }}
          >
            <span className="group-hover:text-cyan-300 transition-colors duration-300">
              Register Now
            </span>
          </Link>
        </div>
      </div>

      <div className="z-50 py-4 px-4 sm:mr-4 sm:ml-4">
        <AboutJWoC />
      </div>

      <div className="py-2 px-2 sm:mr-4 sm:ml-4">
        <InfinityCard />
      </div>
      {/* <div className="px-2 sm:mr-4 sm:ml-4">
        <InfinityCard2/>
      </div> */}
      <div className="px-4 timeline-section"> {/* Add timeline-section class */}
  <TimelineDemo />
</div>
      <div>
        <Card />
      </div>




    <div className="min-h-screen  py-12 px-4">
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto p-4 sm:p-6 space-y-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">

                      <h1 className="relative font-extrabold font-rubik text-6xl text-white">FAQs 🤔</h1>

          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-[1.02]"
            >
              <button
                className="w-full backdrop-blur-md p-6 text-left flex justify-between items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 ease-in-out shadow-lg hover:shadow-2xl group"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-white text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`ml-6 text-white transition-transform duration-300 transform ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  } group-hover:text-cyan-300`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? 'max-h-48 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-white/10 backdrop-blur-lg rounded-b-xl border-x border-b border-white/10">
                  <p className="text-gray-200 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>




    </div>
  )
}

export default Starvideo;
