import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function OutdoorTraders() {

  const { setModalShow } = useModalContext();


  useEffect(() => {
    document.body.className = 'outdoor-traders case-study';
  }, []);
  return (
    <>
      <Head>
        <title>Outdoor Traders | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Image src="/images/case-study/outdoor-traders/banbg.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col xl="7" lg="10" className="mx-auto">
                <div>
                  <Image src="/images/case-study/outdoor-traders/logo.svg" className={`logo ${styles.logo}`} alt="" />
                  <h2 className={`heading ${styles.heading}`}>Outdoor Traders for Hunting and Fishing Enthusiasts</h2>
                  <p className={`para ${styles.para}`}> Outdoor Traders is the new way of finding hotspots for fishing, favorable spots, trading, gear, and finding a community of like-minded anglers. This app has changed how hunting and fishing enthusiasts explore their passions. In search of a new hunting spot or fishing event? Outdoor Traders is your ultimate guide for every fishing question.</p>
                  <Link target="_blank" href="/case-studies-pdf/Outdoor Traders.pdf" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
                </div>
              </Col>
            </Row>
            <Image src="/images/case-study/outdoor-traders/group1171275169.png" className={`${styles.banimg}`} alt="" />
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="9" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}>Outdoor Trader: <br /> Your Outdoor Companion</h2>
                <p className={`para mb-0 ${styles.para}`}>Outdoor Trader is the solution every outdoor enthusiast has been waiting for. The app has all the necessary tools required for fishing. From an interactive event calendar to real-time notifications; it has also incorporated the community feature through which you can have knowledge and insights that are worth in gold in the fishing sport. Outdoor Trader simplifies planning your hunting or fishing trips, allowing you to focus on what you love most: the outdoors</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>Finding the Spot <br /> Was the Problem</h2>
                <p className={`para mb-0 ${styles.para}`}>For fishing enthusiasts, missing out on hunting or fishing opportunities is frustrating. The problem was to create a streamlined platform that could solve this problem. Knowledge about these spots is the answer but accumulating this knowledge by the people at a center was another hurdle in our team’s way.</p>
                <p className={`para mb-0 ${styles.para}`}>Moreover, the lack of a community-driven platform means gear recommendations and event trading aren’t easily accessible. Outdoor enthusiasts needed a better way to connect, stay informed, and manage their experiences in one place.</p>
                <p className={`para mb-0 ${styles.para}`}>Another common problem was no dedicated space for enthusiasts to trade or swap their gear. Staying up to date on latest community news was a challenge too.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/outdoor-traders/group48098761.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_blue}`}>
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/outdoor-traders/group48098753.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>Redefining the <br /> Outdoor Experience</h2>
                <p className={`para ${styles.para}`}>Outdoor Trader revolutionizes how you prepare for and enjoy your outdoor adventures. Its user-friendly swiping interface allows you to find trending events with ease. The community feature enables the user to find not only hunting and fishing events but also information regarding equipment and trading of all sorts in the fishing world.</p>
                <p className={`para ${styles.para}`}>The app even integrates an event calendar so you can track all upcoming activities without requiring multiple sources. The app’s prompt notification system informs about hunting and fishing events, gear trades, and community updates in real-time.</p>
                <p className={`para ${styles.para} mb-0`}>The app gives a sense of community by connecting like-minded fish hunters. Sharing of gear and hunting tips is the standout solution this app provides.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>The Features That <br /> Keep You Ahead</h2>
                <p className={`para ${styles.para}`}>Outdoor Trader offers several features that set it apart from other platforms. Its friendly user interface makes discovering hidden gems and finding top hunting or fishing spots easier than ever. Users can engage with others through the community connection feature to share their love for the outdoors and exchange valuable tips and experiences.</p>
                <p className={`para ${styles.para}`}>The event calendar confirms users stay notified about the latest outdoor events. The app’s standout feature is the unlimited swipes. This free month-long feature allows users to check out trending events and opportunities.</p>
                <p className={`para ${styles.para} mb-0`}>Additionally, real-time notifications about exclusive deals, upcoming events, and important community updates are another exclusive feature that gives you more than normal information.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/outdoor-traders/group48098778.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_blue}`}>
          <Image src="/images/case-study/outdoor-traders/bgsec.png" className={`${styles.bg}`} alt="" />
          <Container className="position-relative">
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/outdoor-traders/group48098759.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>A New Era of <br /> Outdoor Adventures</h2>
                <p className={`para ${styles.para}`}>Outdoor Trader enhanced the outdoor experience for hunters by making it easier to stay organized and connected. The app features are simple for user-friendliness but efficient enough to find new adventures, stay informed, and swap tips and gear easily. The user experience was kept in mind while developing the app and it has not disappointed.</p>
                <p className={`para ${styles.para}`}>Outdoor Trader isn’t just for individuals. It’s a comprehensive tool that connects entire communities. It is more than just an app; it’s the go-to solution for all outdoor adventure needs allowing them to share their experiences and gear.</p>
                <p className={`para ${styles.para} mb-lg-0`}>If you’re an outdoor enthusiast or someone looking to build a platform that can give a feel of community then you are just a click away from contacting us. Do it now!</p>
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