import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function Rostam36() {


  const { setModalShow } = useModalContext();



  useEffect(() => {
    document.body.className = 'rostam36 case-study';
  }, []);
  return (
    <>
      <Head>
        <title>Rostam36 | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section className="rostam-main">
        <section className={`hero-section ${styles.hero_section}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center text-lg-end text-center">
                <Image src="/images/case-study/rostam36/banner-img-2.png" className={styles.banimg} alt="" />
              </Col>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <Image src="/images/case-study/rostam36/logo.png" className={styles.logo} alt="" />
                <h2 className={`heading ${styles.heading} heading-dark`}>Rostam36</h2>
                <p className={`para ${styles.para}`}>Kalphabet36 is an innovative web application that breaks communication barriers by translating messages among English, Persian, and Finglish. Using an algorithm based on numerical sequences and algebraic formulas, it simplifies language translation, making understanding easier and more accessible.</p>
                <Link href="/case-studies-pdf/Rostam.pdf" target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`${styles.abt_sec}`}>
          <Container>
            <div className={styles.abt_box}>
              <Row>
                <Col xl="8" className="text-center mx-auto">
                  <h2 className={`heading ${styles.heading}`}>Client <span>Brief</span></h2>
                  <p className={`para ${styles.para}`}>The client approached us with a unique web app concept for translating between English, Persian, and Finglish. They envisioned using numbers and formulas to convert words into meaningful messages that anyone could grasp, regardless of language skills.</p>
                </Col>
              </Row>
              <Row className={styles.box_row}>
                <Col lg="4" className="mb-lg-0 mb-3">
                  <div className={styles.box}>
                    <h4>Multilingual Translation</h4>
                  </div>
                </Col>
                <Col lg="4" className="mb-lg-0 mb-3">
                  <div className={styles.box}>
                    <h4>Numerical and Algebraic Coding</h4>
                  </div>
                </Col>
                <Col lg="4" className="mb-lg-0 mb-3">
                  <div className={styles.box}>
                    <h4>User-Friendly Interface</h4>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className={`section-padding pb-0`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>About Rostam36</h2>
                <p className={`para ${styles.para}`}>Kalphabet36 allows users to communicate effectively across language boundaries. It translates between English, Persian, and Finglish using numerical sequences and algebraic formulas, making written messages clear and easy to comprehend. This opens new opportunities for communication, accessible to all users, regardless of their language abilities.</p>
                <p className={`para ${styles.para}`}>coded pulse developed an intuitive interface and an efficient translation mechanism, creating a positive user experience that aligns with the client’s vision for improved cross-language communication.</p>

              </Col>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/rostam36/phone-tab.png" className={`mt-lg-0 mt-3 ${styles.minusleft}`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>

              <Col lg="6" className="mx-auto align-self-center">
                <Image src="/images/case-study/rostam36/iphone-img.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Development <br /> Hurdles</h2>
                <p className={`para ${styles.para}`}>Creating an accurate translation algorithm posed a challenge. Translating among three languages involved addressing each language's grammar and syntax, complicating the process and requiring thorough testing.</p>
                <p className={`para ${styles.para}`}>Designing a user-friendly interface was also difficult, as coded pulse aimed to serve both seasoned linguists and beginners while maintaining strong functionality.</p>
                <p className={`para ${styles.para}`}>Additionally, integrating numerical sequences and algebraic formulas into translations added complexity, necessitating careful coding to ensure efficient performance.</p>

              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Solutions Provided</h2>
                <p className={`para ${styles.para}`}>coded pulse effectively tackled the challenges in developing Kalphabet36. We enhanced the translation algorithm through linguistic analysis and machine learning techniques to improve accuracy across the three languages. User testing and feedback helped us create an intuitive interface that met the needs of both experienced linguists and novices.</p>
                <p className={`para ${styles.para}`}>We integrated numerical sequences and algebraic formulas, optimizing encoding and decoding processes for greater efficiency.</p>
              </Col>
              <Col lg="6" className="me-auto align-self-center">
                <Image src="/images/case-study/rostam36/screen.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>

            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>

              <Col lg="6" className="mx-auto align-self-center">
                <Image src="/images/case-study/rostam36/tab-iphone.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Key Features <br /> of Kalphabet36</h2>
                <p className={`para ${styles.para}`}>Kalphabet36 includes key features that improve communication across language barriers. It simplifies translating messages between English, Persian, and Finglish, allowing users to understand content clearly. Users can express their ideas creatively with various text types, including poems and slogans.</p>
                <p className={`para ${styles.para}`}>The intuitive interface ensures accessibility for everyone, while the translation algorithm guarantees that messages are clear and easy to understand.</p>

              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col xl="8" className="text-center mx-auto">
                <h2 className={`heading ${styles.heading}`}>Project Outcomes</h2>
                <p className={`para ${styles.para}`}>Kalphabet36 showcases coded pulse's success in project delivery, boosting user engagement and satisfaction. The platform enhances community interaction by bridging language gaps, attracting a diverse user base and promoting clear communication.</p>
              </Col>
            </Row>
            <Row>
              <Col xl="10" className="text-center mx-auto">
                <Image src="/images/case-study/rostam36/double-screen.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
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


      </section >
    </>
  );
}