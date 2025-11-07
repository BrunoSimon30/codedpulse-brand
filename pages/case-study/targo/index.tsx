import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function Targo() {

  
  const { setModalShow } = useModalContext();





  useEffect(() => {
    document.body.className = 'targo case-study';
  }, []);
  return (
    <>
      <Head>
        <title>Targo | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Container>
            <Row className="gx-5">
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
              <div className="text-center">
                <Image src="/images/case-study/targo/logo.svg" className={`${styles.logo} mx-auto`} alt="" />
              </div>
                <h2 className={`heading ${styles.heading} text-center`}>Revolutionize Your Rental Experience with <span>Targo</span></h2>
                <p className={`para ${styles.para} text-center`}>Discover a new way to rent with Targo, where finding, renting, and returning products is seamless and stress-free. Targo connects its users to quality vendors through its user-friendly and user-first features that smooth the process. This is a smart rental solution.</p>
                <div className="text-center">
                  <Link href="/case-studies-pdf/Rental.pdf"  target="_blank" className={`btn ${styles.btn_main} mx-auto`}>Download Case Study</Link>
                </div>

              </Col>
              <Col lg="6" className="align-self-center ">
                <Image src="/images/case-study/targo/banimg.png" className={styles.banimg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_dark}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <Image src="/images/case-study/targo/group48098839.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ps-xxl-5 position-relative">
                <Image src="/images/case-study/targo/group48098841.png" className={styles.elem1} alt="" />
                <h2 className={`heading ${styles.heading}`}>Introduction <br /> <span>Targo</span></h2>
                <p className={`para ${styles.para}`}>Targo reintroduces product rentals by connecting users with trusted vendors in an easy and user-friendly platform. Targo makes it super easy to browse, rent, return anything from equipment and vehicles to everyday items. It is rentals made easy!</p>
                <p className={`para ${styles.para}`}>Targo weaves a memorable experience for both users and vendors. It does so with the help of introducing features like real-time chat, comprehensive product filters, and secure transactions. It’s a smarter, safer, and more efficient way to access rentals tailored to your needs.</p>
                <div className={styles.store}>
                  <Link href={'#'}>
                    <Image src="/images/case-study/targo/apple.png" className={``} alt="" />
                  </Link>
                  <Link href={'#'}>
                    <Image src="/images/case-study/targo/play.png" className={``} alt="" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_dark}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>The <span>Vision</span> <br /> Behind Targo</h2>
                <p className={`para ${styles.para}`}>Our client approached us with a vision: to simplify and modernize the rental industry. They identified a gap where potential renters faced limited options and inconvenient processes. Also, a secure and trustworthy platform was needed to connect with reliable vendors. </p>
                <p className={`para ${styles.para}`}>The goal was to create an app to address these issues by offering a streamlined, user-centric rental experience. Our client aimed to facilitate users with a tool that provided a wide range of products. </p>
                <p className={`para ${styles.para}`}>Targo was the name we both settled on that was going to be the identity of this idea.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/targo/group48098842.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/targo/group48098881.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Hitting The <br /> Right <span>People</span></h2>
                <p className={`para ${styles.para}`}>Targo’s target audience is diverse but well-directed. It caters to individual users needing occasional rentals to small businesses and contractors seeking easy access to specialized equipment. Targo captures their attention by providing a streamlined and trustworthy platform and providing value to people who need transaction convenience, flexibility, and security all in one place.</p>
                <p className={`para ${styles.para}`}>It is ideal for people looking to rent items without the hassle of traditional methods. So, Targo targets them through providing a user-friendly interface, extensive product selection, and a reliable vendor network.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`position-relative`}>
          <Image src="/images/case-study/targo/ellipse95.png" className={styles.elem2} alt="" />
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto">
                <h2 className={`heading ${styles.heading}`}>Addressing <br /> the <span>Hurdles</span></h2>
                <p className={`para ${styles.para}`}>Our client faced numerous challenges in the rental market. These included fragmented communication with renters and inconsistent payment methods. A need for secure and simplified rental management was also a challenge. One more challenge was getting real-time updates on rental activities.</p>
                <p className={`para ${styles.para}`}>From a development perspective, creating an app with intuitive and safe features while ensuring ease of use was a complex task. The balance required for security with high performance while integrating a trustworthy payment system and chat support was one more hurdle.</p>
              </Col>
              <Col lg="4" className="ms-auto align-self-center">
                <Image src="/images/case-study/targo/group48098849.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <h2 className={`heading text-center ${styles.heading}`}>Project <span>Timeline</span></h2>
            <Row className={styles.timeline}>
              <Col lg="3" className="mb-3 mb-sm-0">
                <div className={styles.box}>
                  <h4 className={styles.title}>Research</h4>
                  <p className="para">We began by analyzing market needs and user behavior to shape Targo's foundational features and ensure market relevance.</p>
                </div>
              </Col>
              <Col lg="3" className="mb-3 mb-sm-0">
                <div className={styles.box}>
                  <h4 className={styles.title}>UX Design</h4>
                  <p className="para">Focused on creating an intuitive user journey, making it easy for users and vendors to navigate and complete transactions.</p>
                </div>
              </Col>
              <Col lg="3" className="mb-3 mb-sm-0">
                <div className={styles.box}>
                  <h4 className={styles.title}>UI Design</h4>
                  <p className="para">Crafted a visually appealing interface with clear layouts and interactive elements to enhance the overall user experience</p>
                </div>
              </Col>
              <Col lg="3" className="mb-3 mb-sm-0">
                <div className={styles.box}>
                  <h4 className={styles.title}>Development</h4>
                  <p className="para">Built a robust backend and frontend, integrating essential features like secure payments, chat functionality, and real-time notifications</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_dark}`}>
          <Image src="/images/case-study/targo/group48098861.png" className={styles.elem2} alt="" />
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>Transforming <br /> <span>Vision</span> into Reality</h2>
                <p className={`para ${styles.para}`}>To address the challenges, Trago was built to provide a seamless rental platform that facilitated secure and efficient interactions between users and vendors. Targo eased the processes with real-time communication and secure payments along with the provision of a wide range of products.</p>
                <p className={`para ${styles.para}`}>Our solution included a user-friendly interface and stable backend to support high-traffic demands and ensure smooth operations. The app offered special features designed to simplify rentals.</p>
                <p className={`para ${styles.para}`}>With Targo, our client can now provide a reliable, hassle-free rental experience that meets modern user expectations and sets new standards in the industry</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/targo/group48098862.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_dark}`}>
          <Image src="/images/case-study/targo/ellipse96.png" className={styles.elem3} alt="" />
          <Container>
            <Row>
              <Col lg="5" className="align-self-center">
                <Image src="/images/case-study/targo/group48098868.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center ms-auto ">
                <h2 className={`heading ${styles.heading}`}>Driving <br /> Real <span>Impact</span></h2>
                <p className={`para ${styles.para}`}>The Targo app launch delivered exceptional results. It showed boosted client visibility and engagement. Users now enjoy a streamlined experience of finding and renting products effortlessly. This shift has improved user interaction, aligning with the client’s vision for providing a unified rental platform.</p>
                <p className={`para ${styles.para}`}>The app has redefined the rental experiences for vendors and users through its incredible feature introduction. The feedback has been enormous about how Targo achieved customer satisfaction by easing the rental process, which has solidified Targo’s reputation as a trusted, go-to marketplace for convenient rentals.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pt-0 text-center ${styles.bg_dark}`}>
          <Container>
            <Row>
              <Col lg="10" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}>Your <span>Vision</span>, Our <span>Innovation</span></h2>
                <Row>
                  <Col lg="10" className="mx-auto text-center">
                    <p className={`para ${styles.para} ${styles.visionText}`}>Partner with us to transform your vision into an achievable and tangible reality. Just as we did with Targo, we’ll bring your ideas to life by delivering effective solutions that meet modern problems and elevate user experiences.</p>
                    <Image src="/images/case-study/targo/group480988741.png" className={`img-fluid w-100`} alt="" />
                  </Col>
                </Row>
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
                <Link href={'#'} onClick={()=>setModalShow(true)} className="btn btn-purple">Get In Touch</Link>
              </Col>
            </Row>
          </Container>
        </section>


      </section>
    </>
  );
}