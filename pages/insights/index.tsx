/* eslint-disable @next/next/no-img-element */
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
import WithUs from "@/components/WithUs/FlowImgs";
import OurInsights from "@/components/OurInsights/BlogsCards";
import NewsSec from "@/components/NewsLetter/NewsSec";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/helpers/gsap";
import OurInsightsBlogPage from "@/components/OurInsights/BlogPage";

export default function Insights() {
 

  return (
    <>
      <Head>
        <title>Insights | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section className="insight-page">
        <section className="hero-section">
          <Container>
            <Row>
              <Col lg="9" className="text-center mx-auto align-self-center">
                <h2 className="heading hero-big">All about whats happening.</h2>
                <Link href="/contact-us" className="btn btn-purple mt-3">
                  Know More
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <OurInsightsBlogPage />
       

        <NewsSec />
      </section>
    </>
  );
}
