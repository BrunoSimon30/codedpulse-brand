import React, { useState } from 'react';
import styles from './index.module.scss';

interface JourneyStep {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const journeySteps: JourneyStep[] = [
  { 
    title: 'Ideate & Plan',
    icon: <div className={`${styles.icon} ${styles.ideatePlanIcon}`}></div>,
    description: `We kick things off with a brainstorming bonanza! Our team dives deep into your ideas, helping to shape and refine your vision.'`
  },
  { 
    title: 'Design',
    icon: <div className={`${styles.icon} ${styles.designIcon}`}></div>,
    description: `Now it's time for our design team to work their magic! They'll conjure up a design that's not just eye-catching but also a joy to use.`
  },
  { 
    title: 'Development',
    icon: <div className={`${styles.icon} ${styles.developmentIcon}`}></div>,
    description: `Once the design is approved, our tech maestros step onto the stage. They'll take those designs & turn them into a fully functional app.`
  },
  { 
    title: 'Testing',
    icon: <div className={`${styles.icon} ${styles.testingIcon}`}></div>,
    description: `We won't let any pesky bugs ruin the party! Our team goes on a bug-hunting expedition to ensure your app is as smooth as silk.`
  },
  { 
    title: 'Launch Pad',
    icon: <div className={`${styles.icon} ${styles.launchPadIcon}`}></div>,
    description: `The big day has arrived! We pop the champagne as we launch your app into the world. It's time to celebrate your success & watch your app soar!`
  },
  { 
    title: 'Support',
    icon: <div className={`${styles.icon} ${styles.supportIcon}`}></div>,
    description: `But wait, the party doesn't stop there! Our support squad is standby, ready to swoop in & lend a helping hand whenever you need it.`
  },
];

const JourneyCard: React.FC<JourneyStep> = ({ title, icon, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <h3 className={styles.title}>{title}</h3>
      {isHovered && <p className={styles.description}>{description}</p>}
    </div>
  );
};

const SuitchJourney: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Coded Pulse journey</h2>
      <div className={styles.journeyPath}>
        {journeySteps.map((step, index) => (
          <JourneyCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default SuitchJourney;