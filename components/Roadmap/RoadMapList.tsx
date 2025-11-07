import React from 'react';
import LottiePlayer from "@/components/LottiePlayer";

interface RoadMapStep {
  title: string;
  animation: string;
  description: string;
  number: number;
}

const roadMapSteps: RoadMapStep[] = [
  {
    title: "Ideate & Plan",
    animation: "/lottie/square_circle_loader.json",
    description: `Let's kick things off with a chat over coffee or tea. We want to hear all about your app dreams and goals. Pour out your ideas, and we'll make sure to catch every drop!`,
    number: 1
  },
  {
    title: "Design",
    animation: "/lottie/dynamic_geometry.json",
    description: `Now, it's time for our design team to work their magic. They'll conjure up a design that's not just eye-catching but also a joy to use. Get ready for some serious "wow" moments!`,
    number: 2
  },
  {
    title: "Development",
    animation: "/lottie/circle_loader4.json",
    description: `Once the design is approved, our tech maestros step onto the stage. They'll take those designs and turn them into a fully functional app, with all the bells and whistles you could want.`,
    number: 3
  },
  {
    title: "Testing",
    animation: "/lottie/penrose-round_loader.json",
    description: `We won't let any pesky bugs ruin the party! Our team goes on a bug-hunting expedition to ensure your app is as smooth as silk before it hits the virtual shelves.`,
    number: 4
  },
  {
    title: "Launch Pad",
    animation: "/lottie/shapes_loader.json",
    description: `The big day has arrived! We pop the champagne (or your beverage of choice) as we launch your app into the world. It's time to celebrate your success and watch your app soar!`,
    number: 5
  },
  {
    title: "Support",
    animation: "/lottie/circle_loader3.json",
    description: `But wait, the party doesn't stop there! Our support squad is on standby, ready to swoop in and lend a helping hand whenever you need it. Consider us your app's personal bodyguards!`,
    number: 6
  }
];

const RoadMapStep: React.FC<RoadMapStep> = ({ title, animation, description, number }) => (
  <div className="inner">
    <div className="flex">
      <LottiePlayer autoplay loop src={animation} style={{ height: "6vw", width: "6vw" }} />
      <h4 className="title">{title}</h4>
    </div>
    <div className="hidecontent">
      <div className="flex">
        <LottiePlayer autoplay loop src={animation} style={{ height: "6vw", width: "6vw" }} />
        <h4 className="title">{title}</h4>
      </div>
      <div className="content">
        <p className="para">{description}</p>
        <span className="number">{number}</span>
      </div>
    </div>
  </div>
);

const RoadMapList: React.FC = () => {
  return (
    <div className="roadwrap">
      {roadMapSteps.map((step, index) => (
        <RoadMapStep key={index} {...step} />
      ))}
    </div>
  );
}

export default RoadMapList;