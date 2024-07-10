import Image from "next/image";
import LightDarkToggle from "./LightDarkToggle";

import hide_sidebar_icon from "../../../public/icon-hide-sidebar.svg";
import { useKanbanTheme } from "../ThemeContext";

export default function SideControls() {
  const { isDarkMode } = useKanbanTheme();

  return (
    <div className="p-8">
      <LightDarkToggle />
      <button className={`flex gap-4 items-center mt-4 text-headingM font-headingM leading-headingM text-mediumGrey`}>
        <Image src={hide_sidebar_icon} alt="eye icon" />
        Hide Sidebar
      </button>
    </div>
  );
}
