import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function ActiveSOS() {
  useEffect(() => {
    document.body.className = 'active-sos case-study';
  }, []);

  const { modalShow, setModalShow } = useModalContext();



  return (
    <>
      <Head>
        <title>Active SOS | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Image src="/images/case-study/active-sos/banbg.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col lg="9" className="mx-auto">
                <div>
                  <Image src="/images/case-study/active-sos/logo.svg" className={`logo ${styles.logo}`} alt="" />
                  <h2 className={`heading ${styles.heading}`}>ACTIVE SOS <span>CRISIS RESPONSE SIMPLIFIED</span></h2>
                  <p className={`para ${styles.para}`}> ACTIVE SOS is a helpful mobile app developed to streamline emergency communication AND ENSURE personal safety. Designed for individuals and organizations, this platform paves a simple and effective way of sending send alerts during emergencies or crises. The project was successfully completed and launched, leaving the client highly satisfied with the final product.</p>
                  <Link href="/case-studies-pdf/ActiveSos.pdf" download={true} target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
                </div>
              </Col>
            </Row>
            <Image src="/images/case-study/active-sos/group1171275169.png" className={`${styles.banimg}`} alt="" />
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_theme}`}>
          <Image src="/images/case-study/active-sos/elem1.png" className={`${styles.bgicon}`} alt="" />
          <Container>
            <Row>
              <Col lg="10" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}>Introduction</h2>
                <p className={`para mb-0 ${styles.para}`}>Our client had come up with a mobile application idea that could ensure personal safety and security during crises or emergencies, serving individuals and businesses, like schools, corporations, rehab centers, and families. The app was to be titled ACTIVE SOS, with a “customizable alert” system so users can send quick and discreet information through efficient communication in any dangerous moments.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/active-sos/elembg.svg" className={`${styles.bgelem}`} alt="" />
                <h2 className={`heading ${styles.heading}`}>Project <br /> Challenges</h2>
                <p className={`para ${styles.para}`}>The challenge that the ACTIVE SOS project presented was complex and multifaceted. Although the project idea was clear—to create an app that could send customizable alerts in emergencies with real-time location tracking—the concept was difficult to translate into a functioning product. The app needed to meet the requirements of diverse individuals and sectors, including parents, schools, and corporations.</p>
                <p className={`para ${styles.para}`}>The biggest challenge for Coded Pulse developers was maintaining an intuitive user experience without compromising functionality. The app needed to allow users to easily customize alerts, receive instant notifications, and share precise locations, while keeping their personal data secure.</p>
                <p className={`para ${styles.para}`}>Additionally, ensuring cross-platform compatibility for Android and iOS added complexity, as both stores required strict adherence to guidelines on data privacy and location tracking.</p>
              </Col>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/active-sos/group48098761.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_blue}`}>
          <Container>
            <Row>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/active-sos/group48098753.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading} ${styles.headingSos}`}>How We Tackled the Challenges</h2>
                <p className={`para ${styles.para}`}>Our expert app development team at Coded Pulse took a strategic approach, focusing on key components such as user safety, functionality, and ease of use to create the ACTIVE SOS app. We began by thoroughly analyzing the client's vision and breaking down each use case, from schools to corporations and individual users, to build a robust, adaptable framework.</p>
                <p className={`para ${styles.para}`}>Our priority was to design a seamless, user-friendly interface. Users could trigger alerts with just a few taps, a crucial feature for high-stress situations. We also enabled extensive customization, allowing users to define alert types and choose recipients, such as parents or rehab patients, with precise location updates.</p>
                <p className={`para ${styles.para} mb-0`}>Technically, we ensured the app supported real-time GPS tracking and instant notifications across multiple devices. Cross-platform compatibility, performance, and security were top priorities, with encryption safeguarding personal data</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">

                <h2 className={`heading ${styles.heading}`}>The Implementation That Achieved Excellence</h2>
                <p className={`para ${styles.para}`}>Our app development process followed a methodical and iterative approach, focusing on ensuring the reliability of key features like location tracking and instant alerts. We conducted ongoing performance tests throughout development to guarantee flawless functionality. The app was built with scalability in mind, making it suitable for individuals, organizations, and large institutions alike.</p>
                <p className={`para ${styles.para}`}>We also integrated third-party tools such as Rave, which is specifically designed for school safety. This enhanced the app’s ability to facilitate seamless communication during emergencies, improving its performance in critical scenarios.</p>
                <p className={`para ${styles.para}  mb-lg-0`}>Our experts also ensured optimal functionality under pressure by putting the app into multiple rounds of user testing in practical settings, like schools and organizations. With this approach, we validated its effectiveness in different emergencies.</p>
              </Col>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/active-sos/group48098766.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_blue}`}>
          <Image src="/images/case-study/active-sos/bgsec.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/active-sos/group48098759.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>An Excellent Final Product</h2>
                <p className={`para ${styles.para}`}>ACTIVE SOS has proven to be an excellent final product, successfully fulfilling the client's vision for a versatile and reliable emergency alert system. Schools use the app to update students and staff on security events, while corporations report workplace incidents. Rehab centers rely on it for efficient communication, and parents monitor their children's safety during emergencies.</p>
                <p className={`para ${styles.para}`}>The app’s user-friendly design and advanced functionality make it a valuable tool in various situations. Customizable alerts, real-time GPS tracking, and secure communication channels have transformed how users stay connected, providing peace of mind during critical moments.</p>
                <p className={`para ${styles.para} mb-lg-0`}>ACTIVE SOS has become a reliable solution for improving safety and communication, ensuring users can send customizable alerts quickly and efficiently in emergencies.</p>
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
                <Link href={'#'} onClick={()=> setModalShow(true)} className="btn btn-purple">Let’s Suitch</Link>
              </Col>
            </Row>
          </Container>
        </section>

      </section>
    </>
  );
}