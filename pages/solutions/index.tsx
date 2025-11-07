import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MagnetButton from "@/components/MagnetButton";
import BottomCta from "@/components/Cta/BottomCta";
import ServiceList from "@/components/Services/ServiceList";
import RoadMapList from "@/components/Roadmap/RoadMapList";
import BottomForm from "@/components/ContactForm/BottomForm";
import Link from "next/link";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/helpers/gsap";
import HeroModelScene from "@/components/HeroModelScene";
import LottiePlayer from "@/components/LottiePlayer";

export default function Service() {
  const main = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    if (!main.current) return;

    const ctx = gsap.context((self) => {
      const mediaQuery = window.matchMedia('(min-width: 992px)');

      const handleResize = () => {
        if (mediaQuery.matches) {
          // Execute GSAP animations if the viewport width is greater than 992px
          setTimeout(() => {
            const achItems = main.current?.querySelectorAll(".servwrap .inner");
            achItems?.forEach((elem) => {
              let tl = gsap.timeline({
                scrollTrigger: {
                  trigger: elem,
                  scrub: true,
                  end: "-50px",
                },
              });
              tl.fromTo(elem, { y: "15%", scale: 0.9 }, { y: "0%", scale: 1 });
            });
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

  return (
    <>
      <Head>
        <title>Service | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section ref={main}>
        <section className="hero-section">
          <Container>
            <Row>
              <Col lg="10" className="text-center mx-auto">
                <h2 className="heading hero-big">
                  The lasting impression of how we do it
                </h2>
                <Link href="/projects" className="btn btn-purple mt-3">
                  Know More
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-padding service-sec">
          <Container>
            <div className="servwrap lg">
              <span className="d-block mb-4" id="appdesign"></span>
              <div className="inner">
                <Row>
                  <Col lg="7" className="align-self-center">
                    <h4 className="title">App design and development</h4>
                    <p>
                      We make apps that stick out. From concept to launch, we
                      infuse creativity and functionality, ensuring your app
                      leaves an impression while getting the job done.
                    </p>
                  </Col>
                  <Col lg="4" className="ms-auto text-end">
                    <LottiePlayer
                      className="blendmode lglottie"
                      autoplay
                      loop
                      src="/lottie/ball_balance.json"
                      style={{ height: "16vw", width: "16vw" }}
                    >
                    </LottiePlayer>
                    {/* <Image
                      src="/images/group13502.png"
                      className="img-fluid"
                      alt="img"
                    /> */}
                  </Col>
                </Row>
                <div className="listbox">
                  <div className="coll">
                    {/* <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/star_shape.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer> */}
                    <Image
                      src="/images/service/Product design.gif"
                      className="img-fluid"
                      alt="img"
                    />
                    <h4>Product design</h4>
                  </div>
                  <div className="coll">
                    <Image
                      src="/images/service/Consulting.gif"
                      className="img-fluid"
                      alt="img"
                    />
                    <h4>Consulting</h4>
                  </div>
                  <div className="coll">
                    <Image
                      src="/images/service/Development.gif"
                      className="img-fluid"
                      alt="img"
                    />
                    <h4>Development</h4>
                  </div>
                  <div className="coll">
                    <LottiePlayer
                      autoplay
                      loop
                      src="/lottie/circle_loader6.json"
                      style={{ height: "8vw", width: "8vw" }}
                    >
                    </LottiePlayer>
                    <h4>Integrations</h4>
                  </div>
                  <div className="coll">
                    <LottiePlayer
                      autoplay
                      loop
                      src="/lottie/circle_loader5.json"
                      style={{ height: "8vw", width: "8vw" }}
                    >
                    </LottiePlayer>
                    {/* <Image
                      src="/images/service/Testing and QA.gif"
                      className="img-fluid"
                      alt="img"
                    /> */}
                    <h4>Testing and QA</h4>
                  </div>
                </div>
              </div>
              <span className="d-block mb-4" id="aiml"></span>
              <div className="inner">
                <Row>
                  <Col lg="7" className="align-self-center">
                    <h4 className="title">AI/ML</h4>
                    <p>
                      Our Artificial Inteligence and Machine Learning services
                      help you make smart business choices so you always stay
                      ahead with the evolving nature of data and analytics.
                      Enabling you to foresee trends and opportunities before
                      they even arise.
                    </p>
                  </Col>
                  <Col lg="4" className="ms-auto text-end">
                    <LottiePlayer
                      className="lglottie"
                      autoplay
                      loop
                      src="/lottie/processing_loader1.json"
                      style={{ height: "16vw", width: "16vw" }}
                    >
                    </LottiePlayer>
                    {/* <Image
                      src="/images/group251.png"
                      className="img-fluid"
                      alt="img"
                    /> */}
                  </Col>
                </Row>
                <div className="listbox">
                  <div className="coll">
                    <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/spin_loading.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>Consulting</h4>
                  </div>
                  <div className="coll">
                    <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/loading_dot1.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>POC development</h4>
                  </div>
                  <div className="coll">
                    <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/star_shape.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>Support</h4>
                  </div>
                </div>
              </div>
              <span className="d-block mb-4" id="webdesign"></span>
              <div className="inner">
                <Row>
                  <Col lg="7" className="align-self-center">
                    <h4 className="title">Web design and development</h4>
                    <p>
                      Build stunning, user-friendly websites that capture your
                      brand’s essence. we create custom designs that engage and
                      convert visitors. When it comes to web design and
                      development, we’re not just building websites, we’re
                      crafting digital masterpieces that are as eye-catching as
                      they are functional.
                    </p>
                  </Col>
                  <Col lg="4" className="ms-auto text-end">
                    <LottiePlayer
                      className="lglottie"
                      autoplay
                      loop
                      src="/lottie/shapes_loader.json"
                      style={{ height: "16vw", width: "16vw" }}
                    >
                    </LottiePlayer>
                    {/* <Image
                      src="/images/group2601.png"
                      className="img-fluid"
                      alt="img"
                    /> */}
                  </Col>
                </Row>
                <div className="listbox">
                  <div className="coll">
                    <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/square_repel_loader1.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>E-Commerce</h4>
                  </div>
                  <div className="coll">
                    <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/cubes_loading1.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>Custom</h4>
                  </div>
                  <div className="coll">
                    <Image
                      src="/images/service/Strategy.gif"
                      className="img-fluid"
                      alt="img"
                    />
                    <h4>Strategy</h4>
                  </div>
                </div>
              </div>
              <span className="d-block mb-4" id="digitalmart"></span>
              <div className="inner">
                <Row>
                  <Col lg="7" className="align-self-center">
                    <h4 className="title">Digital marketing</h4>
                    <p>
                      Strengthen your digital footprint and connect with more
                      clients using our effective digital marketing strategies.
                      We tailor our approach to grow your brand and increase
                      your ROI.
                    </p>
                  </Col>
                  <Col lg="4" className="ms-auto text-end">
                    <LottiePlayer
                      className="lglottie"
                      autoplay
                      loop
                      src="/lottie/loading_shapes1.json"
                      style={{ height: "16vw", width: "16vw" }}
                    >
                    </LottiePlayer>
                    {/* <Image
                      src="/images/group258.png"
                      className="img-fluid"
                      alt="img"
                    /> */}
                  </Col>
                </Row>
                <div className="listbox">
                  <div className="coll">
                    <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/loading_dot2.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>Content marketing</h4>
                  </div>
                  <div className="coll">
                    <LottiePlayer
                      className="mb-4"
                      autoplay
                      loop
                      src="/lottie/convert_loader1.json"
                      style={{ height: "6vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>Paid advertising</h4>
                  </div>
                  <div className="coll">
                    <LottiePlayer
                      className="mb-5"
                      autoplay
                      loop
                      src="/lottie/scale_inand_out_oader1.json"
                      style={{ height: "5vw", width: "6vw" }}
                    >
                    </LottiePlayer>
                    <h4>Email Marketing</h4>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="section-padding pt-0 canvas-sec">
          <Container>
            <Row>
              <Col lg="6" className="ms-auto">
                <HeroModelScene />

                {/* <Image
                  src="/images/shapes.png"
                  className="img-fluid"
                  alt="img"
                /> */}
              </Col>
              <Col lg="6" className="align-self-center mt-lg-0 mt-3">
                <h2 className="heading big-heading">
                  Found what you were looking for?
                </h2>
                <p className="para mb-lg-3">
                  Choose Coded Pulse for top-quality solutions! Elevate your
                  digital game with our standout services - where excellence is
                  always the pick of the bunch!
                </p>
                <MagnetButton text="Get started" href="#?" />
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
}
