import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './index.module.scss'
import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";
import { useRouter } from "next/router";

export default function Jebby() {

  const { setModalShow } = useModalContext();
  




  useEffect(() => {
    document.body.className = 'jebby case-study';
  }, []);







  return (
    <>
      <Head>
        <title>Jebby | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <section>
        <section className={`hero-section ${styles.hero_section}`}>
          <Image src="/images/case-study/jebby/banbg.png" className={`${styles.bg}`} alt="" />
          <Container>
            <Row>
              <Col xl="9" lg="10" className="mx-auto">
                <div>
                  <Image src="/images/case-study/jebby/logo.svg" className={`logo ${styles.logo}`} alt="" />
                  <h2 className={`heading ${styles.heading}`}><span>Jebby:</span> Redefining Rentals for the Modern World</h2>
                  <p className={`para ${styles.para}`}> Making money out of almost any and everything is the new norm of the modern world and it is made easy through technology. Jebby is the platform that connects young individuals, students, and anyone needing short-term solutions for items they don’t want to buy. A convenient way to access affordable rents</p>
                  <Link href="/case-studies-pdf/Jebby.pdf" target="_blank" className={`btn ${styles.btn_main}`}>Download Case Study</Link>
                </div>
              </Col>
            </Row>
            <Image src="/images/case-study/jebby/group1171275169.png" className={`${styles.banimg}`} alt="" />
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_theme}`}>
          <Container>
            <Row>
              <Col lg="9" className="mx-auto text-center">
                <h2 className={`heading ${styles.heading}`}>Affordable, Secure, <br /> and Simple</h2>
                <p className={`para mb-0 ${styles.para}`}>It is useless to spend huge money on something that you are going to use very rarely. Moreover, if you have already spent on something like that Jebby is there to recover your part of amount. Through the Jebby app, you can list that item for it to be rented or you can find almost anything to rent from the vast items list. It is affordable, secure, and developed after keeping in mind the needs of young individuals.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}><span>Challenge?</span> <br /> Making Short-Term Buying Affordable</h2>
                <p className={`para ${styles.para}`}>Buying rarely used items can be costly and impractical, especially for those on a tight budget. The challenge in making this app was to develop it around the center needs of these individuals which include students, young individuals, entrepreneurs, etc. Many rental platforms focus on either very niche markets or lack the range.</p>
                <p className={`para ${styles.para}`}>Another issue renters face is the lack of a reliable and safe platform to list items directly. If owners and renters are hesitant to list items then few items will be unable to create a platform.</p>
                <p className={`para mb-0 ${styles.para}`}>Traditional rental apps do not offer the affordability and flexibility younger users require. They often overlook the importance of a secure and simple transaction process.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/jebby/group48098761.png" className={`img-fluid w-100`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className={`section-padding ${styles.bg_blue}`}>
          <Container>
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/jebby/group48098753.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>Simplifying the <br /> Rental Process <br /> with <span>Jebby</span></h2>
                <p className={`para ${styles.para}`}>Jebby takes all the stress out of renting by providing an easy-to-navigate app where users can browse, rent, or list items in just a few simple taps. The app empowers users to find affordable deals on short-term rentals. Also, the app lets item owners easily list their possessions to generate passive income.</p>
                <p className={`para ${styles.para}`}>With secure in-app transactions, users can trust that every rental exchange is recorded and safe. It has a history feature to keep a check on the transactions both for the owner and renter.</p>
                <p className={`para ${styles.para} mb-0`}>The platform also provides real-time support and does not leave both parties hanging because it is just a mediator. Jebby simplifies the entire process end-to-end.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>The <span>Features</span> <br /> That Make Jebby Stand Out</h2>
                <p className={`para ${styles.para}`}>Jebby boasts several standout features that make renting simple and effective. The user can browse through a variety of items up for rent on a single interface. This one-stop solution saves the hassle of comparing online and multiple sources. Users can communicate in-between them and customer support. too.</p>
                <p className={`para ${styles.para}`}>The secure in-app transaction system is robust and safe. The owner and renter can both do the transaction promptly and have a transaction history. This provides peace of mind for both renters and item owners.</p>
                <p className={`para ${styles.para} mb-0`}>The direct feedback and support feature sets the app apart from the others in the market. It makes listing any items like electronics or personal tools easier.</p>
              </Col>
              <Col lg="5" className="ms-auto align-self-center">
                <Image src="/images/case-study/jebby/group48098778.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding ${styles.bg_blue}`}>
          <Image src="/images/case-study/jebby/bgsec.png" className={`${styles.bg}`} alt="" />
          <Container className="position-relative">
            <Row>
              <Col lg="5" className="me-auto align-self-center">
                <Image src="/images/case-study/jebby/group48098759.png" className={`img-fluid w-100 mb-lg-0 mb-3`} alt="" />
              </Col>
              <Col lg="6" className="align-self-center">
                <h2 className={`heading ${styles.heading}`}>A New Era of <br /> <span>Cost-Efficient</span> <br /> Living</h2>
                <p className={`para ${styles.para}`}>Jebby is transforming the way people approach short-term item usage by offering a secure, affordable, and user-friendly platform. It meets the needs of those who want to rent items without overspending. The app empowers users to save money by decluttering their homes and earning extra income while making it easy for renters to find affordability.</p>
                <p className={`para ${styles.para}`}>If you're tired of buying items you barely use or are looking for an easy way to earn some extra cash, Jebby is the solution. This has become a practical slogan for everyone who uses Jebby app.</p>
                <p className={`para ${styles.para} mb-lg-0`}>If you want to help people and yourself and also make money while doing so then you bring the idea we will design it into reality.</p>
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