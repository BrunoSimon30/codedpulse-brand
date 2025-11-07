import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function AdonaiConsultants() {


  const { setModalShow } = useModalContext();


  useEffect(() => {
    document.body.className = 'adonai-consultants case-study';
  }, []);
  return (
    <>
      <Head>
        <title>Adonai Consultants | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <Image src="/images/case-study/adonai-consultants/logo.png" className={styles.logo} alt="" />
                <h2 className={`heading ${styles.heading}`}>Adonai Consultants</h2>
                <p className={`para ${styles.para}`}>Adonai Consultations is a cutting-edge mobile application designed to streamline elevator inspections and improve communication between inspectors and clients. It is now available on major app stores. </p>
                <Link download={true}  target="_blank" href="/case-studies-pdf/Adonai Consultants.pdf" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
              </Col>
              <Col lg="6" className="align-self-center text-lg-end text-center">
                <Image src="/images/case-study/adonai-consultants/banimg.png" className={styles.banimg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col xl="8" className="text-center mx-auto">
                <h2 className={`heading ${styles.heading}`}>Vision Unlocked</h2>
                <p className={`para ${styles.para}`}>The client – who brought the Adonai Consultations project- wanted us to develop a platform that would update the inspection process for elevators while serving users– both inspectors and clients – with an intuitive user experience.</p>
              </Col>
            </Row>
            <Row>
              <Col xl="10" className="text-center mx-auto">
                <Row className={styles.box_row}>
                  <Col lg="4" className="mb-lg-0 mb-3">
                    <div className={styles.box}>
                      <h4>YEAR</h4>
                      <h2>2023</h2>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-lg-0 mb-3">
                    <div className={styles.box}>
                      <h4>ROLE</h4>
                      <h2>UI/UX DESIGN</h2>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-lg-0 mb-3">
                    <div className={styles.box}>
                      <h4>TYPE</h4>
                      <h2>WEB-APP</h2>
                    </div>
                  </Col>
                </Row>
                <Image src="/images/case-study/adonai-consultants/0051.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/adonai-consultants/macbookpro16.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Introduction</h2>
                <p className={`para ${styles.para}`}>Adonai Consultations is a state-of-the-art mobile application with a dedicated, user-friendly landing page. This initiative seeks to transform the elevator inspection process by making communication between inspectors and clients a breeze.</p>
                <p className={`para ${styles.para}`}>Using this platform enables users to oversee inspections efficiently, follow up on service requests, and access crucial reports, all contributing to enhancing the industry’s safety standards.</p>
                <p className={`para ${styles.para}`}>The client envisioned a perfect solution that creates an intuitive experience for both inspectors and clients, ensuring a more streamlined and effective approach to the inspection process</p>
                <div className={styles.store}>
                  <Link href={'#'}>
                    <Image src="/images/case-study/adonai-consultants/apple.png" className={``} alt="" />
                  </Link>
                  <Link href={'#'}>
                    <Image src="/images/case-study/adonai-consultants/play.png" className={``} alt="" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Hurdles on <br /> the Path </h2>
                <p className={`para ${styles.para}`}>Developing the Adonai Consultations app was a challenge. Among them, one significant task was creating a multi-interface system designed for distinct user roles—Super Admins, Inspectors, and Clients. Ensuring user-friendliness for all interfaces required meticulous planning and thoughtful design.</p>
                <p className={`para ${styles.para}`}>Another challenge involved keeping users informed about inspection statuses and scheduling changes by integrating real-time reporting and notification features.</p>
              </Col>
              <Col lg="6" className="mx-auto align-self-center">
                <Image src="/images/case-study/adonai-consultants/freeiphoneipadmockup.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="6" className="me-auto align-self-center">
                <Image src="/images/case-study/adonai-consultants/group48098845.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Solutions in Action</h2>
                <p className={`para ${styles.para}`}>Coded Pulse’s dedicated app developers first addressed the challenge of three different interfaces by developing distinct yet interconnected dashboards tailored to each user type. The app’s Super Admin has control over client management and report generation. It empowers inspectors to manage tasks and report inspections while helping clients quickly access their reports</p>
                <p className={`para ${styles.para}`}>The integration of real-time notifications through automated alerts enhances communication, ensuring both app users stay informed about updates.</p>
                <p className={`para ${styles.para}`}>We integrated Google Calendar to streamline appointment management and connected the platform to secure login systems and advanced encryption protocols to protect sensitive data.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col xl="8" className="text-center mx-auto">
                <h2 className={`heading ${styles.heading}`}>Continuous Improvement and Testing</h2>
                <p className={`para ${styles.para}`}>Right before the final delivery, we conducted comprehensive testing and made iterative improvements to ensure the platform’s compliance with industry standards and an optimal user experience.</p>
              </Col>
            </Row>
            <Row>
              <Col xl="10" className="text-center mx-auto">
                <Image src="/images/case-study/adonai-consultants/freeresponsive.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto">
                <h2 className={`heading ${styles.heading}`}>A Triumph of Innovation</h2>
                <p className={`para ${styles.para}`}>Adonai Consultations has transformed the elevator inspection process and has now become a user-friendly, fully operational solution. Inspectors can manage their tasks proficiently, while clients can access real-time reports and updates conveniently. The client has expressed high satisfaction with the app's unique design and exceptional functionality.  </p>
                <p className={`para ${styles.para}`}>Adonai Consultations has secured a leading position in the elevator inspection industry, receiving positive feedback for its effective communication and management of services.</p>
              </Col>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/adonai-consultants/group480988491.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding pb-0 ${styles.ctasec}`}>
          <Container>
            <Row>
              <Col lg="7" className="">
                <p className="para mb-0">Have a Project</p>
                <h2 className={`heading ${styles.heading}`}>We’re Ready</h2>
              </Col>
              <Col lg="5" className="text-lg-end align-self-center">
                <Link href={'#'} onClick={() => setModalShow(true)} className="btn btn-purple">get in touch</Link>
              </Col>
            </Row>
          </Container>
        </section>


      </section>
    </>
  );
}