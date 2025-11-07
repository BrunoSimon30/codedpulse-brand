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
        <title>You heard it right! You surely can limit development risks!</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">You heard it right! You surely can limit development risks!</h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>Why worry about risks?</li>
                <li>Here is how this can be done!</li>
                <li>What’s the Benefit?</li>
                <li>Ready to Move Forward?</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/development-risks/1.png" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para">When starting a new project, especially in app development, one of the biggest concerns is the risk involved. Many people think that without a clear, fixed budget, the risks are just too high. But guess what, Wallah habibi, you can control and limit these risks, even if your budget isn’t fully defined from the start.</p>
                <p className="para">And it’s not just about the budget—development risks come in many shapes and sizes. You could face tech challenges, feature creep, or unexpected user needs. But here’s the deal: with a solid roadmap and the right team by your side, these risks aren’t as scary as they seem. Instead of stalling out because of uncertainty, you can create a process that allows for flexibility and smart decision-making at every turn. Risk management is an art, and when done right, it transforms roadblocks into opportunities.</p>
              </div>

              <div className="list_content">
                <h4 className="title">1. Why worry about risks?</h4>
                <img src="/images/blogs/development-risks/2.jpg" className="blog_img" alt="" />
                <p className="para">Look, we get it—worrying about risks is only natural, ya’ know? No one wants to deal with unexpected costs or delays, especially when you’re out here trying to build something big. But let us tell you something: with the right approach, you can handle these risks like a boss. There’s no need to slam the brakes on your project just because the budget seems a bit wobbly.</p>
                <p className="para">But here’s the thing—risks are unavoidable. The trick isn’t to eliminate them but to understand and manage them effectively. By identifying potential pitfalls early on, you can create contingency plans and have backup options ready to go. It’s about being proactive, not reactive. Don’t wait for a problem to pop up; anticipate where the challenges could be and prepare for them. That’s the kind of mindset that allows you to keep moving forward, even when things don’t go exactly as planned.</p>
              </div>
              <div className="list_content">
                <h4 className="title">2. Here is how this can be done!</h4>
                <img src="/images/blogs/development-risks/3.png" className="blog_img" alt="" />
                <p className="para">At Coded Pulse, we’ve got this down to a science, fam. Our process not only helps you limit risks but also takes your mobile app ideas and makes them happen. Here’s how we roll:</p>
                <div className="smlist">
                  <h4 className="title">1.	Understanding your project objectives and limitations</h4>
                  <p>First things first, we gotta know what you’re aiming for and what might slow you down. Whether it’s you, your crew, or our squad, everyone needs to be on the same page. This way, the final product isn’t just good—it’s fire. We’ve been doing this for a minute, so trust us when we say, we know how to steer the ship.</p>
                  <p>Identifying your limitations early helps us set realistic expectations and build a timeline that works. Maybe there’s a technical hurdle, or you’ve got a tight deadline—whatever it is, we face it head-on. Understanding your challenges ensures we’re making smart choices from the jump, whether that means focusing on must-have features first or adapting to any external factors like market trends or regulatory requirements. Clear objectives combined with a thorough understanding of limitations are the foundation of a project that delivers.</p>
                  <h4 className="title">2.	Brainstorming solutions and ideas</h4>
                  <p>This is where we let the creativity flow. Brainstorming with you and our people is key. By showing you the latest tech tricks, we help spark ideas that’ll make your app pop. Whether we’re throwing ideas around in a brainstorming sesh, jotting them down in brainwriting, or mapping them out, we’ve got the tools to bring your vision to life, no cap.</p>
                  <p>The goal of brainstorming isn’t just to come up with ideas; it’s to find the solutions that hit the sweet spot between innovation and practicality. We explore every avenue—whether that’s integrating cutting-edge technology or finding a workaround for a budget constraint. And it’s not just about what’s trending now; we look ahead to what’s coming down the line in the digital world so that your app stays ahead of the curve. Together, we’ll pinpoint the winning ideas that push the boundaries of what’s possible.</p>
                  <h4 className="title">3.	Evaluating technical complexity</h4>
                  <p>Let’s be real, not all ideas are a walk in the park. Some are chill, while others are like trying to solve a Rubik’s cube blindfolded. That’s why we break down the tech side of each idea early on. We look at development time, cost, platform compatibility, and user experience. And yeah, we even go the extra mile by doing some research and cooking up mini Proofs of Concept (POCs) to dodge risks. This helps us—and you—zero in on the ideas that are gonna make the biggest impact.</p>
                  <p>Technical complexity can be a dealbreaker if you’re not careful. By evaluating the complexity of your app’s features upfront, we can allocate resources more efficiently and avoid unnecessary delays. From code architecture to API integrations, we assess every aspect of the build to ensure your project runs smoothly. This level of planning is key to avoiding those frustrating moments when a feature turns out to be way harder (or more expensive) to implement than expected. We’ve got the experience to spot these challenges early and help you make informed decisions about which features will be worth the investment.</p>
                  <h4 className="title">4.	Deciding which ideas make the MVP cut</h4>
                  <p>MVP, or Minimum Viable Product, is where we trim the fat. We work tight with you to pick the ideas that really matter, so we can drop something tangible, quick. This way, you see progress, get feedback, and keep pushing towards the goal without wasting time or dough.</p>
                  <p>The MVP isn’t just about getting something out the door fast—it’s about delivering a version of your product that can stand on its own and deliver real value to users. We focus on the core functionalities that solve your users’ most pressing problems, ensuring the MVP is both lean and powerful. This strategic approach means that you get to market faster, start gathering feedback right away, and make improvements based on real user data. In today’s fast-moving digital world, getting a functional MVP out there early can be the difference between success and being left behind.</p>
                  <h4 className="title">5.	Thinking of the conceptual user experience</h4>
                  <p>Before we dive into the design or dev work, we’re already thinking about the user experience. We wanna make sure we’re hitting the nail on the head from day one, so you’re not sweating over costly changes later. We put ourselves in the user’s shoes, figuring out how they’re gonna vibe with the app and what they wanna get out of it.</p>
                  <p>Conceptualizing the user experience early means we’re not just designing for function but for feeling. How will users interact with your app on a day-to-day basis? What emotional response are we aiming for? These are the questions we answer long before any code is written. We use wireframes, journey maps, and user personas to visualize every interaction, ensuring that the final product isn’t just a tool but an experience that people will enjoy using. The more we understand about your users upfront, the smoother the development process will be.</p>
                  <h4 className="title">6.	Designing a tangible user experience</h4>
                  <p>With a clear grip on your goals and any bumps in the road, we jump into the design phase. We whip up user interfaces and mock-ups, keeping it real with you at every step. It’s all about making sure the design speaks your language and hits the mark, so when it’s go time, we’re all in sync.</p>
                  <p>A great user experience goes beyond aesthetics. It’s about creating a seamless interaction between the user and the app, making sure every tap, swipe, and click feels intuitive. During the design process, we also think about accessibility, scalability, and how the interface will look across different devices. By prototyping early and frequently, we allow you to see exactly how the app will function in real-time, giving you plenty of opportunities to provide feedback before we dive into development. That way, we stay on track and deliver a user experience that wows your audience.</p>
                  <h4 className="title">7.	Creating a fully clickable, Hhgh-fidelity prototype</h4>
                  <p>Now, here’s where things get lit. Once the design is locked, we create a fully clickable, high-fidelity prototype. Em, we’re not talking about just a picture—it’s an interactive model that lets us test how the app feels in real life. Our devs use this as a playbook, making sure everything flows smoothly from planning to the final drop.</p>
                  <p>High-fidelity prototypes offer a chance to iron out the details before any major investment in coding. They’re incredibly useful for identifying any UX issues early, from confusing navigation to missing features. This also allows you to share the prototype with stakeholders, investors, or even early adopters, gathering feedback and securing buy-in before the development stage. It’s the bridge between concept and execution, ensuring everyone’s on the same page and that we’re building something users will actually love.</p>
                  <h4 className="title">8.	Getting feedback from users</h4>
                  <p>After the prototype’s in the bag, we don’t just kick back. We get real feedback from real users. This helps us tweak the app and make sure it’s user-friendly as heck. If something’s off, we fix it, so the final product is as tight as it gets.</p>
                  <p>Gathering feedback isn’t a one-time thing; it’s an ongoing process. We use surveys, interviews, and user testing to gather qualitative and quantitative data, giving us a 360-degree view of how the app performs in the real world. This iterative process ensures that we’re not just building based on assumptions—we’re creating a product that’s shaped by real user needs and preferences. The earlier we get this feedback, the fewer revisions and costly changes we’ll need later down the line. It’s all about building a product that works from the get-go.</p>
                </div>
              </div>
            </div>
            <img src="/images/blogs/development-risks/big/1.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. What’s the benefit?</h4>
                <img src="/images/blogs/development-risks/4.jpg" className="blog_img" alt="" />
                <p className="para mb-3">By following these steps, you can move forward with confidence. You don’t have to let an unclear budget hold you back. Plenty of successful projects right here in Dubai and beyond kicked off with some level of budget uncertainty. The key is in how you play the game.</p>
                <p className="para">With the right moves, you can minimize risks, stay within your budget, and see your project through to the finish line. Remember, you’ve got the power to make your project a hit, even if the path isn’t perfectly clear from the jump.</p>
              </div>
              <div className="list_content">
                <h4 className="title">4. Ready to move forward?</h4>
                <img src="/images/blogs/development-risks/5.jpg" className="blog_img" alt="" />
                <p className="para mb-3">So, don’t let the fear of risks keep you from building something dope. With the right mindset and strategy, you can limit development risks and smash your goals. Your dream project is closer than you think, and just like a good cup of karak, it’s worth the grind!</p>
                <p className="para">Taking action is the first step toward transforming your idea into reality. Risks may be part of the journey, but with the right roadmap, support, and planning, you’ll find that they’re far from insurmountable. So, why wait? The longer you hold off, the more chances you’re missing to bring something great into the world. Let’s link up, roll up our sleeves, and build something that leaves a mark. The future of your app is waiting—let’s make it happen!</p>
              </div>

            </div>
          </Container>
        </section>
      </div >
    </>
  );
}
