import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function Scribble() {

  const { setModalShow } = useModalContext();



  useEffect(() => {
    document.body.className = 'scribble case-study';
  }, []);
  return (
    <>
      <Head>
        <title>Scribble | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Image src="/images/case-study/scribble/banbg.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col lg="9" className="mx-auto">
                <div>
                  <Image src="/images/case-study/scribble/logo.svg" className={`logo ${styles.logo}`} alt="" />
                  <h2 className={`heading ${styles.heading}`}>How <span>Scribble</span> Changed Digital Storytelling for Creatives</h2>
                  <p className={`para ${styles.para}`}> A seamless solution for writers and artists to capture, share, and organize their ideas in one powerful app. Scribble is not just a story-telling platform without a word limit but also a community where like-minded creatives can contribute, recommend, and share each other’s work across multiple devices.</p>
                  <Link href="/case-studies-pdf/Scribble.pdf" target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
                </div>
              </Col>
            </Row>
            <Image src="/images/case-study/scribble/group1171275169.png" className={`${styles.banimg}`} alt="" />
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="9" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}><span>Scribble App</span> - The Book Lovers Community</h2>
                <p className={`para mb-0 ${styles.para}`}>Our client, a digital publishing startup dreamer, approached us with his vision where he and like-minded people can share their thoughts. The Scribble App was born to solve this problem that many creative writers and artists face—how to capture, organize, and share their ideas in an increasingly digital world. The goal was to design an app where users could write without limits and exchange ideas.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>The Problem? Word Count, Storage, and User Collaboration</h2>
                <p className={`para ${styles.para}`}>The apps that are already in the market impose restrictions on word count, storage, and user collaboration which restricts creativity. The client was aware of these limitations and sought an immediate solution. He needed an app that would allow users to write freely and share without barriers along with a community for feedback.</p>
                <p className={`para ${styles.para}`}>"We were stuck between apps that either limited creativity or lacked community support. We needed something that allowed users to freely express and exchange ideas without feeling constrained."</p>
                <p className={`para ${styles.para}`}>Additionally, we faced the challenge of developing a user-friendly user interface that would keep users long-term. One major hurdle was creating a platform that could scale with growing user content without compromising performance.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/scribble/group48098761.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_blue}`}>
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/scribble/group48098753.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}><span>Scribbling</span> <br /> the Solution</h2>
                <p className={`para ${styles.para}`}>We designed Scribble to solve these challenges. It serves as both a digital notebook and a creative community hub. Our team focused on the key areas that included providing unlimited writing storage and word count limit. Moreover, we created a hybrid app that could work seamlessly across iOS and Android.</p>
                <p className={`para ${styles.para}`}>"Scribble exceeded all of our expectations. The team's ability to create a platform that allowed limitless creativity while fostering a vibrant community was incredible. You truly understood our needs and built a solution we had imagined."</p>
                <p className={`para ${styles.para} mb-0`}>These were the words of our satisfied client because we also introduced the community engagement feature and assured him that it could seamlessly handle growing user base</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>Features That Are Making It Possible</h2>
                <p className={`para ${styles.para}`}>The features of the Scribble App were designed specifically to answer the queries of creative limitations in other platforms. With unlimited word count and data storage, writers are free to create without limitations. What’s more, the users can share their stories and receive feedback on them. The standout feedback feature makes it a collaborative platform for creativity.</p>
                <p className={`para ${styles.para}`}>The cross-device functionality and synchronization enable the users to access and share their work from any device, platform, and location. The user interface was developed after keeping in mind the ease of use of Android and Apple users.</p>
                <p className={`para ${styles.para} mb-0`}>Lastly, with the help of the customizable notebook feature the user can organize their ideas, drafts, and stories into different notebooks. This was another challenge that we overcame.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/scribble/group48098778.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_blue}`}>
          <Image src="/images/case-study/scribble/bgsec.png" className={`${styles.bg}`} alt="" />
          <Container className="position-relative">
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/scribble/group48098759.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}><span>Project Result:</span> <br /> Happy Client</h2>
                <p className={`para ${styles.para}`}>Our client was more than happy because not only did he receive the solution to his problem but was able to transcend that into a vision. His idea and our professionalism created a solution that was long awaited by many book lovers. This was shown in the appreciation readers showed by using the app.</p>
                <p className={`para ${styles.para}`}>The app’s deployment was smooth as we tested it with a number of people across both Android and Apple. It operated fine and easy and gave us more ideas on how to better and enhance it in the future.</p>
                <p className={`para ${styles.para} mb-lg-0`}>If you’re looking to enhance collaboration, streamline content creation, or build a community around your product, the solutions we delivered for Scribble can be tailored to meet your unique needs.</p>
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
                <Link href={'#'} onClick={() => setModalShow(true)} className="btn btn-purple">Let’s Suitch</Link>
              </Col>
            </Row>
          </Container>
        </section>


      </section>
    </>
  );
}