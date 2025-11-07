import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
const { SplitText } = require("./SplitText");

// Only register plugins on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);
}

export { gsap, ScrollTrigger, SplitText, ScrollToPlugin };
