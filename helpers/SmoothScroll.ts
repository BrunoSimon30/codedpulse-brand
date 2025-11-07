import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "./gsap";

const SmoothScroll = (body: HTMLElement) => {
  let container = body;

  // let bodyScrollBar = Scrollbar.init(container, {
  //   damping: 0.1,
  //   delegateTo: document,
  // });
  // bodyScrollBar.track.xAxis.element.remove();

  // ScrollTrigger.scrollerProxy(container, {
  //   scrollTop(value: any) {
  //     if (arguments.length) {
  //       bodyScrollBar.scrollTop = value;
  //     }

  //     return bodyScrollBar.scrollTop;
  //   },
  // });
  // bodyScrollBar.addListener(ScrollTrigger.update);
};

export { SmoothScroll };
