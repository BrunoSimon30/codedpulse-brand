/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MagnetButton from "../MagnetButton";
import { useRef } from "react";
import { useRouter } from "next/router";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/helpers/gsap";

function OurInsights() {
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
            const blogSec = main.current;
            const withUsTl = gsap.timeline({
              scrollTrigger: {
                trigger: blogSec,
                // scroller: ".main_wrapper",
                scrub: true,
                pin: blogSec?.querySelector(".pining_item"),
                start: "top -=200px",
                end: "bottom +100px",
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
                // tl.fromTo(
                //   element.querySelector("img, video"),
                //   { y: "50px" },
                //   { y: "-50px" }
                // );
              });
            }
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

  return (
    <>
      <section className="section-padding bg-purple blogs_section" ref={main}>
        <Container>
          <div className="blog-card">
            <Row>
              <Col lg="6" className="mb-lg-0 mb-4">
                <h2 className="heading">Our <br /> insights</h2>
                <Link href="/about-us" className="btn btn-purple mb-4">Know More</Link>
                <div className="pining_item">
                  <Link href="/insights/about-rebranding" target="_blank" className="bloglink">
                    <div className="video big paral_item">
                      <video
                        src="/media/video4.webm"
                        poster="/images/rectangle372.png"
                        autoPlay
                        muted
                        loop
                      ></video>
                    </div>
                    <div className="flex_between">
                      <div>
                        <h3 className="title">They Don’t Want You To Know These Secrets About Rebranding</h3>
                        <p className="para">Rebranding—just hearing the word might make business owners nervous. It’s like giving your brand a makeover, but with the pressure of keeping it familiar.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg="6">
                <Row>
                  <Col md="12">
                    <Row>
                      <Col md="6">
                        <Link href="/insights/development-risks" target="_blank" className="bloglink">
                          <div className="video halfbig paral_item">
                            <video
                              src="/media/video5.webm"
                              poster="/images/rectangle372.png"
                              autoPlay
                              muted
                              loop
                            ></video>
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">You heard it right!!</h3>
                              <p className="para">When starting a new project, especially in app development, one of the biggest concerns is the risk involved</p>
                            </div>
                          </div>
                        </Link>
                        <Link href="/insights/these-top-trends" target="_blank" className="bloglink">
                          <div className="blog_image paral_item imgblog">
                            <img
                              src="/images/image142.png"

                              alt=""
                            />
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">Your marketing agency</h3>
                              <p className="para">Let’s face it—marketing moves fast, and if your creative agency isn’t keeping up with the latest trends, you’re falling behind</p>
                            </div>
                          </div>
                        </Link>
                        <Link href="/insights/brands-that-listen" target="_blank" className="bloglink">
                          <div className="video halfbig paral_item">
                            <video
                              src="/media/video3.webm"
                              poster="/images/rectangle372.png"
                              autoPlay
                              muted
                              loop
                            ></video>
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">In the modern marketplace,</h3>
                              <p className="para">Let’s dive into why your brand might be going deaf—and why the future</p>
                            </div>
                          </div>
                        </Link>



                        <Link href="/insights/product-roadmap" target="_blank" className="bloglink">
                          <div className="blog_image paral_item imgblog">
                            <img
                              src="/images/image14.png"

                              alt=""
                            />
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">Are you too making...</h3>
                              <p className="para">Imagine you’re on a cross-country road trip.</p>
                            </div>
                          </div>
                        </Link>

                      </Col>
                      <Col md="6">
                        <Link href="/insights/common-financial" target="_blank" className="bloglink">
                          <div className="blog_image paral_item imgblog">
                            <img src="/images/developers.png" alt="" />
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">Experienced developers</h3>
                              <p className="para">What happens when you hire a mobile app development agency</p>
                            </div>
                          </div>
                        </Link>
                        <Link href="/insights/we-use-apps" target="_blank" className="bloglink">
                          <div className="video halfbig paral_item">
                            <video
                              src="/media/main_purpose.webm"
                              poster="/images/rectangle372.png"
                              autoPlay
                              muted
                              loop
                            ></video>
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">What is the main purpose</h3>
                              <p className="para">The aim of UX is to provide the user with an efficient</p>
                            </div>
                          </div>
                        </Link>
                        <Link href="/insights/startup-needs-one" target="_blank" className="bloglink">
                          <div className="blog_image paral_item imgblog">
                            <img
                              src="/images/no-code-MVP.png"

                              alt=""
                            />
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">A no-code MVP is exactly</h3>
                              <p className="para">Instead of waiting months for a development team</p>
                            </div>
                          </div>
                        </Link>
                        <Link href="/insights/cloud-technologies" target="_blank" className="bloglink">
                          <div className="video halfbig paral_item">
                            <video
                              src="/media/app_scaling.webm"
                              poster="/images/rectangle372.png"
                              autoPlay
                              muted
                              loop
                            ></video>
                          </div>
                          <div className="flex_between">
                            <div>
                              <h3 className="title">Application scaling</h3>
                              <p className="para">Creating mobile application backends using services like BaaS</p>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default OurInsights;
