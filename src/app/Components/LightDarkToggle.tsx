import Image from "next/image";

import dark_icon from "../../../public/icon-dark-theme.svg";
import light_icon from "../../../public/icon-light-theme.svg";

export default function LightDarkToggle() {
  return (
    <div className="flex flex-row">
      <Image src={light_icon} alt="light icon" />
      <div>slider</div>
      <Image src={dark_icon} alt="dark icon" />
    </div>
  );
}
