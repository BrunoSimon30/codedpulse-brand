import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function Syncronicity() {

  const { setModalShow } = useModalContext();
  
  useEffect(() => {
    document.body.className = 'syncronicity case-study';
  }, []);
  return (
    <>
      <Head>
        <title>Syncronicity | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Container>
            <Image src="/images/case-study/syncronicity/ban2.png" className={styles.ban2} alt="" />
            <Row>
              <Col lg="6" className="mx-auto text-center">
                <Image src="/images/case-study/syncronicity/logo.svg" className={styles.logo} alt="" />
                <p className={`para ${styles.para}`}>SYNCronicty allows individuals to forge genuine connections and meaningful relationships. This innovative mobile platform makes matching people with similar interests and mutual values a breeze. The dating app has won the hearts of users, who love its smooth and effortless experience.</p>
                <Link href="/case-studies-pdf/Synchronicity.pdf" target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
              </Col>
            </Row>
            <Image src="/images/case-study/syncronicity/ban1.png" className={styles.ban1} alt="" />
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="5" className="align-self-center">
                <Image src="/images/case-study/syncronicity/group11712751722.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="7" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>The Concept Behind <span>SYNCronicity</span></h2>
                <p className={`para ${styles.para}`}>The client's objective was to bring a mobile app, SYNCronicty, to market to transform dating and social connections. The client wanted a revolutionary digital platform where users can find people with shared interests, core values, and life goals and engage in meaningful relationships.</p>
                <p className={`para ${styles.para}`}>The app brings people together. Its sophisticated algorithm matches individuals based on their unique preferences, leading to a personalized experience in the search for true love.</p>
                <div className={styles.store}>
                  <Link href={'#'}>
                    <Image src="/images/case-study/syncronicity/apple.png" className={``} alt="" />
                  </Link>
                  <Link href={'#'}>
                    <Image src="/images/case-study/syncronicity/play.png" className={``} alt="" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pt-0`}>
          <Container>
            <Row>
              <Col lg="5" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Challenges & <span>Solutions</span> </h2>
                <p className={`para ${styles.para}`}>Turning the concept behind SYNCronicty into a functional app involved several challenges, including building a highly optimized matching algorithm focused on shared values and common interests. Further significant hurdles were posed by the need for user privacy and creating an interface that caters to diverse demographics, demanding a perfect blend of usability and security.</p>
                <p className={`para ${styles.para}`}>Suitch’s dedicated team expertly addressed these challenges. We conducted comprehensive market research to craft a value-driven matching system and designed an intuitive interface that drives authentic and impactful interactions. We also implemented end-to-end encryption to protect user data and foster trust.</p>
              </Col>
              <Col lg="7" className="mx-auto align-self-center">
                <Image src="/images/case-study/syncronicity/psd-31.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="6" className="me-auto align-self-center">
                <Image src="/images/case-study/syncronicity/group48098853.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>SYNCronicty <span>Features</span></h2>
                <p className={`para ${styles.para}`}>SYNCronicty fosters genuine connections by matching users based on mutual interests and values. This unique concept is now a reality that helps users connect through impactful conversations and build meaningful relationships, going beyond superficial interactions.</p>
                <p className={`para ${styles.para}`}>Prioritizing user privacy and security, the app is equipped with advanced end-to-end encryption to protect personal information. Users can confidently use the platform, knowing their data is safe and their privacy is respected while navigating the app.</p>
                <p className={`para ${styles.para}`}>SYNCronicty offers an easy-to-use interface that makes navigating and interacting with others a breeze. Users can create a personalized experience reflecting their preferences with customizable profiles and interactive elements.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading} ${styles.minusright}`}>How Successful Delivery Is <span>Achieved?</span> </h2>
                <p className={`para ${styles.para}`}>A structured and iterative approach was used to develop SYNCronicty, critical to its successful delivery. Our expert agile practices allowed for rapid prototyping and user testing, refining its features and enhancing the user experience based on real-life user feedback. We ensured the app became reliable and efficiently accommodated a growing user community. We conducted extensive testing to validate key functionalities, such as the matching algorithm, messaging capabilities, and profile management.  </p>
                <p className={`para ${styles.para}`}>The integration of advanced analytics tools to monitor user engagement and satisfaction enables the app admin to make data-driven decisions for continuous enhancements. This iterative approach helped us deliver a well-crafted final product.</p>
              </Col>
              <Col lg="6" className="mx-auto align-self-center ps-lg-5">
                <Image src="/images/case-study/syncronicity/group480988621.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pt-0`}>
          <Container>
            <Row>
              <Col xl="8" className="text-center mx-auto">
                <h2 className={`heading ${styles.heading}`}>What were <span>the results?</span></h2>
                <p className={`para ${styles.para}`}>The result was simply amazing, as SYNCronicty has emerged as an exceptional mobile app, successfully satisfying the client's vision of creating a platform for making and engaging in authentic relationships. Users have reported markedly increased satisfaction compared to old-fashioned dating apps, citing the rising level of engagement made through SYNCronicty.</p>
              </Col>
            </Row>
            <div className={styles.cenimg}>
              <Row>
                <Col lg="9" className="mx-auto text-center">
                  <Image src="/images/case-study/syncronicity/group480988681.png" className={`img-fluid w-100`} alt="" />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col xl="10" className="text-center mx-auto">
                <h2 className={`heading ${styles.heading}`}><span>SYNCronicty’s</span> <br /> Landmark Achievements</h2>
                <Row className={styles.box_row}>
                  <Col lg="4" className="mb-lg-0 mb-3">
                    <div className={styles.box}>
                      <h2>150,000</h2>
                      <h4>Downloads</h4>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-lg-0 mb-3">
                    <div className={styles.box}>
                      <h2>50,000+</h2>
                      <h4>Active Users</h4>
                    </div>
                  </Col>
                  <Col lg="4" className="mb-lg-0 mb-3">
                    <div className={styles.box}>
                      <h2>4.9/5</h2>
                      <h4>Average User Rating</h4>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/syncronicity/group11712751714.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto">
                <h2 className={`heading ${styles.heading}`}>SYNCronicty- Showcasing Suitch’s <span>Expertise</span></h2>
                <p className={`para ${styles.para}`}>SYNCronicty’s intuitive design and innovative matching system empower users to form and get involved in genuine relationships based on mutual values and interests. The secure and effective communication channels ensure mental tranquility, creating an environment where users feel safe to explore compatible individuals.</p>
                <p className={`para ${styles.para}`}>SYNCronicty has become a reliable solution in the digital dating landscape, revolutionizing how individuals meet and connect. This platform has prioritized authenticity and meaningful interactions, redefining the path to sincere bonds and helping users navigate their journey with certainty and grace.</p>
                <p className={`para ${styles.para}`}>SYNCronicty stands as a testament to Suitch’s expertise in delivering innovative digital solutions.</p>
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
                <Link href={'#'} onClick={()=>setModalShow(true)} className="btn btn-purple">Let’s Suitch</Link>
              </Col> 
            </Row>
          </Container>
        </section>


      </section>
    </>
  );
}