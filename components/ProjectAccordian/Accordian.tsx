import { useState, useRef, useEffect } from 'react';
import { gsap } from '@/helpers/gsap';

const ProjectAccordion = () => {
  const accordionRef = useRef<HTMLDivElement[]>([]);
  const [videoSrc, setVideoSrc] = useState<string>('/media/projects/home/active_sos.webm'); // Default video

  useEffect(() => {
    // Open the first accordion by default
    if (accordionRef.current[0]) {
      const content = accordionRef.current[0].querySelector('.content') as HTMLDivElement;
      const contentHeight = content.scrollHeight;

      // Set initial height to its scroll height for smooth transition
      content.style.height = `${contentHeight + 30}px`;
      accordionRef.current[0].classList.add('open');
    }
  }, []);

  const toggleAccordion = (index: number, videoPath: string) => {
    accordionRef.current.forEach((item, i) => {
      const content = item.querySelector('.content') as HTMLDivElement;

      if (i === index) {
        if (item.classList.contains('open')) {
          // Close the currently opened item
          gsap.to(content, {
            height: 0,
            duration: 0,
            ease: 'power2.inOut',
          });
          item.classList.remove('open');
        } else {
          // Open the clicked item
          const contentHeight = content.scrollHeight;
          console.log(contentHeight)
          gsap.fromTo(content,
            { height: '0px' },
            {
              height: `${contentHeight + 30}px`,
              duration: 0,
              ease: 'power2.inOut',
              onComplete: () => {
                content.style.height = 'auto'; // Reset to auto after animation
              }
            }
          );
          item.classList.add('open');
        }

        // Change the video source based on the clicked accordion item
        setVideoSrc(videoPath);
      } else {
        // Close other accordion items
        gsap.to(content, {
          height: 0,
          duration: 0,
          ease: 'power2.inOut',
        });
        item.classList.remove('open');
      }
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="mb-4">Projects</h4>
          <div className="accordion">
            <div
              ref={(el) => {
                if (el) accordionRef.current[0] = el;
              }}
              className="accordion-item open" // Mark first accordion as open by default
            >
              <h2 className="mheading" onClick={() => toggleAccordion(0, '/media/projects/home/active_sos.webm')}>
                Active SOS
              </h2>
              <div className="content" style={{ height: 'auto', overflow: 'hidden' }}>
                <p className="para">
                  Coded Pulse led the successful launch of Active SOS, an advanced child safety app. By integrating unconventional GPS and real-time alerts, we delivered a seamless tool for parents to monitor and safeguard their children effectively.
                </p>
                <div className="tags">
                  <span>Development</span>
                  <span>Design</span>
                  <span>Motion</span>
                </div>
              </div>
            </div>

            <div
              ref={(el) => {
                if (el) accordionRef.current[1] = el;
              }}
              className="accordion-item"
            >
              <h2 className="mheading" onClick={() => toggleAccordion(1, '/media/projects/home/grid_iron.webm')}>
                Grid Iron
              </h2>
              <div className="content" style={{ height: '0px', overflow: 'hidden' }}>
                <p className="para">
                  Coded Pulse expertly developed and launched The Grid Iron Stats Mobile App for our client, enhancing football management. Our innovative approach streamlined stats and team management for coaches while delivering personalized tracking and promotion tools for players.
                </p>
                <div className="tags">
                  <span>Innovation</span>
                  <span>Technology</span>
                  <span>Strategy</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => {
                if (el) accordionRef.current[2] = el;
              }}
              className="accordion-item"
            >
              <h2 className="mheading" onClick={() => toggleAccordion(2, '/media/projects/home/lookbook.webm')}>
                Look Book
              </h2>
              <div className="content" style={{ height: '0px', overflow: 'hidden' }}>
                <p className="para">
                  Coded Pulse developed Look Book, a dynamic app connecting salons and stylists. Successfully launched by our experts, it enables users to showcase their work, fostering networking and collaboration while leveraging opportunities in the beauty industry.
                </p>
                <div className="tags">
                  <span>Innovation</span>
                  <span>Technology</span>
                  <span>Strategy</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => {
                if (el) accordionRef.current[3] = el;
              }}
              className="accordion-item"
            >
              <h2 className="mheading" onClick={() => toggleAccordion(3, '/media/projects/home/targo.mp4')}>
                Targo
              </h2>
              <div className="content" style={{ height: '0px', overflow: 'hidden' }}>
                <p className="para">
                  Coded Pulse team rapidly developed TARGO, a game-changing trailer rental platform, and brought it to life expertly. With advanced features, we enabled this platform to revolutionize order management and client relations for businesses.
                </p>
                <div className="tags">
                  <span>Innovation</span>
                  <span>Technology</span>
                  <span>Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <video
        src={videoSrc}
        poster="/media/projects/11.png"
        autoPlay
        muted
        loop
        key={videoSrc} // Ensure video reloads on source change
      ></video>
    </>
  );
};

export default ProjectAccordion;
