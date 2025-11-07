import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MagnetButton from "@/components/MagnetButton";
import BottomCta from "@/components/Cta/BottomCta";
import ServiceList from "@/components/Services/ServiceList";
import RoadMapList from "@/components/Roadmap/RoadMapList";
import BottomForm from "@/components/ContactForm/BottomForm";
import Testimonial from "@/components/Testimonial/Testimonial";
import Link from "next/link";
import WithUs from "@/components/WithUs/FlowImgs";
import OurInsights from "@/components/OurInsights/BlogsCards";
import NewsSec from "@/components/NewsLetter/NewsSec";
import HeroModelScene from "@/components/HeroModelScene";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { gsap } from "@/helpers/gsap";
import HeroScene from "@/components/HeroScene";
import MatterCanvas from "@/components/MatterCanvas";
import LoadingScreen from "@/components/LoadingScreen";
import ProjectAccordion from "@/components/ProjectAccordian/Accordian";
import RoadLine from "@/components/Roadmap/RoadLine";
import OurInsights2 from "@/components/OurInsights/BlogsCards2";

export default function Home() {
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
            let vidItem = main.current?.querySelector(
              ".idea-sec .video video"
            ) as HTMLElement;
            let vidTl = gsap
              .timeline({
                scrollTrigger: {
                  trigger: vidItem,
                  // scroller: ".main_wrapper",
                  scrub: 1,
                  end: "-=100",
                },
              })
              .fromTo(
                vidItem,
                {
                  width: "550px",
                  borderRadius: "100%",
                  textAlign: "center",
                },
                {
                  width: "100%",
                  borderRadius: "30px",
                },
                0
              );
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
        <title>Home | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section ref={main}>
        <LoadingScreen />

        <section className="hero-section">
          <Container>
            <Row>
              <Col sm="9" className="mx-auto text-center">
                <div>
                  <h2 className="heading hero-big">
                    One thing that we do is not make cr<span>app</span>
                  </h2>
                  <Link href="/about-us" className="btn btn-purple mt-3">
                    Know More
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="matter_canvas">
            <MatterCanvas />
          </div>
        </section>

        <section className="idea-sec">
          <Container>
            <div className="video">
              <video
                src="/media/projects/Main_Video_cahci3.webm"
                autoPlay
                muted
                loop
              ></video>
            </div>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <Row>
              <Col
                lg="5"
                className="d-lg-block me-auto"
                style={{ position: "relative", zIndex: "5" }}
              >
                <HeroModelScene />
                {/* <Image
                  src="/images/shapes.png"
                  className="img-fluid w-100"
                  alt="img"
                /> */}
              </Col>
              <Col lg="7" className="align-self-center">
                <h4 className="mheading heading-sm my-3">
                  Do stories really matter? <br /> Yes, that&apos;s how humans
                  move. <br /> So here&apos;s ours
                </h4>
                <p className="para">
                  Its a busy world of ideas where its more difficult to stand
                  out, so we took that as a challenge. Coded Pulse was born with
                  a simple goal—to help app businesses scale up with
                  performance. Founded by young tech entrepreneurs, who share
                  expertise in user psychology, business growth, marketing and
                  technical utility.
                </p>
                <p className="para mb-lg-4">
                  We are already an established company in the USA with a proven
                  success and fulfilment record, now expanding our horizon in
                  the growing UAE market. We believe that every idea has the
                  potential to excel. Let&apos;s make a difference together!
                </p>
                <MagnetButton text="Know more" href="/about-us" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-padding bg-purple service-sec">
          <Container>
            <div className="mb-lg-4">
              <h2 className="heading fw-medium d-block">
                How can partnering with Coded Pulse <br className="" /> bring Your brand to
                the spotlight?
              </h2>
              <MagnetButton text="See All Services" href="/solutions" />
            </div>
            <ServiceList />
          </Container>
        </section>

        <section className="section-padding why-sec">
          <Container>
            <Row>
              <Col lg="9" className="mx-auto">
                <h2 className="heading mb-lg-5 mb-3">
                  Don&apos;t just believe what we say, look for yourself!
                </h2>
              </Col>
            </Row>
          </Container>
          <div className="whywrap">
            <ProjectAccordion />

          </div>
        </section>

        <section className="roadmap-sec">
          <Container>
            <RoadLine />
            <h2 className="heading mb-lg-5">Coded Pulse journey</h2>
            <RoadMapList />
          </Container>
        </section>

        <WithUs />

        <Testimonial />

        <section className="section-padding contact-sec">
          <Container>
            <Row>
              <Col lg="5">
                <h2 className="heading">
                  Get in touch
                </h2>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <h3 className="fw-normal">
                  Provide us with project information and reach out to our team.
                </h3>
              </Col>
            </Row>
            <BottomForm />
          </Container>
        </section>
        <OurInsights2 />
        <NewsSec />
      </section>
    </>
  );
}
