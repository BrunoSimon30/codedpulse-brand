/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import MagnetButton from "../MagnetButton";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { gsap } from "@/helpers/gsap";
import LottiePlayer from "@/components/LottiePlayer";

function Testimonial() {
  const main = useRef<HTMLElement>(null);
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (!main.current) return;

    const ctx = gsap.context((self) => {
      const mediaQuery = window.matchMedia('(min-width: 992px)');

      const handleResize = () => {
        if (mediaQuery.matches) {
          // Execute GSAP animations if the viewport width is greater than 992px
          setTimeout(() => {
            let boxesContainer = main.current?.querySelector(".testi-boxes");
            let boxes = boxesContainer?.querySelectorAll(".inner");

            const pinTL = gsap.timeline({
              scrollTrigger: {
                trigger: main.current,
                // scroller: ".main_wrapper",
                pin: true,
                scrub: true,
                start: "top top",
                end: "+=1500",
              },
            });

            if (boxesContainer && boxes) {
              pinTL.fromTo(
                boxesContainer,
                { x: "100%" },
                { x: "0%", duration: 30 },
                0
              );
              pinTL.fromTo(
                boxes,
                { y: "50%", skewX: "9deg", rotateY: "35deg" },
                {
                  y: "0",
                  skewX: "0deg",
                  rotateY: "0deg",
                  stagger: 5,
                  duration: 15,
                  ease: "power2.inOut",
                },
                -1
              );
            }
          }, 40);
        } else {
          // Revert GSAP animations if the viewport width is less than 992px
        }
      };

      // Initial check
      handleResize();

      // Add event listener for window resize
      mediaQuery.addEventListener('change', handleResize);

      return () => {
        // Clean up event listener and GSAP context
        mediaQuery.removeEventListener('change', handleResize);
        ctx.revert();
      };
    }, main);

  }, []);

  // useIsomorphicLayoutEffect(() => {
  //   if (!main.current) return;

  //   const ctx = gsap.context((self: any) => {
  //     // setTimeout(() => {
  //     let boxesContainer = main.current?.querySelector(".testi-boxes");
  //     let boxes = boxesContainer?.querySelectorAll(".inner");

  //     const pinTL = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: main.current,
  //         // scroller: ".main_wrapper",
  //         pin: true,
  //         scrub: true,
  //         start: "top top",
  //         end: "+=1500",
  //       },
  //     });

  //     if (boxesContainer && boxes) {
  //       pinTL.fromTo(
  //         boxesContainer,
  //         { x: "100%" },
  //         { x: "0%", duration: 30 },
  //         0
  //       );
  //       pinTL.fromTo(
  //         boxes,
  //         { y: "50%", skewX: "9deg", rotateY: "35deg" },
  //         {
  //           y: "0",
  //           skewX: "0deg",
  //           rotateY: "0deg",
  //           stagger: 5,
  //           duration: 15,
  //           ease: "power2.inOut",
  //         },
  //         -1
  //       );
  //     }

  //     // }, 4);
  //   }, main);

  //   return () => ctx.revert();
  // });

  return (
    <>
      <section className="section-padding bg-purple testimonial-sec" ref={main}>
        <Container>
          <div className="row">
            <div className="col-lg-8">
              <h2 className="heading mb-0">What people say <br /> about us!</h2>
            </div>
            {/* <div className="col-lg-4 ms-auto">
              <h2 className="para text-dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </h2>
            </div> */}
          </div>
          <div className="testi-boxes">
            <div className="inner">
              <div>
                <div className="description">
                  <img src="/images/team5.png" alt="" />
                  <LottiePlayer autoplay loop src="/lottie/5_stars_rating.json" style={{ height: "7vw", width: "10vw" }}></LottiePlayer>
                </div>
                <p>Everything has been smooth and they have done a great job helping us bring our vision to life! We needed a web interface and application, and Coded Pulse team delivered them on time.</p>
              </div>
              <div className="info">
                <p className="name">Steven K</p>
                <p className="desig">Software Development</p>
              </div>
            </div>
            <div className="inner">
              <div>
                <div className="description">
                  <img src="/images/team5.png" alt="" />
                  <LottiePlayer autoplay loop src="/lottie/5_stars_rating.json" style={{ height: "7vw", width: "10vw" }}></LottiePlayer>
                </div>
                <p>Alvin has been an amazing contributor to my project. I am very confident that he and his team are doing their very best to help me accomplish my dream project. I absolutely could not have done this without them.</p>
              </div>
              <div className="info">
                <p className="name">Vanessa A</p>
                <p className="desig">Custom App Development</p>
              </div>
            </div>
            <div className="inner">
              <div>
                <div className="description">
                  <img src="/images/team5.png" alt="" />
                  <LottiePlayer autoplay loop src="/lottie/5_stars_rating.json" style={{ height: "7vw", width: "10vw" }}></LottiePlayer>
                </div>
                <p>I was just starting to vet app developers. Suitch was #1 on my list. After my meeting I never had to look back nor had to try the 2nd developer on the list. They got the full vision of my brand, operations, personality, and future features. </p>
              </div>
              <div className="info">
                <p className="name">Claude J</p>
                <p className="desig">App Development</p>
              </div>
            </div>
            <div className="inner">
              <div>
                <div className="description">
                  <img src="/images/team5.png" alt="" />
                  <LottiePlayer autoplay loop src="/lottie/5_stars_rating.json" style={{ height: "7vw", width: "10vw" }}></LottiePlayer>
                </div>
                <p>I absolutely enjoyed every moment of these meetings and felt a renewed sense of possibilities with the services my business offers. I STRONGLY RECOMMEND SUITCH. Save some time and talk to them first. Seriously. Amazing and Detailed Work! Hands down </p>

              </div>
              <div className="info">
                <p className="name">Jordana C</p>
                <p className="desig">Software Development</p>
              </div>
            </div>
            {/* <div className="inner">
              <div>
                <div className="description">
                  <img src="/images/team5.png" alt="" />
                  <LottiePlayer autoplay loop src="/lottie/5_stars_rating.json" style={{ height: "7vw", width: "10vw" }}></LottiePlayer>
                </div>
                <p>Just started last week. I provided an initial concept for a logo, and had two beautiful options, so much better than my original. Fast and immediately impressive. Coded Pulse is the best team without a doubt!</p>
              </div>
              <div className="info">
                <p className="name">Daniel P</p>
                <p className="desig">Custom Business App</p>
              </div>
            </div> */}


          </div>
        </Container>
      </section>
    </>
  );
}

export default Testimonial;
