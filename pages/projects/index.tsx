import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useRef, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import MagnetButton from "@/components/MagnetButton";
import BottomCta from "@/components/Cta/BottomCta";
import ServiceList from "@/components/Services/ServiceList";
import RoadMapList from "@/components/Roadmap/RoadMapList";
import BottomForm from "@/components/ContactForm/BottomForm";
import PortfolioAll from "@/components/Portfolio/All";
import Link from "next/link";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap, SplitText } from "@/helpers/gsap";
import PortfolioWithTabs from "@/components/Portfolio";

export default function Projects() {

  return (
    <>
      <Head>
        <title>Projects | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className="hero-section">
          <Container>
            <Row>
              <Col lg="9" className="mx-auto text-center">
                <h2 className="heading hero-big">
                  Its all about how we&apos;ve done it
                </h2>
                <Link href="/insights" className="btn btn-purple mt-3">
                  Know More
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-padding gallery-sec bg-purple">
          <Container>
            <h2 className="heading mb-lg-4 text-center">Our work</h2>
            <PortfolioWithTabs />
          </Container>
        </section>

        <section className="design-sec section-padding">
          <h2 className="text">
            Design that
          </h2>
          <video
            src="/media/design.webm"
            poster=""
            autoPlay
            muted
            loop
            className=""
          ></video>
          <h2 className="text">move & inspire</h2>
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
      </section>
    </>
  );
}
