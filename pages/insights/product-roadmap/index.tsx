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
        <title>Are you too making mistakes while constructing your digital product roadmap?</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">Are you too making mistakes while constructing your digital product roadmap?</h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>Start with the End in Mind</li>
                <li>Teamwork Makes the Dream Work</li>
                <li>Prioritize Like a Boss Ah! We Meant: <br className="d-lg-block d-none" /> Focus on What Matters</li>
                <li>Stay Flexible as No One Likes a Stiff</li>
                <li>Make It Pretty Because Boring Sucks!</li>
                <li>Wrap It Up: The Road Ahead Is Definitely Yours!</li>
                <li>Want to Bump into Something Like This?</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/product-roadmap/1.jpg" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para mb-3">Imagine you’re on a cross-country road trip. You wouldn’t just jump in the car and start driving without a map or a plan, right? The same goes for building a digital product—without a well-thought-out roadmap, you’re likely to end up lost, frustrated, and far from where you intended.</p>
                <p className="para mb-3">A poorly constructed roadmap not only costs time but also leads to wasted resources, missed opportunities, and failed launches. It’s easy to get caught up in the excitement of an idea, only to hit roadblocks later because you didn't plan thoroughly from the start. A roadmap acts as your compass, ensuring everyone involved knows where they’re headed and why. Skipping this step is like driving blindfolded—it’s dangerous and almost guarantees you'll crash before reaching your destination.</p>
                <p className="para">Roadmaps work best when both sides bring their strengths—clients understand their users, and agencies handle the technical side. When aligned, they can achieve great results. This roadmap? It’s the difference between “just another product” and “the next big thing.</p>
              </div>

              <div className="list_content">
                <h4 className="title">1. Start with the end in mind: what’s the dream?</h4>
                <img src="/images/blogs/product-roadmap/2.jpg" className="blog_img" alt="" />
                <p className="para">First thing first! Before you dive into the nitty-gritty, take a moment. Close your eyes (but not for too long, you’re reading) and picture the end result. What does success look like? Is it world domination (kidding, sort of), or is it solving a problem that no one else has cracked? This overarching vision is your North Star—it keeps everyone focused on the ultimate goal, even when you’re deep in the weeds of development.</p>
                <p className="para"><i>Think of it as the last episode of a binge-worthy series. Everything you do should lead to that epic finale where your product shines.</i></p>
                <p className="para">Having a crystal-clear vision also helps to align your team. When everyone understands the desired outcome, they can contribute in ways that push the project forward. It also makes decision-making easier—when faced with tough choices, refer back to the ultimate goal. Will this decision get you closer to that shining vision, or is it a distraction? Your North Star should guide every step of the process, from feature prioritization to technical decisions.</p>
              </div>
              <div className="list_content">
                <h4 className="title">2. Teamwork makes the dream work: collaborate like a pro</h4>
                <img src="/images/blogs/product-roadmap/3.jpg" className="blog_img" alt="" />
                <p className="para">Here’s the deal: You know your audience, but your development team knows the tech. The magic happens when you bring these two perspectives together. Think of it like baking a cake—you bring the ingredients (your deep knowledge of what your users need), and the dev team has the recipe and the oven. Together, you create something that’s not just good—it’s delicious. A collaborative roadmap session is like a jam session for a band. Everyone brings their own expertise, and when it all comes together, you’ve got a hit on your hands. Regular check-ins and updates ensure that you’re all playing in harmony, even when the project hits a few sour notes.</p>
                <p className="para">True collaboration doesn’t just happen during the initial meetings; it’s a continuous process throughout the project. Regular brainstorming sessions, transparent communication, and a shared understanding of both the technical and user-focused goals ensure that every decision made contributes to the product’s success. Misalignment between teams is a common reason why projects falter, so make collaboration a priority, not an afterthought.</p>
              </div>
            </div>
            <img src="/images/blogs/product-roadmap/big/1.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. Prioritize like a boss ah! we meant: focus on what matters</h4>
                <img src="/images/blogs/product-roadmap/4.jpg" className="blog_img" alt="" />
                <p className="para mb-3">Okay, now you’ve got a list of ideas longer than your grocery list before a holiday dinner. Time to cut it down. Not every feature is a must-have. Some are nice-to-haves, and others are just plain fluff. Your job is to figure out which features will make your product sing. Use frameworks like the MoSCoW method (Must have, Should have, Could have, Won’t have) to sort out the essentials from the extras.</p>
                <p className="para"><i>Think of it like packing for a trip: Do you really need five pairs of shoes, or can you make do with two? Same logic applies here.</i></p>
                <p className="para mb-3">Prioritization doesn’t end with the first draft of your roadmap. As the project progresses, new ideas or challenges may emerge, and you’ll need to reassess and re-prioritize. Being too rigid can result in wasted effort on features that no longer align with your evolving goals or user needs. Keep revisiting your priorities and be willing to make tough calls—what was once a ‘Must have’ might turn into a ‘Could have’ later down the road. Stay nimble and always focus on the features that deliver the most value.</p>
              </div>
              <div className="list_content">
                <h4 className="title">4. Stay flexible as no one likes a stiff</h4>
                <img src="/images/blogs/product-roadmap/5.jpg" className="blog_img" alt="" />
                <p className="para mb-3">Here’s the truth—things are going to change. Maybe the tech shifts, maybe your users want something different, or maybe you have a stroke of genius halfway through. That’s okay. In fact, it’s great! It means you’re responsive and adaptable—a real innovator. Your roadmap should be as flexible as a yoga instructor on a good day. Adjust, pivot, and keep moving forward.</p>
                <p className="para"><i>It’s like driving in the city: sometimes you’ve got to take a detour, but as long as you keep heading towards your destination, you’re golden.</i></p>
                <p className="para mb-3">Flexibility is also key when it comes to managing timelines and resources. Deadlines might need to shift, new team members may join, and unforeseen technical challenges could arise. A flexible roadmap allows you to address these hiccups without throwing the entire project into chaos. It’s about keeping your eye on the big picture while adapting to the present moment, ensuring that the quality of your product remains top-notch without sacrificing long-term goals.</p>
              </div>
              <div className="list_content">
                <h4 className="title">5. Make it pretty because boring sucks!</h4>
                <img src="/images/blogs/product-roadmap/6.jpg" className="blog_img" alt="" />
                <p className="para">Nobody likes a wall of text. Let’s be honest—lists are boring. But visuals? They’re engaging. That’s where visual tools come in. Whether it’s a slick Gantt chart or a mind map that lays out all the features, visualizing your roadmap makes it easier to understand and more exciting to follow. It’s like turning that dusty old map into a high-tech GPS with turn-by-turn directions.</p>
                <p className="para">A visually appealing roadmap doesn’t just make the process more enjoyable; it helps communicate your vision more effectively to stakeholders. Investors, team members, and even clients will grasp the scope and potential of the project more quickly when they can see it laid out in a compelling format. Plus, visuals help to break down complex information into digestible chunks, making sure everyone is on the same page and fully engaged throughout the development cycle.</p>
              </div>
            </div>
            <img src="/images/blogs/product-roadmap/big/2.webp" className="blog_img" alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">6. Wrap it up: the road ahead is definitely yours!</h4>
                <img src="/images/blogs/product-roadmap/7.jpg" className="blog_img" alt="" />
                <p className="para">Setting up a digital product roadmap isn’t just a task to check off your list—it’s the key to your product’s success. It’s what turns a great idea into a real, tangible product that users love. So, make it count. Be strategic, stay flexible, and keep your eyes on that blockbuster ending you’re aiming for. This is your roadmap to success, and the journey is just beginning.</p>
                <p className="para">Your roadmap isn’t set in stone; it’s a living, breathing document that will evolve as you and your team discover new opportunities, face challenges, and refine your ideas. With the right roadmap, you can navigate the winding path of digital product development confidently, knowing that every twist and turn brings you closer to the success you envisioned. Ready to hit the road?</p>
              </div>
              <div className="list_content">
                <h4 className="title">7. Want to bump into something like this?</h4>
                <img src="/images/blogs/product-roadmap/8.jpg" className="blog_img" alt="" />
                <p className="para mb-3">If this sounds like the kind of journey you want to embark on, but you need a bit of guidance, that’s where Coded Pulse comes in. We’re all about turning your big ideas into beautifully designed, user-focused digital products. Let’s get your roadmap off the ground and your product into the hands of the people who need it.</p>
                <p className="para mb-3">We specialize in creating dynamic, well-structured roadmaps that cater to your unique needs and help transform your vision into reality. Whether you’re at the idea stage or knee-deep in development, we’re here to steer you in the right direction. Contact Coded Pulse today, and let’s </p>
                <p className="para"><a href="mailto:Letstalk@codedpulse.co">Contact Coded Pulse</a> today, and let’s make something amazing together.</p>
              </div>
             
            </div>
          </Container>
        </section>
      </div >
    </>
  );
}
