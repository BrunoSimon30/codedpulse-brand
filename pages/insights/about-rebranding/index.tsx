/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { gsap } from "@/helpers/gsap";
import { Container } from "react-bootstrap";

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
      // const links = gsap.utils.toArray(".side_list li") as HTMLElement[];
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
        <title>They don&nbsp;t want you to know these secrets about rebranding</title>
      </Head>
      <div>
        <section className="hero-section pb-0 text-center">
          <Container>
            <h4 className="heading hero-big">
            They don&nbsp;t want you to know these secrets about rebranding
            </h4>
          </Container>
        </section>

        <section className="section-padding pt-0 blog_wrap">
          <Container ref={containerRef}>
            <div className="side_list" ref={sideListRef}>
              <ul>
                <li>Rebranding Is Like Magic</li>
                <li>It Demands Time</li>
                <li>Strategy Is Key</li>
                <li>Don&nbsp;t Lose Your Brand Identity</li>
                <li>Starting Fresh</li>
                <li>Know Your Audience</li>
                <li>Consistency Is Key</li>
                <li>Test Your Rebrand </li>
                <li>The Hidden Benefits of a Strategic Rebrand</li>
                <li>The Power of Storytelling</li>
                <li>Think Long</li>
                <li>Metrics</li>
                <li>How We Are Doing It Amazingly!</li>
              </ul>
            </div>
            <div className="right_half">
              <img src="/images/blogs/about-rebranding/big/1.webp" className="blog_img" alt="" />
              <div className="first_msg">
                <p className="para">
                  Rebranding—just hearing the word might make business owners
                  nervous. It&nbsp;s like giving your brand a makeover, but with
                  the pressure of keeping it familiar. While agencies may
                  present rebranding as the key to staying relevant, they often
                  leave out the details. If you&nbsp;ve ever felt like
                  there&nbsp;s more to rebranding than what you&nbsp;re being
                  told, you&nbsp;re right. Let&nbsp;s uncover the secrets
                  agencies might not share with you.
                </p>
              </div>

              <div className="list_content">
                <h4 className="title">
                  1. Rebranding is like magic, but not without planning
                </h4>
                <img src="/images/blogs/about-rebranding/2.jpg" className="blog_img" alt="" />
                <p className="para">
                  Rebranding your business is like performing magic. It can
                  transform your brand, attract new customers, and keep your
                  loyal ones engaged. But behind the scenes, it&nbsp;s not about
                  pulling a rabbit out of a hat. It&nbsp;s about strategic
                  planning, creativity, and insight. Let&nbsp;s take a look at
                  what marketing firms might not tell you about the process.
                </p>
                <p className="para">However, this magic show requires a lot more than just one trick. It’s about setting long-term goals, identifying the challenges you want to overcome, and ensuring that your new brand identity aligns with your future ambitions. Magic doesn’t happen overnight, and neither does an effective rebrand. </p>
              </div>
              <div className="list_content">
                <h4 className="title">2. It demands time, effort & money</h4>
                <p className="para">
                  Rebranding can be expensive, and not just in terms of money.
                  The financial cost is one thing, but consider the time,
                  energy, and resources involved. Many agencies might focus on
                  the new logo or website, but they might not mention the long
                  hours, potential disruptions to your business, and the stress
                  it can bring to your team. Rebranding isn&nbsp;t just a quick
                  refresh—it&nbsp;s a full commitment. Be ready for the journey.
                </p>
                <p className="para">In addition to financial investment, a rebrand often requires additional training for your team, updating digital assets, and sometimes even restructuring internal processes to align with the new brand. The more complex your business, the more resources it will demand.</p>
              </div>
            </div>
            <img
              src="/images/blogs/about-rebranding/big/2.webp"
              className="blog_img"
              alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">3. Strategy is key</h4>
                <img src="/images/blogs/about-rebranding/3.jpg" className="blog_img" alt="" />
                <p className="para">
                  Your local firm might talk about new logos, colors, and
                  taglines. But here&nbsp;s the truth: none of it matters
                  without a strong strategy. Rebranding isn&nbsp;t just about
                  changing your look; it&nbsp;s about understanding who you are,
                  who your customers are, and how you want to be seen. Without a
                  clear strategy, all those visual changes won&nbsp;t last.
                </p>
                <p className="para">Moreover, a good strategy should focus on long-term growth, market positioning, and customer loyalty. It’s not just about looking good now, but about remaining relevant in the future and ensuring that your brand stands out in a crowded marketplace.</p>
              </div>
              <div className="list_content">
                <h4 className="title">
                  4. Don&nbsp;t lose your brand identity
                </h4>
                <img src="/images/blogs/about-rebranding/7.jpg" className="blog_img" alt="" />
                <p className="para">
                  Trends come and go, and while they can be tempting, they can
                  also make you lose what makes your brand unique. Some agencies
                  might push for trendy rebrands, but the risk is losing your
                  brand&nbsp;s core identity. The best rebrands evolve your
                  brand while keeping what makes it special.
                </p>
                <p className="para">It’s crucial to find a balance between innovation and tradition. Successful rebrands adapt to changing markets without abandoning the principles that made the brand recognizable and trustworthy in the first place. Stay true to your roots while embracing change.</p>
              </div>



              <div className="list_content">
                <h4 className="title">5. Starting fresh with your visuals</h4>
                <p className="para">
                  Rebranding can mean starting over with your visual identity.
                  That might include saying goodbye to a logo you&nbsp;ve had
                  for years. The goal is to make sure your visuals match your
                  new strategy. It might be tough to let go of the old look, but
                  sometimes a fresh start is what your business needs.
                </p>
                <p className="para">Its not about a new logo only, it could mean revamping everything from your website design to packaging, signage, and even your business’s physical environment. A strong visual identity supports and enhances your new strategy, sending a clear and consistent message to your audience.</p>

              </div>
              <div className="list_content">
                <h4 className="title">6. Know your audience</h4>
                <img src="/images/blogs/about-rebranding/4.jpg" className="blog_img" alt="" />
                <p className="para">
                  Skipping audience research is like going on a road trip
                  without a map. Some agencies might rush through this part, but
                  understanding your audience is crucial. A successful rebrand
                  resonates with the people who matter most—your customers.
                  Don&nbsp;t skip this step if you want your rebrand to succeed.
                </p>
                <p className="para">Knowing your audience helps shape your messaging, tone, and even the platforms you use for communication. It’s about crafting a brand that speaks directly to their needs, desires, and problems, making them feel understood and valued. Audience insights are key to a successful rebrand.</p>
              </div>
            </div>
            <img
              src="/images/blogs/about-rebranding/big/3.webp"
              className="blog_img"
              alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">7. Consistency is key</h4>
                <img src="/images/blogs/about-rebranding/8.jpg" className="blog_img" alt="" />
                <p className="para">
                  Consistency across all your brand&nbsp;s visuals and messaging
                  is crucial. It&nbsp;s not enough to have a great logo or
                  website if your social media doesn&nbsp;t match. Every
                  interaction with your audience should reflect your brand,
                  creating a seamless experience that builds trust.
                </p>
                <p className="para">Think of consistency as the glue that holds your brand together. From email marketing to customer service, your brand should deliver the same message and experience everywhere. This builds recognition and strengthens your brand’s credibility over time.</p>
              </div>
              <div className="list_content">
                <h4 className="title">
                  8. Test your rebrand before the big launch
                </h4>
                <p className="para">
                  Before you launch your new brand, test it with a small group
                  first. This allows you to gather feedback and make adjustments
                  before going live. It&nbsp;s a smart way to ensure your
                  rebrand connects with your audience.
                </p>
                <p className="para">By testing your rebrand, you can uncover any potential issues before they become major problems. Small tweaks can make a big difference, and this step will help you perfect your rebrand to ensure a smooth and successful launch with minimal risk.</p>
              </div>

              <div className="list_content">
                <h4 className="title">
                  9. The hidden benefits of a strategic rebrand
                </h4>
                <p className="para">
                  A strategic rebrand can open new opportunities, like reaching
                  new markets or forming new partnerships. These benefits might
                  not be obvious at first, but they&nbsp;re valuable as your
                  brand evolves. Don&nbsp;t overlook these hidden advantages.
                </p>
                <p className="para">It can also reposition you within your industry, allowing you to redefine your place in the market. A strong rebrand can lead to greater credibility, increased customer loyalty, and even a boost in employee engagement as they rally around the refreshed brand vision.</p>
              </div>
              <div className="list_content">
                <h4 className="title">10. The power of storytelling</h4>
                <img src="/images/blogs/about-rebranding/5.png" className="blog_img" alt="" />
                <p className="para">
                  Your brand isn&nbsp;t just about what you sell—it&nbsp;s about
                  the story you tell. A strong rebrand weaves your story into
                  every part of your brand, creating a deeper connection with
                  your customers.
                </p>
                <p className="para">Storytelling is a tool that humanizes your brand, making it more relatable. Whether it’s sharing your brand’s origins, mission, or vision for the future, compelling stories foster an emotional connection, setting you apart from competitors and building stronger customer loyalty.</p>
              </div>
            </div>
            <img
              src="/images/blogs/about-rebranding/big/4.webp"
              className="blog_img"
              alt=""
              ref={(el) => {
                if (el && !blogImgRefs.current.includes(el)) {
                  blogImgRefs.current.push(el);
                }
              }}
            />
            <div className="right_half">
              <div className="list_content">
                <h4 className="title">
                  11. Think long-term about brand loyalty
                </h4>
                <img src="/images/blogs/about-rebranding/6.png" className="blog_img" alt="" />
                <p className="para">
                  Rebranding can refresh your image, but it can also affect your
                  loyal customers. It&nbsp;s important to find a balance between
                  attracting new customers and keeping your existing ones. A
                  successful rebrand strengthens your relationship with all your
                  customers.
                </p>
                <p className="para">It’s crucial to communicate openly with your loyal customer base during a rebrand, explaining why the changes are happening and how they will benefit. This ensures that your long-term customers feel included in the process and stay loyal to your evolving brand.</p>
              </div>
              <div className="list_content">
                <h4 className="title">12. Metrics: measuring success</h4>
                <p className="para">
                  The success of a rebrand isn&nbsp;t just about the initial
                  excitement. It&nbsp;s measured by metrics like engagement
                  rates, brand awareness, and website traffic. These numbers
                  show how well your rebrand is performing and guide your next
                  steps.
                </p>
                <p className="para">Monitoring these metrics regularly will also help you fine-tune your strategies post-launch, ensuring continuous improvement. Look at both qualitative and quantitative feedback to fully understand the impact of your rebrand and drive future marketing decisions.</p>
              </div>
              <div className="list_content">
                <h4 className="title">13. How we are doing it amazingly!</h4>
                <p className="para">
                  At Coded Pulse, we believe in transparency and partnership.
                  We&nbsp;re open about the rebranding process and share our
                  strategies and insights with you every step of the way. Our
                  approach is collaborative and tailored to your needs, ensuring
                  your rebrand reflects where your business is headed. We
                  combine strategy, creativity, and data to create a rebrand
                  that truly resonates with your audience.
                </p>
                <p className="para">
                  If you&nbsp;re ready to revamp your brand, we&nbsp;re here to
                  help. Let&nbsp;s make your rebrand not just successful, but
                  truly exclusive. Contact us today to start the journey
                  together.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
