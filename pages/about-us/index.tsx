/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MagnetButton from "@/components/MagnetButton";
import Link from "next/link";
import Testimonial from "@/components/Testimonial/Testimonial";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/helpers/gsap";

export default function AboutUs() {
  const main = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!main.current) return;

    const ctx = gsap.context((self: any) => {
      const achItems = main.current?.querySelectorAll(".achievwrap .inner");
      achItems?.forEach((elem) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: elem,
            scrub: true,
            end: "-50px",
          },
        });
        tl.fromTo(elem, { x: "100%" }, { x: "0%" });
      });
    }, main);

    return () => ctx.revert();
  });

  return (
    <>
      <Head>
        <title>About us | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section ref={main}>
        <section className="hero-section">
          <Container>
            <Row>
              <Col lg="9" className="text-center mx-auto">
                <h2 className="heading hero-big">
                  When we say we don&apos;t make cr<span>app</span>, We mean it.
                </h2>
                <Link href="/solutions" className="btn btn-purple mt-3">
                  Know More
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        <h1 className="watermark">About Us</h1>

        <section className="section-padding bg-purple aboutus-sec">
          <Container>
            {/* <Row>
              <Col lg="10" className="mx-auto text-center">
                <h4 className="heading">Experience The Difference</h4>
                <h2 className="para text-dark">At Coded Pulse, our approach is not just limited to creating digital solutions, but we believe in understanding your unique needs and proposing a strategy, effective for your long-term growth. So far, we have </h2>
              </Col>
            </Row> */}
            <div className="counter my-lg-5 my-3">
              <div className="inner">
                <h2 className="num">1000+</h2>
                <p>Satisfied clients</p>
              </div>
              <div className="inner">
                <h2 className="num">150+</h2>
                <p>Skillfully executed projects</p>
              </div>
              <div className="inner">
                <h2 className="num">38%</h2>
                <p>Repeated customers</p>
              </div>
              <div className="inner">
                <h2 className="num">10M</h2>
                <p>Lines of code deployed</p>
              </div>
            </div>
            <Row>
              <Col lg="5" className="d-lg-block d-none ">
                <Image
                  src="/images/abstract_red_801.png"
                  className="img-fluid"
                  alt="img"
                />
              </Col>
              <Col xxl="5" lg="6" className="align-self-center">
                <h4 className="highlight2 mb-3">Award winning agency</h4>
                <h4 className="mheading">How we create value for you?</h4>
                <p className="para text-dark">
                  Creating products with a strong identity. We provide brilliant
                  ideas and adding the world called success brand. We deliver
                  customized marketing campaign to use your audience to make a
                  positive move.
                </p>
                <MagnetButton text="Let's talk now" href="/contact-us" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-padding team-sec pb-0">
          <Container>
            <div className="teamwrap">
              <div className="lgcards">
                <h4 className="mheading">
                  The league of ambitious and solution driven players
                </h4>
                <Link href="#" className="team-card d-none">
                  <Image
                    src="/images/team1.png"
                    className="img-fluid"
                    alt="img"
                  />
                  <h4 className="name">Dan Smith</h4>
                  <p>Manager</p>
                </Link>
                <Link href="#" className="team-card">
                  <Image
                    src="/images/team2.png"
                    className="img-fluid"
                    alt="img"
                  />
                  <h4 className="name">Alan Begham</h4>
                  <p>CEO Suitch</p>
                </Link>
              </div>
              {/* <div className="smcards">
                <Link href="#" className="team-card">
                  <Image
                    src="/images/team3.png"
                    className="img-fluid"
                    alt="img"
                  />
                  <h4 className="name">Arthur Dowson</h4>
                  <p>Designer</p>
                </Link>
                <Link href="#" className="team-card">
                  <Image
                    src="/images/team4.png"
                    className="img-fluid"
                    alt="img"
                  />
                  <h4 className="name">Brandon Adams</h4>
                  <p>HR Suitch</p>
                </Link>
                <Link href="#" className="team-card">
                  <Image
                    src="/images/team5.png"
                    className="img-fluid"
                    alt="img"
                  />
                  <h4 className="name">Tim Bearton</h4>
                  <p>Designer</p>
                </Link>
                <Link href="#" className="team-card">
                  <Image
                    src="/images/team6.png"
                    className="img-fluid"
                    alt="img"
                  />
                  <h4 className="name">Arthur Dowson</h4>
                  <p>Designer</p>
                </Link>
              </div> */}
            </div>
          </Container>
        </section>
        <section className="section-padding achiev-sec">
          <Container>
            <h2 className="heading text-center">
              Celebrating our award-winning achievements
            </h2>

            <div className="achievwrap">
              <div className="inner">
                <div className="number">2022</div>
                <h4 className="title">Site of the day</h4>
                <p>
                  NLP Genius: Natural language processing powered by neural
                  networks
                </p>
              </div>
              <div className="inner">
                <div className="number">2022</div>
                <h4 className="title">Best animation</h4>
                <p>
                  Smart Trader: Predictive stock market analysis using neural
                  networks
                </p>
              </div>
              <div className="inner">
                <div className="number">2023</div>
                <h4 className="title">Site of the day</h4>
                <p>
                  Health Care AI: Personalized diagnostics and treatment with
                  suitch
                </p>
              </div>
              <div className="inner">
                <div className="number">2024</div>
                <h4 className="title">Mobile app</h4>
                <p>
                  Auto Drive: Autonomous vehicle navigation with advanced neural
                  networks
                </p>
              </div>
            </div>
          </Container>
        </section>
        <Testimonial />
        <section className="section-padding pb-0">
          <Container>
            <div className="partners">
              {/* <Link href="#">
                <img src="/images/clutch.svg" alt="" />
              </Link> */}
              <Link href="https://www.designrush.com/agency/mobile-app-design-development/new-jersey" target="_blank">
                <img src="/images/designrush.svg" alt="" />
              </Link>
              <Link href="https://www.trustpilot.com/review/thesuitch.com" target="_blank">
                <img src="/images/trustpilot.svg" alt="" />
              </Link>
            </div>
          </Container>
        </section>
      </section>
    </>
  );
}
