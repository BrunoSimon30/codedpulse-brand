import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { gsap } from "@/helpers/gsap";
import { Button, Card, Col, Container, FloatingLabel, Form, Nav, Row, Tab } from "react-bootstrap";


export default function InsightsPages() {
  const sideListRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const blogImgRefs = useRef<HTMLImageElement[]>([]);
  const firstChildRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blogWrap2 = document.querySelector('.blog_wrap') as HTMLElement;

    if (blogWrap2) {
      window.addEventListener('scroll', () => {
        const rect = blogWrap2.getBoundingClientRect();

        if (rect.top <= 0 && rect.bottom > 2000) {
          blogWrap2.classList.add('active');
        } else {
          blogWrap2.classList.remove('active');
        }
      });
    }
    const sections = gsap.utils.toArray(".list_content") as HTMLElement[];
    const links = gsap.utils.toArray(".side_list li") as HTMLElement[];
    sections.forEach((section, i) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveLink(i),
          onEnterBack: () => setActiveLink(i),
        },
      });
    });
    function setActiveLink(index: number) {
      links.forEach((link, i) => {
        if (i === index) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
     // Scroll to corresponding section when list item is clicked
     links.forEach((link, i) => {
      link.addEventListener("click", () => {
        const section = sections[i];
        gsap.to(window, {
            scrollTo: {
              y: section,
              offsetY: 100,
            },
            duration: 1,
            ease: "power2.inOut",
        });
      });
    });
    const sideListTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current!,
        start: "top +=200px",
        end: "bottom bottom",
        pin: sideListRef.current!,
        pinSpacing: false,
        scrub: true,
        markers: false,
        // onUpdate: (self) => {
        //   const progress = self.progress;
        //   const topValue = 100 + progress * 100;
        //   gsap.set(sideListRef.current, { top: `${topValue}px` });
        // },
      },
    });

    blogImgRefs.current.forEach((imgRef) => {
      if (imgRef) {
        gsap.timeline({
          scrollTrigger: {
            trigger: imgRef,
            toggleClass: { targets: sideListRef.current, className: "hidelist" },
            start: "top +=60%",
            end: "bottom +=180px"
            // end: "bottom bottom",
            // onEnter: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "-100%",
            //     duration: 0.5,
            //     ease: "power1.out",
            //   });
            // },
            // onLeave: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "0",
            //     duration: 0.5,
            //     ease: "power1.in",
            //   });
            // },
            // onEnterBack: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "100%",
            //     duration: 0.5,
            //     ease: "power1.out",
            //   });
            // },
            // onLeaveBack: () => {
            //   gsap.to(sideListRef.current, {
            //     y: "0",
            //     duration: 0.5,
            //     ease: "power1.in",
            //   });
            // },
          },
        });
      }
    });

    gsap.to(firstChildRef.current, {
      scrollTrigger: {
        trigger: firstChildRef.current!,
        start: "top top",
        toggleClass: { targets: firstChildRef.current, className: "add-top" },
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>5 common financial pitfalls in app development and how to avoid them</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">5 common financial pitfalls in app development and how to avoid them</h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>Underestimating user requirements</li>
                <li>Sharing vague or incomplete scoping</li>
                <li>Overloading the app with features <br className="d-lg-block d-none" /> before launch</li>
                <li>Skipping hypothesis testing might<br className="d-lg-block d-none" /> drain your budget</li>
                <li>Overcharging for maintenance and support</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/common-financial/6.jpg" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para mb-3">Experienced developers are aware of the common mistakes in the app development and know ways of avoiding them. They understand the potential of certain frameworks they adopt to ensure the efficient running of the application. They also know how to accelerate the overall process by starting work on the backend before the development. They take the user-centric approach that helps them design the interface with user habits in mind. This way, users can easily and quickly accomplish their goals. With this approach, they avoid the redesigning process, helping them save valuable time and costs of their clients, including unnecessary financial expenditure.</p>
                <p className="para">What happens when you hire a mobile app development agency that initially quotes low prices but then demands more, even after a fixed amount for specific tasks has been agreed upon? Keep reading this post to know what mistakes you may or might have made while working with an app development agency that can catch you by surprise.</p>
              </div>
              <h4 className="title">5 Costly financial pitfalls in app development</h4>
              <p className="para">Mistakes are proof that you are trying. Yes, making mistakes is the perfect way to learn something and do it again perfectly. It doesn't mean you should keep spending on your app development just because the agency, which initially quoted low prices, is now demanding more as you're deep into the project and have already invested heavily. Let's unveil the common mistakes tech leaders make that incur needless spending when they get trapped by so-called app development agencies.</p>

              <div className="list_content">
                <h4 className="title">1. Underestimating user requirements</h4>
                <img src="/images/blogs/common-financial/1.png" className="blog_img" alt="" />
                <p className="para">Underestimating user requirements has been reported as the common problem tech leaders may often face. When hiring services of an agency that might not fully understand or address your project requirements, the app built doesn’t you’re your expectations. This is a serious oversight that can lead to expensive revisions or updates after development of the app. </p>
                <p className="para">You can avoid this issue by ensuring that the agency you’re working with performs thorough user research and has a good grip over your target audience’s needs. At Coded Pulse, we ensure clear communication of all requirements, and we do this by having detailed discussions to ensure everything is covered. We rely more on user feedback and timely test the app so we can spot potential issues early. You can avoid this issue by focusing on a detailed planning and regular reviews, helping you reduce the risk of expensive adjustments.</p>
              </div>
              <div className="list_content">
                <h4 className="title">2. Sharing vague or incomplete scoping</h4>
                <img src="/images/blogs/common-financial/2.jpg" className="blog_img" alt="" />
                <p className="para">Providing a broad or unclear project plan can lead to extra costs later on. Even some app development agencies do this intentionally. Although this happens usually from the client’s end when they don’t provide comprehensive initial details, which are too general or missing. However, agencies may engage in this by forwarding vague or incomplete plan, and move forward. Ultimately, even deep changes are needed, resulting in more money just because of poor app management. </p>
                <p className="para">You can avoid this by ensuring the project plan or scope is comprehensive from the very beginning. At Coded Pulse, we craft a clear outline of everything that will be included, such as features, timelines, and costs. We ensure both “we’ and you decide on every detail and write down them on an official agreement before its signs. This way, we prevent surprises and help you manage your money more effectively.</p>
              </div>
            </div>
            <img src="/images/blogs/common-financial/big/1.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. Overloading the app with features before launch</h4>
                <img src="/images/blogs/common-financial/3.png" className="blog_img" alt="" />
                <p className="para">Although the client wants to make a project perfect from start to end, the service provider is responsible for not supporting this idea. Instead, they need to convince the client that the technology evolves more rapidly than new iPhones are released. Inexperienced agencies or app developers may even spend years on making projects perfect instead of taking the app on the trial stage soon. The initially useful yet trendy functionalities of the app may become outdated and is no longer needed by the app’s target audience. Ultimately, they demand more, saying the current technology no longer works and a new one is needed. This expensive mistake in app development can catch you by surprise, and in this way, you keep draining money continuously.</p>
                <p className="para">An expert yet experienced development agency like Coded Pulse moves in stages: they first identify your project’s core value, build initial features, launch the app early, gather feedback, and refine the application based on that and the market requirements. This proven approach benefits you in a way that you meet your needs and make the first profit soon.</p>
              </div>
              <div className="list_content">
                <h4 className="title">4. Skipping hypothesis testing might drain your budget</h4>
                <img src="/images/blogs/common-financial/4.jpg" className="blog_img" alt="" />
                <p className="para">Ideas you share with the agency you are working with are great. But the thing is that those ideas need timely refinement and deployment. Instead, an app development agency with untrustworthy motives eagerly undertakes your great ideas but might neglect the essential stage of hypothesis testing. This way, you will definitely miss the interests of your target audience and lose the money invested in the project. </p>
                <p className="para">Neglecting the hypotheses testing stage will mean you risk building a project that your users don’t need and that won’t lead to a great ROI. Even some clients save on the testing stage and have to pay extra during development.</p>
                <p className="para">At Coded Pulse, we timely test hypotheses to help you understand that your ideas have high demand and your project will bring profit to the business. We do this by analyzing the market, examining needs and preferences of your app users, present assumptions, launch the project for test, and check the users’ reaction. This approach helps our developers work on areas where improvements are needed.</p>
              </div>
              <div className="list_content">
                <h4 className="title">5. Overcharging for maintenance and support</h4>
                <img src="/images/blogs/common-financial/5.jpg" className="blog_img" alt="" />
                <p className="para">Once your app is launched, it will likely need expert ongoing maintenance and support to fix bugs, update features, and ensure everything runs efficiently. Agencies may charge higher for this support after the app is launched. They might also leave your application unsupported, and when you start facing problems, you may have to pay additional charges for assistance. You need to address these details upfront, helping you avoid being financially trapped in unexpected costs.</p>
                <p className="para">You can prevent this by ensuring you have a clear understanding of the maintenance and support costs mentioned in your agreement. So, do this before you start the project. At Coded Pulse, we provide a detailed explanation of everything that will be included in the support package by mentioning all charges that might apply. We further ensure you understand if routine updates or bug fixes are covered without charging extra.</p>
                <p className="para"><i>Navigating the costly mistakes or issues of app development requires you to have some basic knowledge in how to hire an agency. At Coded Pulse, we understand the common mistakes that can lead an agency to take extra money out of your pocket. These mistakes are several, not limited to those we have presented here. With our proven approach, we ensure a clear project scope is shared, hypothesis is tested, transparent support costs are quoted, and thorough user research is conducted. Partnering with us means you manage your budget effectively and have no costly surprises. </i></p>
                <p className="para"><i>Ready to get your unique app idea refined and transform it into a successful product without falling into these financial traps? Contact <a href="/" className="fw-700 text-primary">Coded Pulse</a> today to embark on a seamless development journey and bring your vision to life with confidence.</i></p>
              </div>
            </div>

          </Container>
        </section>
      </div >
    </>
  );
}
