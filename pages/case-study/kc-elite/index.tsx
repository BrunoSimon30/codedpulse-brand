import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function KCElite() {


  const { setModalShow } = useModalContext();



  useEffect(() => {
    document.body.className = 'kc-elite case-study';
  }, []);
  return (
    <>
      <Head>
        <title>KC Elite | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Image src="/images/case-study/kc-elite/banbg.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col lg="9" className="mx-auto">
                <div>
                  <Image src="/images/case-study/kc-elite/logo.svg" className={`logo ${styles.logo}`} alt="" />
                  <h2 className={`heading ${styles.heading}`}>How <span>KC Elite</span> Revolutionized Athlete Training</h2>
                  <p className={`para ${styles.para}`}> KC Elite transcends more than just being a training app. It asserts itself as an all-in-one mobile solution providing athletes with access to professional training plans, real-time progress tracking, and expert guidance. It is a profound platform and a complete resource from which athletes can enhance their basketball skills.</p>
                  <Link href="/case-studies-pdf/KC Elite.pdf" target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
                </div>
              </Col>
            </Row>
            <Image src="/images/case-study/kc-elite/group1171275169.png" className={`${styles.banimg}`} alt="" />
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_theme}`}>
          <Image src="/images/case-study/kc-elite/bgicon.png" className={`${styles.bgicon}`} alt="" />
          <Container>
            <Row>
              <Col lg="10" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}>Introduction</h2>
                <p className={`para mb-0 ${styles.para}`}>Training in every sport and aspect requires monitoring and tracking. Proper measurements bring in the desired results. This app fulfills the role of both, a trainer and a coach by providing personalized training and workout plans while also keeping an eye on the progress. KC Elite was built to address the needs and provide innovative solutions for athletes across the globe.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>The Struggle of Inconsistent <span>Training</span> & <span>Tracking</span></h2>
                <p className={`para ${styles.para}`}>Some apps were providing the training through videos and apps that were present to keep track. But none were able to do it both comprehensively and effectively. One more problem that we faced was to integrate the custom plan feature. As it was to be different for every user like its own social profile.</p>
                <p className={`para ${styles.para}`}>"We need an app that would allow athletes to keep improving outside of practice. Something that helps them stay motivated and gives coaches the tools to monitor progress." This was our client’s vision. </p>
                <p className={`para ${styles.para}`}>Additionally, our client needed a user-friendly app that could cater to different skill levels, scale with growth, and ensure seamless communication between coaches, athletes, and parents.</p>
              </Col>
              <Col lg="6" className="ms-auto align-self-center">
                <Image src="/images/case-study/kc-elite/group48098761.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_blue}`}>
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/kc-elite/group48098753.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>We Delivered the <span>Playbook</span></h2>
                <p className={`para ${styles.para}`}>We developed KC Elite to solve these pain points. The app gives its diverse users custom training plans based on an athlete’s skill level, instructional videos provided by the coach, and real-time progress tracking. The hybrid platform works smoothly across both iOS and Android devices and solidifies user training and monitoring.</p>
                <p className={`para ${styles.para}`}>"KC Elite went far and beyond our expectations. The app presents the opportunity for personalized training and allows us to track each player’s development. The customized workout plan gives us the required edge. It’s a game-changer."</p>
                <p className={`para ${styles.para} mb-0`}>The platform's focused on seamless functionality and connectivity to engage everyone required in the training regime. This way athletes remained motivated, parents satisfied and coaches proud.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>Features <br /> To Score <span>Big</span></h2>
                <p className={`para ${styles.para}`}>There is a web app for the admin to control the user functionalities and edit the content of About Us, FAQs, etc. Admin can store videos along with knowing the time spent by the user on them. Membership, user, and payment management through Stripe will be done through the web app</p>
                <p className={`para ${styles.para}`}>Parents can create their accounts in the mobile app by logging in and receiving OTP, selecting membership duration and making a payment transaction. They can also receive reports of which videos are completed and how much time was spent on them.</p>
                <p className={`para ${styles.para} mb-0`}>The child’s account is auto-created after the parents and they can see a dashboard to see new videos or rewatch from the history section. In-app instructor chat and ratings are also part of the app.</p>
              </Col>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/kc-elite/group48098778.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_blue}`}>
          <Image src="/images/case-study/kc-elite/bgsec.png" className={`${styles.bg}`} alt="" />
          <Container className="position-relative">
            <Row>
              <Col lg="6" className="me-auto align-self-center">
                <Image src="/images/case-study/kc-elite/group48098759.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>The Final Buzzer: <br /><span>A Winning Solution</span></h2>
                <p className={`para ${styles.para}`}>KC Elite superseded the expectations of our client’s vision. It not only trained athletes, informed parents, and helped the coaches but also pulled them closer to each other by creating a sense of community. The successful deployment of app across Android and iOS devices encouraged players to promptly begin training and the feedback has been positive.</p>
                <p className={`para ${styles.para}`}>If you're looking to create an engaging, scalable solution for training and development, KC Elite is proof that we can build an app tailored to your needs. Reach out to us today, and let’s take your project to the next level!</p>
                <p className={`para ${styles.para} mb-lg-0`}>Our client is satisfied as his passion and people’s satisfaction is taking the basketball community towards a better future. No bugs no crashes just digital athletic experience.</p>
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