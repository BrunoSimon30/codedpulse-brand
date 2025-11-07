export interface PortfolioDataProps {
  key?:string
    videoLink?: string;
    label?: string;
    title?: string;
    bannerImage?: string;
    description?: string;
    poster?: string;
    src?: string;
  }
  
  export interface PortfolioAllProps {
    category: string;
    data: PortfolioDataProps[];
  }
  
  export interface ProjectModalProps {
    show: boolean;
    onHide: () => void;
    currentIndex: number;
    data: PortfolioDataProps[];
    currentProjectTitle?:string
    key?:string
  }