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
        <title>Is your brand deaf? The future belongs to the brands that listen!</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">Is your brand deaf? the future belongs to the brands that listen!</h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>Listening is More Than Just Hearing: It’s an Art</li>
                <li>The Death of the Megaphone: Engagement<br className="d-lg-block d-none" /> Over Broadcast</li>
                <li>Social Listening: Your Brand’s New Superpower</li>
                <li>Feedback is a Goldmine: Stop Ignoring It</li>
                <li>The Future is Agile: Adapt or Get Left Behind</li>
                <li>Personalization: The Pinnacle of Listening</li>
                <li>Listening to Employees: Your Internal<br className="d-lg-block d-none" /> Brand Champions</li>
                <li>The Future Belongs to Brands That Listen—Is<br className="d-lg-block d-none" /> Yours One of Them?</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/brands-that-listen/9.png" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para mb-3">In the modern marketplace, brands are more than just products—they’re personalities, experiences, and, most importantly, voices. But here’s the catch: Are you just shouting into the void, or are you listening? Brands that aren’t tuned in to what their customers are saying are missing out on the most critical conversations. In fact, the future doesn’t belong to the brands with the loudest voice—it belongs to the brands with the sharpest ears.</p>
                <p className="para">Let’s dive into why your brand might be going deaf—and why the future belongs to the brands that listen.</p>
              </div>

              <div className="list_content">
                <h4 className="title">1. Listening is more than just hearing: it’s an art</h4>
                <img src="/images/blogs/brands-that-listen/1.jpg" className="blog_img" alt="" />
                <p className="para">Many brands think they’re listening because they monitor social media comments, track reviews, and occasionally send out surveys. But that’s not listening—that’s just hearing the noise. True listening means tuning in to the emotions, desires, and pain points behind the words. It’s about understanding not just what your customers are saying, but why they’re saying it.</p>
                <p className="para">Great brands don’t just hear feedback; they anticipate it. They use data, insights, and intuition to understand their customers’ needs before they even voice them. It’s about reading between the lines. Are you doing that? If not, you’re falling behind. The brands that dominate tomorrow will be the ones who are mastering this subtle art of active listening today.</p>
              </div>
              <div className="list_content">
                <h4 className="title">2. The death of the megaphone: engagement over broadcast</h4>
                <img src="/images/blogs/brands-that-listen/2.jpg" className="blog_img" alt="" />
                <p className="para">Gone are the days when brands could simply shout their message from the rooftops and hope it stuck. Today, customers demand more. They want to be part of the conversation, not passive listeners. If your brand is still treating marketing like a monologue, you’ve already lost. The future belongs to brands that value dialogue—those that are just as eager to listen as they are to speak.</p>
                <p className="para">True engagement isn’t about how many posts you churn out—it’s about the quality of the interaction. It’s about responding to your audience’s needs in real time, addressing their concerns, and even involving them in your brand’s journey. Brands that foster a genuine two-way conversation are the ones building communities, not just customer bases. And those communities are what will keep you relevant in a market that’s constantly shifting.</p>
              </div>
            </div>
            <img src="/images/blogs/brands-that-listen/big/1.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. Social listening: your brand’s new superpower</h4>
                <img src="/images/blogs/brands-that-listen/3.jpg" className="blog_img" alt="" />
                <p className="para">Social media isn’t just a platform to broadcast your latest products—it’s the modern-day oracle, offering direct insight into the minds of your customers. Social listening—actively monitoring the conversations happening around your brand and industry—gives you a competitive edge that many brands ignore. It’s no longer enough to track vanity metrics like likes and shares; you need to listen to what’s being said in those comments and conversations.</p>
                <p className="para">Social listening is your ticket to understanding emerging trends, identifying potential crises, and seizing new opportunities before your competitors even realize they exist. Brands that master this superpower aren’t just reactive—they’re proactive, stepping into the conversations that matter most. It’s about turning whispers into actionable insights that can shape the future of your business. Don’t let your brand’s deafness keep you in the dark.</p>
              </div>
              <div className="list_content">
                <h4 className="title">4. Feedback is a goldmine: stop ignoring it</h4>
                <img src="/images/blogs/brands-that-listen/4.jpg" className="blog_img" alt="" />
                <p className="para">Collecting feedback is easy—every company does it. But here’s the harsh truth: Most brands gather feedback and do nothing with it. This is like mining gold but leaving it in the dirt. If you’re not actively implementing changes based on what your customers are telling you, you’re not just missing opportunities—you’re actively driving them away.</p>
                <p className="para">Listening to feedback and acting on it separates great brands from mediocre ones. Customers can tell when their voices are being heard—and they can also tell when they’re being ignored. Implementing customer-driven changes not only improves your product, but it also strengthens customer loyalty. After all, nothing feels better than knowing a brand is genuinely listening and evolving based on your input. In the long run, this is how you turn customers into brand advocates.</p>
              </div>
              <div className="list_content">
                <h4 className="title">5. The future is agile: adapt or get left behind</h4>
                <img src="/images/blogs/brands-that-listen/5.jpg" className="blog_img" alt="" />
                <p className="para">In a world where trends change as quickly as they appear, brands that are rigid will quickly fall behind. Agility is the name of the game, and agility starts with listening. Listening to your customers, listening to the market, and even listening to your competitors can give you the insights you need to pivot when necessary. The future doesn’t belong to brands that stay the course; it belongs to those that are constantly fine-tuning their sails to catch the winds of change.</p>
                <p className="para">An agile brand isn’t afraid to make bold moves when the data and feedback demand it. Whether it’s introducing new features, abandoning outdated practices, or completely rebranding, agility keeps you relevant and ahead of the curve. But you can’t be agile if you’re not listening. Brands that treat customer input as a static formality will stagnate, while those that listen deeply and act quickly will flourish.</p>
              </div>
            </div>
            <img src="/images/blogs/brands-that-listen/big/2.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">6. Personalization: the pinnacle of listening</h4>
                <img src="/images/blogs/brands-that-listen/6.jpg" className="blog_img" alt="" />
                <p className="para">Today’s customers expect more than just good service—they expect brands to know them. Personalization is no longer a luxury; it’s a necessity. And you can’t deliver personalization without first listening to your customers. Are you tracking their preferences, behaviors, and feedback to tailor their experience? If not, you’re missing the biggest opportunity to deepen your connection with them.</p>
                <p className="para">True personalization goes beyond using someone’s name in an email—it’s about anticipating their needs and delivering relevant, timely experiences that feel uniquely crafted for them. The brands that succeed are the ones that listen so closely, they know what their customers want before they even have to ask. In a world where consumers are bombarded with choices, personalization is the only way to stand out—and it starts with listening.</p>
              </div>
              <div className="list_content">
                <h4 className="title">7. Listening to employees: your internal brand champions</h4>
                <img src="/images/blogs/brands-that-listen/7.jpg" className="blog_img" alt="" />
                <p className="para">It’s easy to focus on listening to customers, but don’t forget that your employees are your brand’s most valuable asset. If you’re not listening to their feedback, ideas, and concerns, you’re missing out on insights that could transform your brand from the inside out. After all, happy, engaged employees are your best brand advocates, and their insights are often the most overlooked.</p>
                <p className="para">Employees are often on the frontlines of customer interaction, meaning they have a unique perspective on what’s working and what’s not. Encouraging an open dialogue within your team and acting on their feedback not only boosts morale but also improves your brand’s overall customer experience. Listening internally can lead to creative ideas and solutions that you might never hear if you’re not fostering a culture of open communication.</p>
              </div>
              <div className="list_content">
                <h4 className="title">8. The future belongs to brands that listen—is yours one of them?</h4>
                <img src="/images/blogs/brands-that-listen/8.jpg" className="blog_img" alt="" />
                <p className="para">In a world that’s constantly changing, the brands that will thrive are the ones that listen. Not just to what’s loud, but to what’s important. The future of branding is about empathy, agility, and action—all driven by the power of listening. Is your brand truly paying attention, or are you simply going through the motions?</p>
                <p className="para">At Coded Pulse, we understand that listening is more than just hearing words—it’s about turning insights into impact. We help brands tune in, understand, and act on what really matters. Together, we can ensure that your brand isn’t just part of the conversation, but leading it. Let’s make sure your brand is built on a foundation of listening, so it’s ready for whatever the future holds.</p>
              </div>
            </div>
          </Container>
        </section>
      </div >
    </>
  );
}
