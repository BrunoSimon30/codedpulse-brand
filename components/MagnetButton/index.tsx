import { useRouter } from "next/router";
import style from "./index.module.scss";

interface MagnetButtonProps {
  text: string;
  href: string;
  className?: string; // Made className optional to avoid having to pass an empty string
}

export default function MagnetButton(props: MagnetButtonProps) {
  const router = useRouter();

  // Updated handleClick to take no arguments directly
  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className={`${style.btnwrap} btnwrap`}>
      <button
        className={`mg_btn ${style.mg_btn} ${props.className || ""}`} // Use className directly
        onClick={() => handleClick(props.href)} // Pass a function reference
      >
        <span className={`bgtext ${style.bgtext}`}>{props.text}</span>
        <div className={`arrow ${style.arrow}`}>
          <i className="icon-arrow_arrows_back_direction_left_icon-1"></i>
        </div>
      </button>
    </div>
  );
}
