import Head from "next/head";
import Image from "react-bootstrap/Image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.scss";
import Link from "next/link";
import Slider from "react-infinite-logo-slider";
import { useMediaQuery } from "react-responsive";
import { useModalContext } from "@/context/ModalContext";
import { useRouter } from "next/router";

export default function Bello() {


  const { setModalShow } = useModalContext();


  useEffect(() => {
    document.body.className = "bello case-study";
  }, []);


  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const router = useRouter();



  return (
    <>
      <Head>
        <title>Bello | Coded Pulse</title>
        <meta name="description" content="" />
      </Head>

      <main className={`${styles.belloApp}`}>
        <section className={`hero-section ${styles.hero_section}`}>
          <Container>
            <Row className={`${isMobile && 'flex-column-reverse py-5'} `}>
              <Col lg="7" className="align-self-center">
                <Image
                  src="/images/case-study/bello/hero-image.png"
                  className={`${styles.banimg} img-fluid`}
                  alt=""
                />
              </Col>
              <Col lg="5" className="align-self-center me-auto">
                <h2 className={`heading ${styles.heading} ${styles.heorHeading}`}>Bello – Amplifying <br /> the Bakery Experience</h2>
                <p className={`para ${styles.para}`}>
                  Connecting customers, bakeries, and riders in one app for
                  effortless ordering, customization, and timely
                  delivery—bringing bakeries closer to you.
                </p>
                <button onClick={() => window.open("/case-studies-pdf/bello.pdf", '_blank')} className={`btn ${styles.btn_main}`}>
                  Download Case Study
                </button>
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

        <section className={styles.logo_slide}>
          <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={"#fff"}
          >
            {[...Array(5)].map((item, index) => (
              <Slider.Slide key={index}>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="71"
                    height="70"
                    viewBox="0 0 71 70"
                    fill="none"
                  >
                    <path
                      d="M40.2393 21.6054L40.4179 22.3289L41.0196 21.8895L57.1898 10.0819L48.3695 28.0568L48.0413 28.7257L48.7847 28.7759L68.7615 30.1248L50.4508 38.2247L49.7694 38.5262L50.3066 39.0425L64.7427 52.9166L45.5093 47.3517L44.7935 47.1446L44.8732 47.8854L47.0137 67.7929L35.8572 51.167L35.442 50.5483L35.0268 51.167L23.8703 67.7929L26.0108 47.8854L26.0905 47.1446L25.3747 47.3517L6.14138 52.9166L20.5774 39.0425L21.1146 38.5262L20.4332 38.2247L2.12255 30.1248L22.0993 28.7759L22.8427 28.7257L22.5145 28.0568L13.6943 10.0819L29.8644 21.8895L30.4662 22.3289L30.6447 21.6054L35.442 2.16641L40.2393 21.6054Z"
                      stroke="#FFAF00"
                    />
                  </svg>
                  <svg
                    width="150px"
                    height="64"
                    viewBox="0 0 201 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="path-1-outside-1_1024_13"
                      maskUnits="userSpaceOnUse"
                      x="-1.6377"
                      y="-1"
                      width="203"
                      height="66"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="-1.6377"
                        y="-1"
                        width="203"
                        height="66"
                      />
                      <path d="M33.8873 32.57C37.2306 33.1933 39.979 34.865 42.1323 37.585C44.2856 40.305 45.3623 43.4217 45.3623 46.935C45.3623 50.1083 44.569 52.9133 42.9823 55.35C41.4523 57.73 39.214 59.6 36.2673 60.96C33.3206 62.32 29.8356 63 25.8123 63H0.227305V3.67H24.7073C28.7306 3.67 32.1873 4.32167 35.0773 5.625C38.024 6.92833 40.234 8.74167 41.7073 11.065C43.2373 13.3883 44.0023 16.0233 44.0023 18.97C44.0023 22.4267 43.0673 25.3167 41.1973 27.64C39.384 29.9633 36.9473 31.6067 33.8873 32.57ZM12.1273 28.15H23.0073C25.8406 28.15 28.0223 27.5267 29.5523 26.28C31.0823 24.9767 31.8473 23.135 31.8473 20.755C31.8473 18.375 31.0823 16.5333 29.5523 15.23C28.0223 13.9267 25.8406 13.275 23.0073 13.275H12.1273V28.15ZM24.1123 53.31C27.0023 53.31 29.2406 52.63 30.8273 51.27C32.4706 49.91 33.2923 47.9833 33.2923 45.49C33.2923 42.94 32.4423 40.9567 30.7423 39.54C29.0423 38.0667 26.7473 37.33 23.8573 37.33H12.1273V53.31H24.1123ZM98.6214 38.435C98.6214 40.135 98.5081 41.665 98.2814 43.025H63.8564C64.1398 46.425 65.3298 49.0883 67.4264 51.015C69.5231 52.9417 72.1014 53.905 75.1614 53.905C79.5814 53.905 82.7264 52.0067 84.5964 48.21H97.4314C96.0714 52.7433 93.4648 56.4833 89.6114 59.43C85.7581 62.32 81.0264 63.765 75.4164 63.765C70.8831 63.765 66.8031 62.7733 63.1764 60.79C59.6064 58.75 56.8014 55.8883 54.7614 52.205C52.7781 48.5217 51.7864 44.2717 51.7864 39.455C51.7864 34.5817 52.7781 30.3033 54.7614 26.62C56.7448 22.9367 59.5214 20.1033 63.0914 18.12C66.6614 16.1367 70.7698 15.145 75.4164 15.145C79.8931 15.145 83.8881 16.1083 87.4014 18.035C90.9714 19.9617 93.7198 22.71 95.6464 26.28C97.6298 29.7933 98.6214 33.845 98.6214 38.435ZM86.2964 35.035C86.2398 31.975 85.1348 29.5383 82.9814 27.725C80.8281 25.855 78.1931 24.92 75.0764 24.92C72.1298 24.92 69.6364 25.8267 67.5964 27.64C65.6131 29.3967 64.3948 31.8617 63.9414 35.035H86.2964ZM119.207 0.0999992V63H107.307V0.0999992H119.207ZM142.865 0.0999992V63H130.965V0.0999992H142.865ZM175.532 63.765C170.999 63.765 166.919 62.7733 163.292 60.79C159.665 58.75 156.804 55.8883 154.707 52.205C152.667 48.5217 151.647 44.2717 151.647 39.455C151.647 34.6383 152.695 30.3883 154.792 26.705C156.945 23.0217 159.864 20.1883 163.547 18.205C167.23 16.165 171.339 15.145 175.872 15.145C180.405 15.145 184.514 16.165 188.197 18.205C191.88 20.1883 194.77 23.0217 196.867 26.705C199.02 30.3883 200.097 34.6383 200.097 39.455C200.097 44.2717 198.992 48.5217 196.782 52.205C194.629 55.8883 191.682 58.75 187.942 60.79C184.259 62.7733 180.122 63.765 175.532 63.765ZM175.532 53.395C177.685 53.395 179.697 52.885 181.567 51.865C183.494 50.7883 185.024 49.2017 186.157 47.105C187.29 45.0083 187.857 42.4583 187.857 39.455C187.857 34.9783 186.667 31.55 184.287 29.17C181.964 26.7333 179.102 25.515 175.702 25.515C172.302 25.515 169.44 26.7333 167.117 29.17C164.85 31.55 163.717 34.9783 163.717 39.455C163.717 43.9317 164.822 47.3883 167.032 49.825C169.299 52.205 172.132 53.395 175.532 53.395Z" />
                    </mask>
                    <path
                      d="M33.8873 32.57L33.587 31.6161L33.704 33.5531L33.8873 32.57ZM42.1323 37.585L42.9164 36.9643L42.9164 36.9643L42.1323 37.585ZM42.9823 55.35L42.1443 54.8043L42.1411 54.8092L42.9823 55.35ZM36.2673 60.96L36.6864 61.868L36.6864 61.868L36.2673 60.96ZM0.227305 63H-0.772695V64H0.227305V63ZM0.227305 3.67V2.67H-0.772695V3.67H0.227305ZM35.0773 5.625L34.6662 6.53661L34.6728 6.53953L35.0773 5.625ZM41.7073 11.065L40.8628 11.6005L40.8674 11.6078L40.8721 11.615L41.7073 11.065ZM41.1973 27.64L40.4183 27.013L40.4136 27.0188L40.409 27.0247L41.1973 27.64ZM12.1273 28.15H11.1273V29.15H12.1273V28.15ZM29.5523 26.28L30.184 27.0552L30.1925 27.0483L30.2008 27.0412L29.5523 26.28ZM29.5523 15.23L30.2008 14.4688L30.2008 14.4688L29.5523 15.23ZM12.1273 13.275V12.275H11.1273V13.275H12.1273ZM30.8273 51.27L30.1897 50.4996L30.1831 50.5051L30.1765 50.5107L30.8273 51.27ZM30.7423 39.54L30.0874 40.2957L30.0947 40.302L30.1021 40.3082L30.7423 39.54ZM12.1273 37.33V36.33H11.1273V37.33H12.1273ZM12.1273 53.31H11.1273V54.31H12.1273V53.31ZM33.704 33.5531C36.8047 34.1312 39.3415 35.6709 41.3483 38.2057L42.9164 36.9643C40.6164 34.0591 37.6566 32.2555 34.0706 31.5869L33.704 33.5531ZM41.3483 38.2057C43.3598 40.7466 44.3623 43.6439 44.3623 46.935H46.3623C46.3623 43.1995 45.2115 39.8634 42.9164 36.9643L41.3483 38.2057ZM44.3623 46.935C44.3623 49.933 43.6156 52.5448 42.1443 54.8043L43.8203 55.8957C45.5223 53.2819 46.3623 50.2836 46.3623 46.935H44.3623ZM42.1411 54.8092C40.7285 57.0067 38.6482 58.7598 35.8482 60.052L36.6864 61.868C39.7798 60.4402 42.1761 58.4533 43.8235 55.8908L42.1411 54.8092ZM35.8482 60.052C33.0605 61.3387 29.7247 62 25.8123 62V64C29.9465 64 33.5807 63.3013 36.6864 61.868L35.8482 60.052ZM25.8123 62H0.227305V64H25.8123V62ZM1.22731 63V3.67H-0.772695V63H1.22731ZM0.227305 4.67H24.7073V2.67H0.227305V4.67ZM24.7073 4.67C28.6257 4.67 31.9352 5.30497 34.6662 6.53659L35.4884 4.71341C32.4394 3.33836 28.8356 2.67 24.7073 2.67V4.67ZM34.6728 6.53953C37.4702 7.77685 39.5126 9.47132 40.8628 11.6005L42.5518 10.5295C40.9554 8.01202 38.5777 6.07981 35.4818 4.71046L34.6728 6.53953ZM40.8721 11.615C42.2881 13.7652 43.0023 16.2067 43.0023 18.97H45.0023C45.0023 15.84 44.1865 13.0115 42.5425 10.515L40.8721 11.615ZM43.0023 18.97C43.0023 22.2366 42.1231 24.8949 40.4183 27.013L41.9763 28.267C44.0115 25.7385 45.0023 22.6167 45.0023 18.97H43.0023ZM40.409 27.0247C38.7314 29.1742 36.4717 30.708 33.587 31.6161L34.1876 33.5238C37.4229 32.5053 40.0366 30.7525 41.9856 28.2553L40.409 27.0247ZM12.1273 29.15H23.0073V27.15H12.1273V29.15ZM23.0073 29.15C25.9729 29.15 28.4121 28.499 30.184 27.0552L28.9206 25.5048C27.6325 26.5543 25.7084 27.15 23.0073 27.15V29.15ZM30.2008 27.0412C31.9955 25.5124 32.8473 23.3684 32.8473 20.755H30.8473C30.8473 22.9016 30.1691 24.4409 28.9038 25.5188L30.2008 27.0412ZM32.8473 20.755C32.8473 18.1416 31.9955 15.9976 30.2008 14.4688L28.9038 15.9912C30.1691 17.0691 30.8473 18.6084 30.8473 20.755H32.8473ZM30.2008 14.4688C28.428 12.9586 25.982 12.275 23.0073 12.275V14.275C25.6993 14.275 27.6166 14.8947 28.9038 15.9912L30.2008 14.4688ZM23.0073 12.275H12.1273V14.275H23.0073V12.275ZM11.1273 13.275V28.15H13.1273V13.275H11.1273ZM24.1123 54.31C27.1499 54.31 29.6513 53.5951 31.4781 52.0293L30.1765 50.5107C28.83 51.6649 26.8547 52.31 24.1123 52.31V54.31ZM31.4649 52.0404C33.3777 50.4574 34.2923 48.2253 34.2923 45.49H32.2923C32.2923 47.7414 31.5636 49.3626 30.1897 50.4996L31.4649 52.0404ZM34.2923 45.49C34.2923 42.6937 33.3466 40.4086 31.3825 38.7718L30.1021 40.3082C31.538 41.5048 32.2923 43.1863 32.2923 45.49H34.2923ZM31.3972 38.7843C29.4686 37.1128 26.9177 36.33 23.8573 36.33V38.33C26.5769 38.33 28.616 39.0205 30.0874 40.2957L31.3972 38.7843ZM23.8573 36.33H12.1273V38.33H23.8573V36.33ZM11.1273 37.33V53.31H13.1273V37.33H11.1273ZM12.1273 54.31H24.1123V52.31H12.1273V54.31ZM98.2814 43.025V44.025H99.1286L99.2678 43.1894L98.2814 43.025ZM63.8564 43.025V42.025H62.7696L62.8599 43.108L63.8564 43.025ZM67.4264 51.015L66.7498 51.7513L66.7498 51.7513L67.4264 51.015ZM84.5964 48.21V47.21H83.9743L83.6994 47.7681L84.5964 48.21ZM97.4314 48.21L98.3893 48.4973L98.7755 47.21H97.4314V48.21ZM89.6114 59.43L90.2115 60.23L90.2189 60.2244L89.6114 59.43ZM63.1764 60.79L62.6803 61.6582L62.6884 61.6629L62.6966 61.6674L63.1764 60.79ZM54.7614 52.205L53.8809 52.6791L53.8867 52.6895L54.7614 52.205ZM54.7614 26.62L53.881 26.1459L53.881 26.1459L54.7614 26.62ZM63.0914 18.12L63.5771 18.9942L63.5771 18.9942L63.0914 18.12ZM87.4014 18.035L86.9206 18.9118L86.9265 18.915L87.4014 18.035ZM95.6464 26.28L94.7664 26.7549L94.7709 26.7633L94.7756 26.7716L95.6464 26.28ZM86.2964 35.035V36.035H87.3151L87.2963 35.0165L86.2964 35.035ZM82.9814 27.725L82.3258 28.48L82.3315 28.485L82.3373 28.4899L82.9814 27.725ZM67.5964 27.64L68.2595 28.3886L68.2608 28.3874L67.5964 27.64ZM63.9414 35.035L62.9515 34.8936L62.7884 36.035H63.9414V35.035ZM97.6214 38.435C97.6214 40.0921 97.5109 41.5657 97.2951 42.8606L99.2678 43.1894C99.5054 41.7643 99.6214 40.1779 99.6214 38.435H97.6214ZM98.2814 42.025H63.8564V44.025H98.2814V42.025ZM62.8599 43.108C63.1597 46.7058 64.4329 49.6222 66.7498 51.7513L68.1031 50.2787C66.2267 48.5544 65.1198 46.1442 64.853 42.942L62.8599 43.108ZM66.7498 51.7513C69.0455 53.8609 71.8713 54.905 75.1614 54.905V52.905C72.3316 52.905 70.0007 52.0224 68.1031 50.2787L66.7498 51.7513ZM75.1614 54.905C77.5164 54.905 79.5945 54.3982 81.352 53.3374C83.112 52.275 84.4872 50.6951 85.4935 48.6518L83.6994 47.7681C82.8357 49.5216 81.7034 50.7892 80.3184 51.6251C78.9309 52.4626 77.2265 52.905 75.1614 52.905V54.905ZM84.5964 49.21H97.4314V47.21H84.5964V49.21ZM96.4736 47.9227C95.1757 52.249 92.6945 55.8135 89.004 58.6356L90.2189 60.2244C94.235 57.1532 96.9672 53.2377 98.3893 48.4973L96.4736 47.9227ZM89.0114 58.63C85.3586 61.3696 80.8471 62.765 75.4164 62.765V64.765C81.2058 64.765 86.1576 63.2704 90.2114 60.23L89.0114 58.63ZM75.4164 62.765C71.0342 62.765 67.1219 61.8079 63.6563 59.9126L62.6966 61.6674C66.4843 63.7388 70.732 64.765 75.4164 64.765V62.765ZM63.6726 59.9218C60.2655 57.9749 57.5898 55.2477 55.6362 51.7205L53.8867 52.6895C56.0131 56.529 58.9474 59.5251 62.6803 61.6582L63.6726 59.9218ZM55.6419 51.7309C53.7482 48.214 52.7864 44.1314 52.7864 39.455H50.7864C50.7864 44.4119 51.808 48.8293 53.881 52.6791L55.6419 51.7309ZM52.7864 39.455C52.7864 34.7197 53.7491 30.6094 55.6419 27.0941L53.881 26.1459C51.8071 29.9973 50.7864 34.4436 50.7864 39.455H52.7864ZM55.6419 27.0941C57.5369 23.5748 60.1785 20.8823 63.5771 18.9942L62.6058 17.2458C58.8644 19.3244 55.9526 22.2985 53.881 26.1459L55.6419 27.0941ZM63.5771 18.9942C66.9791 17.1042 70.916 16.145 75.4164 16.145V14.145C70.6236 14.145 66.3438 15.1692 62.6058 17.2458L63.5771 18.9942ZM75.4164 16.145C79.7451 16.145 83.5713 17.0751 86.9206 18.9118L87.8823 17.1582C84.2049 15.1416 80.0411 14.145 75.4164 14.145V16.145ZM86.9265 18.915C90.3249 20.7491 92.9324 23.3566 94.7664 26.7549L96.5265 25.8051C94.5072 22.0634 91.618 19.1743 87.8764 17.155L86.9265 18.915ZM94.7756 26.7716C96.6632 30.1153 97.6214 33.9932 97.6214 38.435H99.6214C99.6214 33.6968 98.5964 29.4714 96.5173 25.7884L94.7756 26.7716ZM87.2963 35.0165C87.2348 31.6964 86.0204 28.9768 83.6256 26.9601L82.3373 28.4899C84.2492 30.0999 85.2448 32.2536 85.2966 35.0535L87.2963 35.0165ZM83.6371 26.97C81.2845 24.9269 78.4099 23.92 75.0764 23.92V25.92C77.9763 25.92 80.3717 26.7831 82.3258 28.48L83.6371 26.97ZM75.0764 23.92C71.906 23.92 69.1703 24.903 66.9321 26.8926L68.2608 28.3874C70.1025 26.7503 72.3535 25.92 75.0764 25.92V23.92ZM66.9334 26.8914C64.7372 28.8366 63.431 31.5369 62.9515 34.8936L64.9314 35.1764C65.3585 32.1865 66.489 29.9567 68.2595 28.3886L66.9334 26.8914ZM63.9414 36.035H86.2964V34.035H63.9414V36.035ZM119.207 0.0999992H120.207V-0.900001H119.207V0.0999992ZM119.207 63V64H120.207V63H119.207ZM107.307 63H106.307V64H107.307V63ZM107.307 0.0999992V-0.900001H106.307V0.0999992H107.307ZM118.207 0.0999992V63H120.207V0.0999992H118.207ZM119.207 62H107.307V64H119.207V62ZM108.307 63V0.0999992H106.307V63H108.307ZM107.307 1.1H119.207V-0.900001H107.307V1.1ZM142.865 0.0999992H143.865V-0.900001H142.865V0.0999992ZM142.865 63V64H143.865V63H142.865ZM130.965 63H129.965V64H130.965V63ZM130.965 0.0999992V-0.900001H129.965V0.0999992H130.965ZM141.865 0.0999992V63H143.865V0.0999992H141.865ZM142.865 62H130.965V64H142.865V62ZM131.965 63V0.0999992H129.965V63H131.965ZM130.965 1.1H142.865V-0.900001H130.965V1.1ZM163.292 60.79L162.802 61.6616L162.812 61.6674L163.292 60.79ZM154.707 52.205L153.832 52.6895L153.838 52.6997L154.707 52.205ZM154.792 26.705L153.928 26.2003L153.923 26.2103L154.792 26.705ZM163.547 18.205L164.021 19.0855L164.031 19.0798L163.547 18.205ZM188.197 18.205L187.712 19.0799L187.723 19.0855L188.197 18.205ZM196.867 26.705L195.998 27.1997L196.004 27.2097L196.867 26.705ZM196.782 52.205L195.924 51.6905L195.919 51.7003L196.782 52.205ZM187.942 60.79L188.416 61.6705L188.421 61.6679L187.942 60.79ZM181.567 51.865L182.046 52.7429L182.055 52.7379L181.567 51.865ZM186.157 47.105L187.037 47.5805L187.037 47.5805L186.157 47.105ZM184.287 29.17L183.563 29.8601L183.571 29.8687L183.58 29.8771L184.287 29.17ZM167.117 29.17L166.393 28.4799L166.393 28.4803L167.117 29.17ZM167.032 49.825L166.291 50.4968L166.299 50.5058L166.308 50.5147L167.032 49.825ZM175.532 62.765C171.15 62.765 167.237 61.8079 163.772 59.9126L162.812 61.6674C166.6 63.7388 170.847 64.765 175.532 64.765V62.765ZM163.782 59.9184C160.317 57.9691 157.585 55.2391 155.576 51.7103L153.838 52.6997C156.022 56.5376 159.014 59.5309 162.802 61.6616L163.782 59.9184ZM155.582 51.7205C153.635 48.2056 152.647 44.1269 152.647 39.455H150.647C150.647 44.4165 151.699 48.8377 153.832 52.6895L155.582 51.7205ZM152.647 39.455C152.647 34.7877 153.661 30.7127 155.661 27.1997L153.923 26.2103C151.729 30.064 150.647 34.4889 150.647 39.455H152.647ZM155.655 27.2097C157.718 23.6817 160.503 20.9799 164.021 19.0855L163.073 17.3245C159.224 19.3968 156.173 22.3617 153.929 26.2003L155.655 27.2097ZM164.031 19.0798C167.555 17.1282 171.495 16.145 175.872 16.145V14.145C171.182 14.145 166.905 15.2018 163.062 17.3302L164.031 19.0798ZM175.872 16.145C180.249 16.145 184.189 17.1282 187.712 19.0798L188.681 17.3302C184.838 15.2018 180.561 14.145 175.872 14.145V16.145ZM187.723 19.0855C191.239 20.9786 193.993 23.6772 195.998 27.1997L197.736 26.2103C195.548 22.3661 192.522 19.3981 188.671 17.3245L187.723 19.0855ZM196.004 27.2097C198.056 30.7209 199.097 34.7924 199.097 39.455H201.097C201.097 34.4843 199.984 30.0557 197.73 26.2003L196.004 27.2097ZM199.097 39.455C199.097 44.113 198.03 48.1808 195.924 51.6905L197.639 52.7195C199.954 48.8625 201.097 44.4304 201.097 39.455H199.097ZM195.919 51.7003C193.857 55.2268 191.043 57.9594 187.463 59.9121L188.421 61.6679C192.321 59.5406 195.4 56.5498 197.645 52.7097L195.919 51.7003ZM187.468 59.9095C183.944 61.807 179.973 62.765 175.532 62.765V64.765C180.271 64.765 184.573 63.7397 188.416 61.6705L187.468 59.9095ZM175.532 54.395C177.851 54.395 180.027 53.8439 182.046 52.7429L181.088 50.9871C179.367 51.9261 177.52 52.395 175.532 52.395V54.395ZM182.055 52.7379C184.16 51.5613 185.82 49.8303 187.037 47.5805L185.277 46.6295C184.227 48.5731 182.827 50.0154 181.079 50.9921L182.055 52.7379ZM187.037 47.5805C188.267 45.3046 188.857 42.582 188.857 39.455H186.857C186.857 42.3346 186.314 44.7121 185.277 46.6295L187.037 47.5805ZM188.857 39.455C188.857 34.8036 187.617 31.086 184.994 28.4629L183.58 29.8771C185.717 32.014 186.857 35.153 186.857 39.455H188.857ZM185.011 28.4799C182.496 25.8431 179.372 24.515 175.702 24.515V26.515C178.831 26.515 181.431 27.6235 183.563 29.8601L185.011 28.4799ZM175.702 24.515C172.031 24.515 168.907 25.8431 166.393 28.4799L167.841 29.8601C169.973 27.6235 172.572 26.515 175.702 26.515V24.515ZM166.393 28.4803C163.893 31.1051 162.717 34.8162 162.717 39.455H164.717C164.717 35.1405 165.807 31.9949 167.841 29.8597L166.393 28.4803ZM162.717 39.455C162.717 44.0894 163.862 47.8186 166.291 50.4968L167.773 49.1532C165.782 46.9581 164.717 43.7739 164.717 39.455H162.717ZM166.308 50.5147C168.77 53.1004 171.869 54.395 175.532 54.395V52.395C172.395 52.395 169.827 51.3096 167.756 49.1353L166.308 50.5147Z"
                      fill="#FFAF00"
                      mask="url(#path-1-outside-1_1024_13)"
                    />
                  </svg>
                </div>
              </Slider.Slide>
            ))}
          </Slider>
        </section>

        <section className={`pt-0 section-padding ${styles.contentMaxWidth}`}>
          <Container>
            <Row>
              <Col xl="10" className="text-center mx-auto">
                <h2 className={`heading ${styles.heading} ${styles.maxHeading}`}>
                  A Vision for Reliable
                  <span>
                    <br />
                    Bakery Experiences
                  </span>
                </h2>
                <p className={`para ${styles.para}`}>
                  Our client came to us for a solution to address the growing
                  demand for online bakery services. The problem was bakery
                  owners faced logistical challenges and the customers faced
                  problems in finding reliable bakeries that were nearby. A
                  platform was required to bridge this gap of communication and
                  logistics between both parties. A one-stop shop to handle
                  orders, delivery, rider availability, and payment through
                  multiple methods.
                </p>
              </Col>

              <div className={`${styles.downladButton}`}>
                <div className={`${styles.downloadBtn1}`}>
                  <img
                    src="/images/icons/download-appstore.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className={`${styles.downloadBtn1}`}>
                  <img
                    src="/images/icons/download-googleplay.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* OUR MISSION SECTION START  */}
        <section>
          <Container>
            <div className={`${styles.bg_theme} position-relative`}>
              <Row>
                <Col lg="5" className={`align-items-center ${styles.missionSection}`}>
                  <h2 className={`${styles.LargeHeading}`}>
                    Our
                    Mission
                  </h2>
                </Col>
                <Col lg="7" className="align-items-center">
                  <div className={styles.utilwrap}>
                    <div className={`${styles.utilCard}`} data-value="2019">
                      <h2 className="">YEAR</h2>
                      <h4 className={`${isMobile && 'text-center'}`}>2019</h4>
                    </div>
                    <div className={`${styles.utilCard}`} data-value="UI/UX DESIGN">
                      <h2 className="">ROLE</h2>
                      <h4 className={`${isMobile && 'text-center'}`}>UI/UX <br /> DESIGN</h4>
                    </div>
                    <div className={`${styles.utilCard}`} data-value="MOBILE & wEB APPLICATION">
                      <h2 className="">TYPE</h2>
                      <h4 className={`${isMobile && 'text-center'}`}>MOBILE & WEB APPLICATION</h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
        {/* OUR MISSION SECTION END  */}

        <section className={`section-padding`}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center">
                <Image
                  src="/images/case-study/bello/bella-sweet.png"
                  className={`img-fluid w-100 mb-lg-0 mb-3`}
                  alt=""
                />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>
                  Bringing <span>Sweet</span> <span>Dreams</span> to Life
                </h2>
                <p className={`para ${styles.para}`}>
                  Bello is the result of a visionary idea brought to life—an app
                  designed to connect customers with local bakeries and
                  efficient delivery services seamlessly. Bello simplifies
                  bakery orders, customizations, and timely deliveries, all in
                  one place with its easy-to-use features..
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={``}>
          <Container>
            <Row>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>
                  Addressing Sweet <span>Problems</span>
                </h2>
                <p className={`para ${styles.para}`}>
                  Bello addresses the key issues of accessibility and efficiency
                  in the bakery industry. Customers are unable to find prompt
                  delivery options from the nearby bakeries. The options are
                  scattered throughout the city, raising the issue for the
                  bakery owners. They could not fulfill orders and provide
                  timely deliveries without the proper location parameters.
                </p>
                <p className={`para ${styles.para}`}>
                  On the development side, the challenge was to implement
                  real-time tracking along with geolocation features. A
                  customizable pricing model was a technical challenge we had to
                  overcome. Bringing together the bakery owners, customers, and
                  riders smoothly and connecting them was a navigational
                  challenge.
                </p>
              </Col>
              <Col lg="6" className="mx-auto align-self-center">
                <Image
                  src="/images/case-study/bello/bella-hurdles.png"
                  className={`img-fluid w-100 mt-lg-0 mt-3`}
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`section-padding`}>
          <Container>
            <Row className="gx-sm-5">
              <Col lg="6" className="me-auto align-self-center">
                <Image
                  src="/images/case-study/bello/bello-backed-solution.png"
                  className={`img-fluid w-100 mb-lg-0 mb-3`}
                  alt=""
                />
              </Col>
              <Col lg="6" className="align-self-center me-auto ">
                <h2 className={`heading ${styles.heading}`}>
                  Providing Oven-Baked <span>Solutions</span>
                </h2>
                <p className={`para ${styles.para}`}>
                  Bello was developed to address these challenges by integrating
                  geolocation and real-time tracking so that customers can
                  locate nearby bakeries and keep track of their deliveries. The
                  radius feature categorizes the bakeries according to their
                  distance.
                </p>
                <p className={`para ${styles.para}`}>
                  Our team at Coded Pulse created a user-friendly interface to
                  simplify customers' ordering process by providing nearby
                  locations. It eased the connection between bakery owners and
                  riders and ensured a smooth delivery process. Payment security
                  and pricing are other main aspects of any successful business,
                  and Bello provided reliable solutions for them.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <div className={`${styles.bg_theme} position-relative`}>
              <Row className="gx-sm-5">
                <Col lg="7" className="align-items-center">
                  <div className={`${styles.utilwrap} ${styles.utilwrap2}`}>
                    <div className={`${styles.utilCard}`} data-value="3000+">
                      <h2 className="">DOWNLOADS</h2>
                      <h1 className="">3000+</h1>
                    </div>
                    <div className={`${styles.utilCard}`} data-value="4.6+">
                      <h2 className="">RATING</h2>
                      <h1 className="">4.6+</h1>
                    </div>
                    <div className={`${styles.utilCard}`} data-value="60+">
                      <h2 className="">REVIEWS</h2>
                      <h1 className="">60+</h1>
                    </div>
                  </div>
                </Col>
                <Col lg="5" className={`align-items-center ${styles.theResultBackground}`}>
                  <h2 className={`${styles.LargeHeading}`}>The <br /> Results</h2>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className={`section-padding  ${styles.featureGlanceSection}`}>
          <div className={`${styles.contentMaxWidth}`}>
            <Container>
              <Row>
                <Col xl="8" className="text-center mx-auto">
                  <h2 className={`heading ${styles.heading}`}>
                    Bello&apos;s Key Features <br /> at a <span className={`${styles['text-yellow']}`}>Glance</span>
                  </h2>
                  <p className={`para ${styles.para}`}>
                    The app delivered beyond expectations as more and more bakeries lined up to be part of the Bello experience. Customers were happy as this was a bakery-specific order and delivery solution that provided more value and options. If you have an innovative idea that you want to bring to life, Flip Coded Pulse!
                  </p>
                  <img
                    src="/images/case-study/bello/mobile-section.png"
                    className="img-fluid"
                    alt=""
                  />
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

        <section className={`section-padding pb-0 ${styles.ctasec}`}>
          <Container>
            <Row>
              <Col lg="7" className="">
                <p className="para mb-0">Have a Project</p>
                <h2 className={`heading ${styles.heading}`}>We’re Ready</h2>
              </Col>
              <Col lg="5" className="text-lg-end align-self-center">
                <Link href={"#"} onClick={() => setModalShow(true)} className="btn btn-purple">
                  Get in Touch
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
