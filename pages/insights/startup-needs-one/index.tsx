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
        <title>What is a no-code mvp, and why your startup needs one?</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">What is a no-code MVP, and why your startup needs one?</h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>What is a No-code MVP? </li>
                <li>Speed to Market: Don’t Wait, Innovate </li>
                <li>Cost Efficiency: Save Money, Maximize Resources </li>
                <li>Test and Validate: Gather Feedback Early </li>
                <li>Focus on What Matters: Iterate and Improve </li>
                <li>Accessible to Non-Technical Founders </li>
                <li>It’s Time to Embrace No-code MVPs </li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/startup-need/8.jpg" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para">Startups are all about speed and efficiency. You’ve got a brilliant idea, but the journey from concept to launch can feel like a mountain to climb, especially when resources are tight. That’s where the No-code MVP (Minimum Viable Product) comes in. If you’re still developing your product the traditional way, you’re losing valuable time and potentially money. Here’s why a No-code MVP might be the game-changer your startup needs.</p>
              </div>

              <div className="list_content">
                <h4 className="title">1. What is a no-code MVP? </h4>
                <img src="/images/blogs/startup-need/1.jpg" className="blog_img" alt="" />
                <p className="para">A No-code MVP is exactly what it sounds like—a product that doesn’t require traditional coding to build its first version. It’s a streamlined, working prototype of your product that you can quickly develop using no-code platforms. These platforms, like Bubble, Webflow, and Airtable, provide tools and templates that allow you to build functional apps, websites, or software without writing a single line of code. In short, it’s the fastest way to bring your idea to life.</p>
                <p className="para">Instead of waiting months for a development team to create your MVP, no-code tools let you move at lightning speed. You can focus on the design, functionality, and user experience without worrying about complex back-end processes. This means you can test your ideas in real time, iterate quickly, and deliver a functional product to your users much faster than traditional methods.</p>
              </div>
              <div className="list_content">
                <h4 className="title">2. Speed to market: don’t wait, innovate </h4>
                <img src="/images/blogs/startup-need/2.jpg" className="blog_img" alt="" />
                <p className="para">In the startup world, timing is everything. The quicker you can get your MVP out into the market, the sooner you can validate your idea, gather feedback, and make improvements. With a No-code MVP, you’re cutting down on development time significantly. Traditional development can take months, if not longer, while a No-code MVP can be built and launched in weeks, if not days. That’s a serious advantage in today’s fast-moving business landscape.</p>
                <p className="para">Moreover, launching quickly gives you a competitive edge. It allows you to test the waters, secure early adopters, and establish your brand before competitors even have time to react. By the time they’re ready to launch, you’ve already iterated on user feedback and improved your product, positioning yourself as a market leader. Don’t let lengthy development times slow you down—embrace the speed of no-code.</p>
              </div>
            </div>
            <img src="/images/blogs/startup-need/big/1.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. Cost efficiency: save money, maximize resources </h4>
                <img src="/images/blogs/startup-need/3.jpg" className="blog_img" alt="" />
                <p className="para">Building a product from scratch with a team of developers is expensive. For early-stage startups with limited budgets, this can be a major obstacle. A No-code MVP offers a much more cost-effective solution. You don’t need a large team of developers or a huge budget to create a functional product. No-code platforms allow you to get your MVP up and running without breaking the bank, giving you more financial runway to focus on growth and marketing.</p>
                <p className="para">The cost savings don’t stop at development either. With a No-code MVP, you’re also saving on the maintenance and updates that come with traditional coding. You can make adjustments, add features, and refine your product yourself—no need to hire a developer every time you want to make a change. This flexibility allows you to stay lean, agile, and focused on what really matters: scaling your business.</p>
              </div>
              <div className="list_content">
                <h4 className="title">4. Test and validate: gather feedback early </h4>
                <img src="/images/blogs/startup-need/4.jpg" className="blog_img" alt="" />
                <p className="para">The main purpose of an MVP is to validate your idea and see how the market responds. With a No-code MVP, you can gather feedback quickly, allowing you to test your product with real users sooner than if you were to wait for a fully coded version. This feedback is crucial—it helps you refine your idea, make improvements, and ensure you’re building something people actually want.</p>
                <p className="para">Early user testing also allows you to spot potential issues before they become major problems. It gives you the chance to pivot or adjust your offering based on real-world data, rather than assumptions. By launching a No-code MVP, you can gather meaningful insights, tweak your product, and validate your business model—all without sinking time and money into a fully-developed solution that might not resonate with your audience.</p>
              </div>
              <div className="list_content">
                <h4 className="title">5. Focus on what matters: iterate and improve </h4>
                <img src="/images/blogs/startup-need/5.jpg" className="blog_img" alt="" />
                <p className="para">No-code tools free you from the technical complexity of traditional development, allowing you to focus on what really matters: your product and your users. You’re not bogged down by backend development issues, which means you can spend more time gathering feedback, improving your MVP, and ensuring that your product solves a real problem.</p>
                <p className="para">This iterative process is what makes no-code development so powerful. Once your MVP is live, you can make adjustments on the fly, testing different versions of features or designs without needing a whole development cycle. You can quickly adapt to your users' needs and refine your product continuously, staying ahead of the competition and keeping your product relevant.</p>
              </div>
            </div>
            <img src="/images/blogs/startup-need/big/2.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">6. Accessible to non-technical founders </h4>
                <img src="/images/blogs/startup-need/6.jpg" className="blog_img" alt="" />
                <p className="para">Not every startup founder has a technical background, and that’s okay. With no-code platforms, you don’t need to be a developer to bring your idea to life. No-code tools are designed to be user-friendly, making it possible for non-technical founders to take full control of their product development. This means you can move from idea to execution without the need for complex coding knowledge, making entrepreneurship more accessible to everyone.</p>
                <p className="para">Plus, by handling the initial build yourself, you maintain complete creative control over your MVP. You can experiment, iterate, and launch without being dependent on a third-party developer to bring your vision to life. No-code empowers you to be hands-on, giving you the freedom to turn your ideas into reality, no matter your technical skills.</p>
              </div>
              <div className="list_content">
                <h4 className="title">7. It’s time to embrace no-code MVPs</h4>
                <img src="/images/blogs/startup-need/7.jpg" className="blog_img" alt="" />
                <p className="para">If you’re still hesitating about whether to take the no-code route, think about what’s at stake. In today’s fast-paced market, startups need to be agile, responsive, and cost-effective. A No-code MVP allows you to launch faster, save money, and test your idea without the long wait and high costs of traditional development.</p>
                <p className="para">At Coded Pulse, we believe in giving startups the tools they need to succeed, and a No-code MVP is the perfect way to get started. Whether you’re launching your first product or iterating on an existing one, a No-code MVP allows you to test, learn, and grow faster than ever before. So why wait? Let’s take your startup from idea to reality with a No-code MVP that’s built for success.</p>
              </div>
            </div>
          </Container>
        </section>
      </div >
    </>
  );
}
