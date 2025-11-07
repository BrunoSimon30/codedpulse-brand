import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BottomForm from "@/components/ContactForm/BottomForm";
import NewsSec from "@/components/NewsLetter/NewsSec";

import HoverLottieGroup from "@/components/InteractiveLottiePlayer/lottiefiles";


export default function Contact() {
  const numAnimations = [
    { src: "/lottie/call3.json" },
  ];
  const msgAnimations = [
    { src: "/lottie/Chatting (1).json" },
  ];
  const locationAnimations = [
    { src: "/lottie/Location Permission (1).json" },
  ];
  const socialMediaAnimations = [
    { src: "/lottie/facebook.json", sec: .95 },
    { src: "/lottie/instagram.json", sec: .9 },
    { src: "/lottie/likedin.json", sec: .85 }
  ];
  return (
    <>
      <Head>
        <title>Contact Us | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className="hero-section">
          <Container>
            <Row>
              <Col lg="9" className="text-center mx-auto align-self-center">
                <h2 className="heading hero-big">
                  We&apos;re here to support your ideas. anytime, anywhere
                </h2>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section-padding contact-sec">
          <Container>
            <Row>
              <Col lg="5" className="">
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
        <section className="info-sec">
          <Container>
            <div className="infowrap bg-purple">
              <HoverLottieGroup
                animations={numAnimations}
                title="Let&apos;s discuss"
                description="(855) 725-6835"
                href="tel:+18557256835"
              />
              <HoverLottieGroup
                animations={msgAnimations}
                title="Send a message"
                description="222 South Main Street, Suite 500 Salt Lake City, UT 84101, USA"
              />
             
              <HoverLottieGroup
                animations={locationAnimations}
                title="Location"
                description="222 South Main Street, Suite 500 Salt Lake City, UT 84101, USA"
              />
            
              <HoverLottieGroup
                animations={socialMediaAnimations}
                title="Connect us"
                description="Letstalk@codedpulse.co"
                href="mailto:Letstalk@codedpulse.co"
              />
            </div>
          </Container>
        </section>
        <NewsSec />
      </section>
    </>
  );
}
