import Image from "next/image";
import LightDarkToggle from "./LightDarkToggle";

import eye_icon from "../../../public/icon-show-sidebar.svg";

export default function SideControls() {
  return (
    <div className="p-8">
      <LightDarkToggle />
      <button className="flex">
        <Image src={eye_icon} alt="eye icon" />
        Hide Sidebar
      </button>
    </div>
  );
}
