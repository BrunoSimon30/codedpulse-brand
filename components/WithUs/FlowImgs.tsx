import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MagnetButton from "../MagnetButton";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { useRef } from "react";
import { gsap } from "@/helpers/gsap";

function WithUs() {
  const main = useRef<HTMLElement>(null);
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (!main.current) return;

    const ctx = gsap.context((self) => {
      const mediaQuery = window.matchMedia('(min-width: 992px)');

      const handleResize = () => {
        if (mediaQuery.matches) {
          // Execute GSAP animations if the viewport width is greater than 992px
          setTimeout(() => {
            // WITH US SEC ANIM
            const withUsSec = main.current;
            const withUsTl = gsap.timeline({
              scrollTrigger: {
                trigger: withUsSec,
                // scroller: ".main_wrapper",
                scrub: true,
                pin: withUsSec?.querySelector(".pin_item>div"),
                start: "top +100px",
                end: "+=600",
              },
            });

            const parallaxItems = main.current?.querySelectorAll(".paral_item");
            if (parallaxItems && parallaxItems?.length !== 0) {
              parallaxItems.forEach((element) => {
                let tl = gsap.timeline({
                  scrollTrigger: {
                    trigger: element,
                    // scroller: ".main_wrapper",
                    scrub: true,
                  },
                });
                tl.fromTo(
                  element.querySelector("img"),
                  { y: "50px" },
                  { y: "-50px" }
                );
              });
            }

            const videos = main.current?.querySelectorAll("video");
            videos?.forEach((elem) => {
              elem.addEventListener("mouseover", () => {
                elem.play();
              });

              elem.addEventListener("mouseout", () => {
                elem.pause();
              });
            });
          }, 40);
        } else {
          // Revert GSAP animations if the viewport width is less than 992px
        }
      };

      // Initial check
      handleResize();

      // Add event listener for window resize
      mediaQuery.addEventListener('change', handleResize);

      return () => {
        // Clean up event listener and GSAP context
        mediaQuery.removeEventListener('change', handleResize);
        ctx.revert();
      };
    }, main);

  }, []);

  // useIsomorphicLayoutEffect(() => {
  //   if (!main.current) return;

  //   const ctx = gsap.context((self: any) => {
  //     // setTimeout(() => {
  //     // WITH US SEC ANIM
  //     const withUsSec = main.current;
  //     const withUsTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: withUsSec,
  //         // scroller: ".main_wrapper",
  //         scrub: true,
  //         pin: withUsSec?.querySelector(".pin_item>div"),
  //         start: "top +100px",
  //         end: "+=600",
  //       },
  //     });

  //     const parallaxItems = main.current?.querySelectorAll(".paral_item");
  //     if (parallaxItems && parallaxItems?.length !== 0) {
  //       parallaxItems.forEach((element) => {
  //         let tl = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: element,
  //             // scroller: ".main_wrapper",
  //             scrub: true,
  //           },
  //         });
  //         tl.fromTo(
  //           element.querySelector("img"),
  //           { y: "50px" },
  //           { y: "-50px" }
  //         );
  //       });
  //     }

  //     const videos = main.current?.querySelectorAll("video");
  //     videos?.forEach((elem) => {
  //       elem.addEventListener("mouseover", () => {
  //         elem.play();
  //       });

  //       elem.addEventListener("mouseout", () => {
  //         elem.pause();
  //       });
  //     });

  //     // }, 4);
  //   }, main);

  //   return () => ctx.revert();
  // });
  return (
    <>
      <section className="withus-sec" ref={main}>
        <Container fluid>
          <Row>
            <Col lg="5">
              <div className="flowimgs">
                <div className="imgrow">
                  <div className="paral_item">
                    <video
                      src="/media/release/03_ses7bf.webm"
                      muted
                      loop
                    ></video>
                    {/* <Image
                      src="/images/rectangle69.png"
                      className="img-fluid"
                      alt="img"
                    /> */}
                  </div>
                  <div className="paral_item">
                    <Image
                      src="/images/rectangle71.png"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                  <div className="paral_item">
                    <video
                      src="/media/release/01_amb8oq.webm"
                      muted
                      loop
                    ></video>
                    {/* <Image
                      src="/images/rectangle73.png"
                      className="img-fluid"
                      alt="img"
                    /> */}
                  </div>
                </div>
                <div className="imgrow">
                  <div className="paral_item">
                    <Image
                      src="/images/rectangle70.png"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                  <div className="paral_item">
                    <video
                      src="/media/release/02_efygmy.webm"
                      muted
                      loop
                    ></video>
                    {/* <Image
                      src="/images/rectangle721.png"
                      className="img-fluid"
                      alt="img"
                    /> */}
                  </div>
                  <div className="paral_item">
                    <video
                      src="/media/release/02_v5q2cm.webm"
                      muted
                      loop
                    ></video>
                    <video src="/media/mb.webm" muted loop></video>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" className="section-padding ms-auto px-lg-0 px-3">
              <div className="pin_item">
                <div>
                  <h2 className="heading">
                    Our work speaks louder than Suuuiiii
                  </h2>
                  <p className="para">
                    Do you have an amazing app idea? Are you ready to find how
                    Coded Pulse can help you achieve it? Reach out today, and
                    let&apos;s solve your digital challenges together.
                  </p>
                  <MagnetButton text="Get Started Now" href="/contact-us" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default WithUs;
