import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function SkyResources() {

  const { setModalShow } = useModalContext();



  useEffect(() => {
    document.body.className = 'sky-resources case-study';
  }, []);
  return (
    <>
      <Head>
        <title>Sky Resources | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Image src="/images/case-study/sky-resources/banbg.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col lg="9" className="mx-auto">
                <div>
                  <Image src="/images/case-study/sky-resources/logo.svg" className={`logo ${styles.logo}`} alt="" />
                  <h2 className={`heading ${styles.heading}`}>A Complete Organizer for Real Estate Professionals</h2>
                  <p className={`para ${styles.para}`}>Sky Resources, LLC mobile app has risen as a complete organizing and scheduling solution for real estate agents, appraisers, and lenders.  Be the master of your time and events. Manage multiple properties and team tasks all with the thumb of your hand. Tackle complex scheduling challenges professionally. </p>
                  <Link href="/case-studies-pdf/sky-resources.pdf" target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
                </div>
              </Col>
            </Row>
            <Image src="/images/case-study/sky-resources/group1171275169.png" className={`${styles.banimg}`} alt="" />
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="10" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}>Sky Resources: <br /> The Scheduling Revolution</h2>
                <p className={`para mb-0 ${styles.para}`}>Sky Resources is an app that has brought the solution to all the scheduling problems under one platform. It is a simple yet effective scheduling system that is created after hearing the needs of the realtors for juggling between multiple devices. It ensures that both property managers and agents stay on top of their game through integrating features like calendar integration, team collaboration and main-submain events creation. </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/sky-resources/elembg.svg" className={`${styles.bgelem}`} alt="" />
                <h2 className={`heading ${styles.heading}`}><span>The Problem?</span> Creating Events & <br /> Sub Events</h2>
                <p className={`para ${styles.para}`}>Traditional scheduling apps do not deliver when it comes to real estate industry-specific needs. Real estate professionals require a system that handles appointments but also accounts for the complexities of handling different tasks tied to property management and client engagement. These apps often get trapped between layering and conflicting of two or more events on same date.</p>
                <p className={`para ${styles.para}`}>Our client’s challenge was finding an app that could handle event management across various properties without missing any details. Moreover, existing apps couldn’t assign main events and sub-events to property files and collaborate with all the team members.</p>
                <p className={`para ${styles.para}`}>Summarizing all of the client’s details apart from the basics like contact details and their ongoing business with the agents was one more problem that was on our team’s face. </p>
              </Col>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/sky-resources/group48098761.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pt-0 ${styles.branding_sec}`}>
          <Container>
            <h2 className={`heading text-center ${styles.heading}`}>Branding</h2>
            <Row>
              <Col lg="7" className="align-self-center">
                <Row>
                  <Col xs="6" className="align-self-center">
                    <Image src="/images/case-study/sky-resources/group1171275170.png" className={`w-100`} alt="" />
                  </Col>
                  <Col xs="6" className="align-self-center">
                    <Image src="/images/case-study/sky-resources/group1171275171.png" className={`w-100`} alt="" />
                  </Col>
                </Row>
                <Image src="/images/case-study/sky-resources/group1171275173.png" className={`w-100 mt-4`} alt="" />
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/sky-resources/group1171275172.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_blue}`}>
          <Container>
            <Row>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/sky-resources/group48098753.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>Simplified <br /> Scheduling for <br /> <span className="d-inline-block">Real Estate</span></h2>
                <p className={`para ${styles.para}`}>Sky Resources takes the guesswork out of scheduling. With its powerful event management features, real estate professionals can easily assign main and sub-events to property files. This is a powerful feature that makes the app distinct. These features enable users to track property tours to appraisal deadlines on a single screen.</p>
                <p className={`para ${styles.para}`}>The app also integrates with existing calendars. The integration allows real estate professionals to sync events and keep track of all meetings with multiple stakeholders. This helps agents and appraisers to stay on the same page by easing communication.</p>
                <p className={`para ${styles.para} mb-0`}>The app’s intuitive design keeps everything simple and brings all the necessary information in one place while allowing users to modify it then and there.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>The <span>Features</span> <br /> That Matter Most</h2>
                <p className={`para ${styles.para}`}>Sky Resources app simplifies functionality by providing an intuitive interface to make complex scheduling easy for real estate professionals. Multiple project handling becomes super easy because of the main events and sub-events assignments. You can do it for a specific property file and edit it on whichever screen page you’re seeing it.</p>
                <p className={`para ${styles.para}`}>Team collaboration is another aspect kept in mind when designing the app. Realtors can assign tasks and keep track of completion. Additionally, calendar integration syncs effortlessly with event creation to smooth out the deadlines and appointments process.</p>
                <p className={`para ${styles.para} mb-lg-0`}>To make these features more steadfast customizable reminders and alarms are introduced so the user never misses a deadline. The app has a 7-day free trial to earn the trust.</p>
              </Col>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/sky-resources/group48098766.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_blue}`}>
          <Image src="/images/case-study/sky-resources/maskgroup24.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/sky-resources/appleset1.png" className={`img-fluid ${styles.shadowimg}`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>A New Era of Real Estate <span>Productivity</span></h2>
                <p className={`para ${styles.para}`}>Sky Resources app broke through all the productivity barriers and emerged as an industry-specific solution. The performance and outcome were increased and user feedback was brilliant. Said they can do more work in the same amount of time. This app brought clarity and efficiency to an industry where time is money.</p>

                <p className={`para ${styles.para}`}>The app is not only for individual productivity boosing but rather a whole team collaborating effectively and achieving results in a fast-paced environment. Sky Resources is more than an app; it is the answer to the scheduling prayers.</p>

                <p className={`para ${styles.para} mb-0`}>If you’re looking for something that can solve your scheduling problem or any other organization or business problem through new-age digital solutions then CONTACT US, today.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pb-0 ${styles.ctasec} ctasec`}>
          <Container>
            <Row>
              <Col lg="7" className="">
                <p className="para mb-0">Have a Project</p>
                <h2 className={`heading ${styles.heading}`}>We’re Ready</h2>
              </Col>
              <Col lg="5" className="text-lg-end align-self-center">
               <Link href={'javascript:void(0)'} onClick={()=>setModalShow(true)} className="btn btn-purple">get in touch</Link>
              </Col>
            </Row>
          </Container>
        </section>

      </section>
    </>
  );
}