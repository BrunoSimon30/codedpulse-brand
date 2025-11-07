import Link from "next/link";

interface ProjectsDataProps {
  logo?: string;
  ProjectTitle?: string;
  projectDescription?: string;
  projectImage?: string;
  backgroundColor?: string;
  title: string;
  viewCaseStudyLink?: string;
  bgBanner?:string
  downloadLink?:string
  isMobileApp?:boolean
  projectsUtilData?: {
    heading?: string;
    description?: string;
  }[];
  bottomPart?: React.ReactNode;
  
}

export const DownloadPdf = (caseStudy: string) => {

}

export const ProjectsData: ProjectsDataProps[] = [
  {
    logo: "/images/logos/smox-logo.png",
    bgBanner:"/images/portfolio-banner-bg/smox-bg-banner.png",
    ProjectTitle: "Salon Management App",
    backgroundColor: "#FFF5D3",
    projectDescription:
      "Coded Pulse has successfully launched Smox, a transformative mobile app developed and launched with careful attention and strategic insight. Our experts worked diligently to build a solution",
    projectImage: "/images/project-images/smox-banner.png",
    title: "Smox",
    projectsUtilData: [
      { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/smox",
    downloadLink:"/case-studies-pdf/Smox.pdf",
    isMobileApp:true
   
  },
  {
    logo: "/images/logos/adona-logo.png",
    ProjectTitle: "Elevator Consulting Web App",
    bgBanner:"/images/portfolio-banner-bg/adonia-bg-banner.png",
    backgroundColor: "#FFD3D3",
    projectDescription:
      "Coded Pulse is proud to undertake the development and successful launch of Adonai Consultants. We put great effort into creating a robust digital platform that streamlines elevator inspection",
    projectImage: "/images/project-images/adonia.png",
    title: "Adonaiconsultations",
    projectsUtilData: [
      { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/adonai-consultants",
    downloadLink:"/case-studies-pdf/Adonai Consultants.pdf",
    isMobileApp:false
 
  },

  {
    logo: "/images/logos/s-and-s-rental.png",
    ProjectTitle: "Elevator Consulting Web App",
    backgroundColor: "#0000",
    bgBanner:"/images/portfolio-banner-bg/s-and-s.png",
    projectDescription:
      "Coded Pulse team rapidly developed TARGO, a game-changing trailer rental platform, and brought it to life expertly. With advanced features, we enabled this platform to revolutionize order management",
    projectImage: "/images/project-images/s-s-rental.png",
    title: "sands-rental",
    projectsUtilData: [
      { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/targo",
    downloadLink:"/case-studies-pdf/Rental.pdf",
    isMobileApp:true
  },

  {
    logo: "/images/logos/skey-resource.png",
    ProjectTitle: "Schedule Management Web App",
    bgBanner:"/images/portfolio-banner-bg/sky-resources.png",
    backgroundColor: "#d2f0ff",
    projectDescription:
      "Sky Resources, conceived and rolled out by Suitch, reflects our firm commitment to building innovative solutions for event management. Our team took this as a challenge and meticulously",
    projectImage: "/images/project-images/sky-resouces.png",
    title: "Skyresources",
    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/sky-resources",
    downloadLink:"/case-studies-pdf/sky-resources.pdf",
    isMobileApp:false
   
  },
  {
    logo: "/images/logos/schncronous-dating.png",
    ProjectTitle: "Dating Wesbite",
    bgBanner:"/images/portfolio-banner-bg/dating.png",
    backgroundColor: "#ebdbff",
    projectDescription:
      "Coded Pulse spearheaded the development and successful launch of Synchronicity Dating, a revolutionary mobile app created to build genuine connections. From the initial conceptualization stage to deployment,",
    projectImage: "/images/project-images/dating.png",
    title: "synchronicity-dating",
    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/syncronicity",
    downloadLink:"/case-studies-pdf/Synchronicity.pdf",
    isMobileApp:false,
   
  },
  {
    logo: "/images/logos/RostamLogo.png",
    ProjectTitle: "Persian Beer Website",
    bgBanner:"/images/portfolio-banner-bg/rostam-36-banner-bg.png",
    backgroundColor: "#fff5d3",
    projectDescription:
      "Coded Pulse embraced the challenge of bringing Rostam36 to life with a meticulously designed website. We crafted an appealing site in the given timeline that celebrates the beer’s Persian inspiration and bold flavors.",
    projectImage: "/images/project-images/rostom-project.png",
    title: "Rostam36",
    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "USA" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/rostam36",
    downloadLink:"/case-studies-pdf/Rostam.pdf",
    isMobileApp:false,

  },

  {
    logo: "/images/logos/ear-logo.png",
    ProjectTitle: "Music App",
    bgBanner:"/images/portfolio-banner-bg/an-ear-bg.png",
    backgroundColor: "#fff5d3",
    projectDescription:
      "Coded Pulse embraced the challenge of bringing Rostam36 to life with a meticulously designed website. We crafted an appealing site in the given timeline that celebrates the beer’s Persian inspiration and bold flavors.",
    projectImage: "/images/project-images/an-ear.png",
    title: "anEar",
    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "USA" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/anear",
    downloadLink:"/case-studies-pdf/Anear.pdf",
    isMobileApp:true,

  },

  {
    logo: "/images/logos/party-cade-logo.png",
    ProjectTitle: "Special Event Game App",
    bgBanner:"/images/portfolio-banner-bg/party-cade-bg.png",
    backgroundColor: "#ebffe3",
    title: "party-cade",
    projectDescription:
      "Coded Pulse successfully executed the PartyCade project, a mobile app designed to transform special events with interactive games. We met the set timeframe and delighted the client",
    projectImage: "/images/project-images/party-cade.png",

    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/party-cade",
    downloadLink:"/case-studies-pdf/Party Cade.pdf",
    isMobileApp:true,
 
  },
  {
    logo: "/images/logos/jebby.png",
    ProjectTitle: "Renting Product App",
    bgBanner:"/images/portfolio-banner-bg/jebby-bg-banner.png",
    backgroundColor: "#ffeccf",
    title: "jebby",
    projectDescription:
      "Coded Pulse successfully executed the PartyCade project, a mobile app designed to transform special events with interactive games. We met the set timeframe and delighted the client",
    projectImage: "/images/project-images/jebby-project.png",

    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/jebby",
    downloadLink:"/case-studies-pdf/jebby.pdf",
    isMobileApp:true,
 
  },

  {
    logo: "/images/logos/bello-logo.png",
    ProjectTitle: "local bakers for custom orders App",
    bgBanner:"/images/portfolio-banner-bg/bello-bg-banner.png",
    backgroundColor: "#fff5d3",
    title: "bello",
    projectDescription:
      "Coded Pulse undertook a complex mobile app project – Bello - to revolutionize the bakery ordering and delivery process, connecting bakery owners, vendors, riders, and customers",
    projectImage: "/images/project-images/bello-project.png",

    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/bello",
    downloadLink:"/case-studies-pdf/bello.pdf",
    isMobileApp:true,
 
  },
  {
    logo: "/images/logos/active-sos.svg",
    ProjectTitle: "Emergency/SOS App",
    bgBanner:"/images/portfolio-banner-bg/active-sos.png",
    backgroundColor: "#fff1f1",
    title: "activesos",
    projectDescription:
      "ACTIVE SOS is a helpful mobile app developed to streamline emergency communication AND ENSURE personal safety. Designed for individuals and organizations.",
    projectImage: "/images/project-images/active-sos-mobile.png",

    projectsUtilData: [
      //   { heading: "Downloads", description: "10K+" },
      { heading: "Country", description: "UK" },
      //   { heading: "Platforms", description: "iOS, Android" },
    ],
    viewCaseStudyLink:"/case-study/active-sos",
    downloadLink:"/case-studies-pdf/ActiveSos.pdf",
    isMobileApp:true,
 
  },


];
