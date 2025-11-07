import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useModalContext } from "@/context/ModalContext";

export default function AnEar() {
  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const { setModalShow } = useModalContext();

  
  useEffect(() => {
    document.body.className = 'anear case-study';
  }, []);




  return (
    <>
      <Head>
        <title>ANR EAR: A Platform for Rising Stars | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Container>
            <Row>
              <Col lg="5" className="align-self-center mb-lg-0 mb-4">
                <Image src="/images/case-study/anear/logo.png" className={styles.logo} alt="" />
                <h2 className={`${styles.heading}`}>ANR EAR: A Platform for Rising Stars</h2>
                <p className={`para ${styles.para}`}>This app is a transformative space where music artists and fans unite. It provides a platform where artists can find career opportunities, showcase their music, and engage directly with their fan base while fans immerse themselves in music connecting personally with emerging talent.</p>
                <Link download={true} target="_blank"  href="/case-studies-pdf/Anear.pdf" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
              </Col>
              <Col lg="7" className="align-self-center text-lg-end text-center">
                <Image src="/images/case-study/anear/banimg.png" className={styles.banimg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row className={` ${isMobile && 'flex-column-reverse'} `}>
              <Col lg="6" className="align-self-center pe-xxl-5">
                <Image src="/images/case-study/anear/group48098884.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`${styles.heading}`}>A New Era in Music Discovery</h2>
                <p className={`para ${styles.para}`}>Anr Ear gives the power back into the hands of the artist and fans. This app empowers musicians to find valuable opportunities and also allows them to measure their song’s performance. It is a platform where artists can build their careers in real time and connect directly with supporters who believe in their potential.</p>
                <p className={`para ${styles.para}`}>Moreover, fans can also connect with their favorite artist by following them exclusively. For the artists to grow in their careers, it is also imperative that the fans connect with them on a personal level to shower appreciation and provide constructive criticism. The idea was to prosper exclusivity.</p>
                <div className={styles.store}>
                  <Link href={'#'}>
                    <Image src="/images/case-study/anear/apple.png" className={``} alt="" />
                  </Link>
                  <Link href={'#'}>
                    <Image src="/images/case-study/anear/play.png" className={``} alt="" />
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
                <h2 className={`${styles.heading} ${styles.txtdark}`}>Idea Behind The Artistic Mastery </h2>
                <p className={`para ${styles.para}`}>Our client was a determined businessman envisioning the idea of helping up-and-new-coming artists by providing them opportunities right from the get-go. It had to bring in ample influential people to provide the chances for the artists to have them. Not just the simple provision of activities but the art tracking was also necessary.</p>
                <p className={`para ${styles.para}`}>Their goal was not only limited to creating an artist-centric platform only. Our client and development team went beyond that by introducing the involvement of fans to be together on the journey with their favorite artist. Performance tracking and fan feedback were needed to make the artist’s growth and success an achievable reality.</p>
              </Col>
              <Col lg="6" className="mx-auto align-self-center">
                <Image src="/images/case-study/anear/group48098887.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pt-0`}>
          <Container>
            <Row>
              <Col lg="5" className="mx-auto align-self-center">
                <Image src="/images/case-study/anear/group48098894.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="7" className="align-self-center me-auto ps-xxl-5">
                <h2 className={`${styles.heading} ${styles.txtdark}`}>Features to Target the Right Audience </h2>
                <p className={`para ${styles.para}`}>The app offers a variety of features designed to connect and empower both artists and fans. Finding career opportunities boosts the chances of growing and opening up new paths. Performance tracking of the songs helps capitalize on the captured opportunity. This monitoring allows for knowing and optimizing music's reach and impact.</p>
                <p className={`para ${styles.para}`}>Fans get an immersive and exclusive experience of connection and engagement directly with the artist. This unique blend of features makes the app a dynamic and interactive platform for music lovers and artists alike. Furthermore, the super admin feature is there to optimize both types of users i.e. artists and fans.</p>
              </Col>
            </Row>
          </Container>
        </section>


        <section className={`section-padding ${styles.bg_theme}`}>
          <Image src="/images/case-study/anear/bg5.png" className={styles.bg} alt="" />
          <Container>
            <Row>
              <Col lg="9">
                <h2 className={`${styles.heading}`}>The Challenge Was Building Meaningful Connections</h2>
              </Col>
            </Row>
            <Row>
              <Col lg="7">
                <p className={`para ${styles.para}`}>Breaking into the music industry could be challenging if you do not have access to opportunities. Even if you have, it is difficult to keep track of it. Also, after tracking, it is important to connect with fans to market that opportunity. These three layers were the challenge.</p>
                <p className={`para ${styles.para}`}>Additionally, fans often desire a more immersive experience with their favorite artists but face limitations. They want to support artists directly and see them rise, but few platforms offer genuine engagement between artists and fans.</p>
                <p className={`para ${styles.para}`}>No app was combining all the aspects. The challenge was to make the app artist-centric but give the fans equal value and be centralized.</p>
                <Image src="/images/case-study/anear/group48098897.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row className="gx-5">
              <Col lg="6" className="mx-auto align-self-center">
                <Image src="/images/case-study/anear/group48098902.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`${styles.heading} ${styles.txtdark}`}>Redefining Engagement for Artists and Fans </h2>
                <p className={`para ${styles.para}`}>The solution was simple. Provide a platform to discover new opportunities and make them count by optimizing the song’s performance by keeping track of it. It’s designed to support artists at every stage of their careers. The artists can be in the know-how of what works and the demands of their fans.</p>
                <p className={`para ${styles.para}`}>The app provides fans with a unique music experience by connecting them directly to the artists. Real-time performance insights and connection tools make fan interaction possible. Simultaneously, fans become part of the artist's growth story by being in the loop of all the updates and building a community through interaction.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pt-0`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`${styles.heading} ${styles.txtdark}`}>Join the Artist-Fan Connection </h2>
                <p className={`para ${styles.para}`}>This app has reinvented the artist and fan connection in the industry. It creates opportunities for artists and fans by catering to them and creating an inclusive and supportive music community. Artists gain the tools to take control of their career growth and fans become a part of the success stories.</p>
                <p className={`para ${styles.para}`}>The idea is to make the artist grow but also not neglect the integral part of that growth i.e. the fans. Coded Pulse comprehensively understood the idea behind solving the problems of artists and making a business out of it while enhancing the ROI by inventing an app that thrives on community interaction.</p>
              </Col>
              <Col lg="6" className="mx-auto align-self-center">
                <Image src="/images/case-study/anear/group48098903.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Image src="/images/case-study/anear/group48098909.png" className={styles.bg} alt="" />
          <Container>
            <Row>
              <Col xl="10" className="text-center mx-auto">
                <h2 className={`${styles.heading}`}>The Final Product</h2>
                <p className={`para ${styles.para}`}>The final product was our client’s vision came to life exactly how they wanted it to be. An app that provides opportunities for both the artists and fans by creating an interactive community.</p>
                <Image className="img-fluid" src="/images/case-study/anear/group48098907.png" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
   

        <section className={`section-padding pb-0 ${styles.ctasec}`}>
          <Container>
            <Row>
              <Col lg="7" className="">
                <p className="para mb-0">Have a Project</p>
                <h2 className={`${styles.heading}`}>We’re Ready</h2>
              </Col>
              <Col lg="5" className="text-lg-end align-self-center">
                <Link href={'#'} onClick={()=>setModalShow(true)} className="btn btn-purple">Get in Touch</Link>
              </Col>
            </Row>
          </Container>
        </section>


      </section>
    </>
  );
}