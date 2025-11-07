import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.scss";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useModalContext } from "@/context/ModalContext";

export default function PartyCade() {

  const { setModalShow } = useModalContext();



  useEffect(() => {
    document.body.className = "party-cade case-study";
  }, []);

  const isLargeDevices  = useMediaQuery({ query:"(min-width:768px)" })


  return (
    <>
      <Head>
        <title>Party Cade | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>
      <section className={`hero-section ${styles.hero_section} position-relative`}>
        <Container>
          <Row>
            <Col lg="10" className="align-self-center text-center mx-auto">
              <Image src="/images/case-study/party-cade/logo.png" className={styles.logo} alt="" />
              <h2 className={`${styles.heading}`}>PartyCade: The Gaming Hub for Family Celebrations</h2>
              <p className={`para ${styles.para}`}>
                PartyCade brings people together through games tailored for every
                special event. It introduces a fun way to connect with family and
                friends, whatever the occasion may be, from Baby Showers to
                Ladies&apos; Night. PartyCade enables users to join games remotely and
                compete in exciting challenges. Everyone can be a part of
                something unforgettable.
              </p>
              <Link href="/case-studies-pdf/Party Cade.pdf" target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
            </Col>
          </Row>
          <Image src="/images/case-study/party-cade/mobiles.png" className={`w-100 ${styles.heroImage}`} alt="" />
        </Container>
      </section>

      <main className={`${styles.bannerBg}`}>
        <section className={`section-padding ${styles.topspace}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <Image
                  src="/images/case-study/party-cade/gaming-made-personal-and-accessible.png"
                  className={`img-fluid w-100 mb-lg-0 mb-3`}
                  alt=""
                />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2
                  className={`${styles.heading} ${styles["text-shadow"]}`}
                >
                  Gaming Made Personal and Accessible
                </h2>
                <p className={`para ${styles.para}`}>
                  PartyCade is developed with one simple goal in mind which is
                  to create memorable experiences through customizable
                  event-specific games. It enables hosts to personalize each
                  game to match their event’s theme and ambiance. Participants
                  can join through a shared event code from anywhere. This app
                  is more than a gaming platform. It is a customized
                  game-sharing app that creates fun and memories by providing
                  easy access to diverse games and experiences.
                </p>
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <img src={"/images/case-study/party-cade/app-store.png"} className={`img-fluid ${styles.maxImageWidth}`} />
                  <img
                    src={"/images/case-study/party-cade/google-play-icon.png"} className={`img-fluid ${styles.maxImageWidth}`}
                  />
                </div>
                <div className={styles.store}>
                  <Link href={"#"}>
                    <Image
                      src="/images/case-study/bello/apple.png"
                      className={``}
                      alt=""
                    />
                  </Link>
                  <Link href={"#"}>
                    <Image
                      src="/images/case-study/bello/play.png"
                      className={``}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={``}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2
                  className={`${styles.heading} ${styles["text-shadow"]}`}
                >
                  Challenge? Tailoring Experience To Each Individual
                </h2>
                <p className={`para ${styles.para}`}>
                  Organizing games for a special event often requires everyone
                  to be physically present and also the people for whom it is
                  organized for. If someone was physically not present then
                  adjusting them virtually and with other participants was
                  challenging. There was a need for a one-stop platform that
                  provided a diverse gaming range that could be personalized.
                </p>
                <p className={`para ${styles.para}`}>
                  Another challenge was creating an intuitive app that supports
                  various events while maintaining accessibility. Many
                  event-based apps lack these features of personalizing games,
                  sharing achievements, or tracking participants’ scores with a
                  game timer.
                </p>
                <p className={`para ${styles.para}`}>
                  To make it a success keeping track of the win records and
                  achievements of the participants to make the experience more
                  engaging and competitive.
                </p>
              </Col>
              <Col lg="6" className="mx-auto align-self-center">
                <Image
                  src="/images/case-study/party-cade/challenge-tailoring-experience-to-each-individual.png"
                  className={` ${isLargeDevices && 'img-fluid'}  w-100 mt-lg-0 mt-3`}
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding `}>
          <Container>
            <Row>
              <Col lg="6" className="me-auto align-self-center">
                <Image
                  src="/images/case-study/party-cade/partycade-was-born-as-a-solution.png"
                  className={`${isLargeDevices && 'img-fluid'} w-100 mb-lg-0 mb-3`}
                  alt=""
                />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2
                  className={`${styles.heading} ${styles["party-cade"]} ${styles['text-shadow']} `}
                >
                  PartyCade Was Born as a Solution
                </h2>
                <p className={`para ${styles.para}`}>
                  PartyCade is an all-in-one solution to event gaming. It
                  removed location and physical presence barriers to join a
                  particular event through an event share code that the host can
                  provide to their friends and family. With its amazing features
                  it keeps the games engaging and experience fun and memorable.
                </p>
                <p className={`para ${styles.para}`}>
                  Additionally, users can edit and personalize games to reflect
                  the theme, adding a customized touch to each event. This was
                  needed to take the blandness out of the common games. The app
                  also offers a diverse game selection suitable for almost every
                  event.
                </p>
                <p className={`para ${styles.para}`}>
                  Game time and winning tracking are introduced in this app to
                  keep records and make the experience more exciting and save
                  the possibilities of fun banter.
                </p>
              </Col>
            </Row>
          </Container>
        </section>


        <section className={`section-padding  ${styles.bg_theme} ${styles.featureGlanceSection}`}>
          <div className={``}>
            <Container>
              <Row>
                <Col xl="12" className="text-center mx-auto">
                  <h2 className={`${styles.heading} ${styles['text-shadow']}`}>
                    The Features That Make PartyCade Unforgettable
                  </h2>
                  <p className={`para ${styles.para}`}>
                    PartyCade features are designed to uplift the gaming
                    experience as a whole. It provides easy login and event code
                    sharing to make participation a breeze. The host can
                    customize themes to bring a personal touch to the gaming
                    environment. Plus, the game personalization feature can
                    modify each game to make them theme and event-relevant.
                  </p>
                  <p className={`para ${styles.para}`}>
                    A wide game selection makes customization and involvement
                    possible for everyone. The diversity caters to age and
                    interest. Game timers are there to keep the participants on
                    their toes and the game running swiftly.
                  </p>
                  <p className={`para ${styles.para}`}>
                    The winnings tracker lets everyone celebrate their victories
                    and remember the occasion and also triggers the competitive
                    spirit of the participants.
                  </p>
                  <Row className={`py-5 ${styles["challenges-images"]}`}>
                    <Col md={6}>
                      <div className="card bg-transparent">
                        <img
                          src="/images/case-study/party-cade/project-challenges.png"
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className={`card-title ${styles.heading}`}
                          >
                            Project <br /> Challange
                          </h5>
                          <p className="para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas massa lectus, porttitor quis placerat
                            a, ultricies eget purus.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="card bg-transparent">
                        <img
                          src="/images/case-study/party-cade/solutions-delivered.png"
                          className="card-img-top img-fluid"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5
                            className={`card-title ${styles.heading} ${styles.maxHeading}`}
                          >
                            Solution Delivered
                          </h5>
                          <p className="para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas massa lectus, porttitor quis placerat
                            a, ultricies eget purus.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <img
                    src="/images/case-study/party-cade/redefining-remote-event-experiences.png"
                    className="img-fluid"
                    alt=""
                  />
                </Col>
                <Col xl={"12"}>
                  <h5 className={`${styles.heading}`}>
                    Redefining Remote Event Experiences
                  </h5>
                  <p className={` para  ${styles.para} text-center`}>
                    PartyCade transformed the virtual participant experience by
                    providing a fun, interactive platform for everyone to join
                    the thematic customized event from anywhere. It made it more
                    exciting through easy login and participation via event
                    code. The platform’s user-friendly features enhance social
                    gatherings, giving hosts and participants alike a memorable
                    experience.
                  </p>
                  <p className={` para  ${styles.para} text-center`}>
                    For anyone looking to add excitement to their next event,
                    PartyCade is a must-have. You can make memories with friends
                    and family from the comfort of your own home or across the
                    world.
                  </p>
                  <p className={` para  ${styles.para} text-center`}>
                    This app solved a major social problem related to event
                    boredom and created a solution that went beyond making them
                    simply a part, but enhancing the experience on every level.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xl="10" className="text-center mx-auto">
                  <Image
                    src="/images/case-study/bello/freeresponsive.png"
                    className={`img-fluid w-100 mb-lg-0 mb-3`}
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </main>


      <section className={`section-padding pb-0 ${styles.ctasec}`}>
        <Container>
          <Row>
            <Col lg="7" className="">
              <p className="para mb-0">Have a Project</p>
              <h2 className={`${styles.heading}`}>We’re Ready</h2>
            </Col>
            <Col lg="5" className="text-lg-end align-self-center">
              <Link href={"#"} onClick={()=>setModalShow(true)} className="btn btn-purple">
                Let’s Suitch
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
