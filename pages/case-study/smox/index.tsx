import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function Smox() {


  const { setModalShow } = useModalContext();


  useEffect(() => {
    document.body.className = 'smox case-study';


  }, []);



 
  const fetchSmoxCaseStudy = () => {

    const content = document.documentElement.outerHTML;
    console.log(content);
    return content
  };
  




  return (
    <>
      <Head>
        <title>Smox | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section id="pdf-cont">
        <section className={`hero-section ${styles.hero_section}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center mb-lg-0 mb-4">
                <h2 className={`heading ${styles.heading}`}>Smox</h2>
                <p className={`para ${styles.para}`}>Smox is a mobile application designed to make salon management a breeze, facilitating the service booking process. Now available on Google Play and the Apple App Store, Smox offers an innovative solution to increase customer engagement and drive business growth.</p>
                <Link href="/case-studies-pdf/Smox.pdf"  target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
              </Col>
              <Col lg="5" className="text-lg-end text-center ms-auto">
                <Image src="/images/case-study/smox/banimg.png" className={styles.banimg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="4" className="mx-auto align-self-center">
                <Image src="/images/case-study/smox/group48098804.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Project <br /> <span>Description</span></h2>
                <p className={`para ${styles.para}`}>Smox is an innovative mobile application that serves salon businesses by helping them make their appointment booking process a breeze. Its user-friendly features empower salon professionals to connect with their potential target audience and boost their businesses.</p>
                <p className={`para ${styles.para}`}>Smox targets the beauty and wellness industry by basing its platform on cutting-edge technology, enabling it to enhance customer engagement and improve workflow efficiency.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Client <span>Brief</span></h2>
                <p className={`para ${styles.para}`}>Our client envisioned Smox as a revolutionary mobile app that leverages advanced technology to improve salon workflow. The primary requirements included incorporating avant-garde features to facilitate easy appointment setting, increase customer outreach, and promote business success.</p>
                <p className={`para ${styles.para}`}>By serving specifically salon professionals and their service seekers, the client wanted us to create a user-friendly booking system that connects users with the services they want.</p>
                <p className={`para ${styles.para}`}>They aimed for a creative solution that elevates the overall user experience while complying with the industry's unique needs</p>
              </Col>
              <Col lg="6" className="mx-auto align-self-center">
                <Image src="/images/case-study/smox/group48098807.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/smox/group480988101.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>Smox <span>Mission</span></h2>
                <p className={`para ${styles.para}`}>Smox is on a mission to transform the salon experience into an effortlessly engaging journey for salon owners and customers. The platform offers a dynamic solution to innovate and redefine salon management, streamlining the service booking system and building valuable relationships between service providers and users. Smox is committed to empowering businesses to leverage technology that helps them deliver exceptional services and convenience to customers.</p>
                <p className={`para ${styles.para}`}>Smox envisions a future where every interaction in the salon ecosystem leads to customer satisfaction and their exceptional experience.  </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto">
                <h2 className={`heading ${styles.heading}`}>Key Project <br /> <span>Challenges</span></h2>
                <p className={`para ${styles.para}`}>Building Smox was complex, as the client wanted an app for both salon owners and service seekers. Service providers needed an interface to manage bookings, availability, and customer profiles, while service seekers required an intuitive way to browse and book appointments.</p>
                <p className={`para ${styles.para}`}>Integrating real-time location-based searches to find nearby salons was crucial. Additionally, ensuring secure payments and safeguarding sensitive user data were significant challenges.</p>
                <p className={`para ${styles.para}`}>The platform also required proper implementation of robust measures to prevent fraud and unauthorized access to make it a trustworthy app.</p>
              </Col>
              <Col lg="3" className="ms-auto align-self-center">
                <Image src="/images/case-study/smox/group116431.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="me-auto align-self-center">
                <Image src="/images/case-study/smox/group48098815.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}><span>Solutions</span> to the Challenges </h2>
                <p className={`para ${styles.para}`}>Coded Pulse developers developed an intuitive dashboard to help salon owners manage their bookings, services, and client interactions in one place. We integrated a mechanism of automated notifications and reminders to ensure their effective communication with customers.</p>
                <p className={`para ${styles.para}`}>Similarly, we built another user-friendly interface integrated with Google Maps, which allows service seekers to browse salons based on location, price, and provider ratings. We connected an efficient calendar system that displays real-time availability for easy bookings.</p>
                <p className={`para ${styles.para}`}>We addressed security concerns by implementing robust encryption protocols and integrated secure payment gateways like Stripe and PayPal.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding pt-0 text-center`}>
          <Container>
            <Row>
              <Col lg="10" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}>Delivering Excellence Through <span>Agile Development</span></h2>
                <p className={`para ${styles.para}`}>We applied Agile methodology to ease the app development process and ensured continuous improvements and rapid iterations. Rigorous tests with real-world users make the app function without glitches and provide an engaging user experience.</p>
                <p className={`para ${styles.para}`}>Quick load times and smooth interactions rely on performance optimization; hence, we focused more on this crucial aspect so the app functions well even during peak usage.</p>
                <p className={`para ${styles.para}`}>We systematically evaluated the app’s scalability and enabling the app to accommodate a growing user base without compromising on speed and efficiency.</p>
              </Col>
            </Row>
            <div className={styles.cenimg}>
              <Row>
                <Col lg="5" className="mx-auto text-center">
                  <Image src="/images/case-study/smox/group48098815.png" className={`img-fluid w-100`} alt="" />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto">
                <h2 className={`heading ${styles.heading}`}>A Final <span>Product</span> That Exceeded Expectations</h2>
                <p className={`para ${styles.para}`}>Smox is now a fully functional, user-friendly platform that has revolutionized how services are booked. Salon service seekers can find providers, compare prices, and book appointments, while professionals can benefit from resourceful tools to manage their business operations, all done very conveniently.</p>
                <p className={`para ${styles.para}`}>The final product satisfied the client, noting the platform's sleek design, easy navigation, and robust functionality.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/smox/group48098823.png" className={`img-fluid w-100 mt-lg-0 mt-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_theme_right}`}>
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/smox/group48098826.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>The <span>Results</span></h2>
                <p className={`para ${styles.para}`}>Smox is a stellar example of Suitch’s expertise in developing and designing high-performance digital tools.</p>
                <p className={`para ${styles.para}`}>With proven development and marketing approaches taken by Suitch experts, Smox has become the best solution and has received positive feedback from its users, with many praising the streamlined booking process and reliable payment system.</p>
                <div className={styles.store}>
                  <Link href={'#'}>
                    <Image src="/images/case-study/smox/apple.png" className={``} alt="" />
                  </Link>
                  <Link href={'#'}>
                    <Image src="/images/case-study/smox/play.png" className={``} alt="" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding pb-0 ${styles.stacks}`}>
          <Container>
            <h2 className={`heading ${styles.heading}`}><span>Tech Stack</span> Used</h2>
            <Row>
              <Col lg="3" className="mb-lg-0 mb-3">
                <div className={styles.box}>
                  <Image src="/images/case-study/smox/store.png" className={``} alt="" />
                  <h4 className={styles.title}>Mobile Platforms </h4>
                  <p className="para mb-0">iOS and Android</p>
                </div>
              </Col>
              <Col lg="6" className="mb-lg-0 mb-3">
                <div className={styles.box}>
                  <Image src="/images/case-study/smox/flutter.png" className={``} alt="" />
                  <h4 className={styles.title}>Mobile App Development Framework</h4>
                  <p className="para mb-0">Flutter</p>
                </div>
              </Col>
              <Col lg="3" className="mb-lg-0 mb-3">
                <div className={styles.box}>
                  <Image src="/images/case-study/smox/node.png" className={``} alt="" />
                  <h4 className={styles.title}>Admin Panel </h4>
                  <p className="para mb-0">Node JS</p>
                </div>
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




