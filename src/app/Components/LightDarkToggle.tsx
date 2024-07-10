import Image from "next/image";

import dark_icon from "../../../public/icon-dark-theme.svg";
import light_icon from "../../../public/icon-light-theme.svg";

import { useKanbanTheme } from "../ThemeContext";

export default function LightDarkToggle() {
  const {isDarkMode, setIsDarkMode} = useKanbanTheme();

  const hdlToggleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex flex-row gap-4 p-4 justify-center rounded-md ${isDarkMode ? "bg-veryDarkGray" : "bg-linesLight"}`}>
      <Image src={light_icon} alt="light icon" />
      <label>
        <input
          type="checkbox"
          className="sr-only"
          checked={isDarkMode}
          onChange={hdlToggleChange}
        />
        <div
          className={`bg-mainPurple w-10 h-5 rounded-full relative transition-all duration-300 $`}
        >
          <div
            className={`bg-white w-4 h-4 absolute rounded-full top-[2px] transition-transform duration-300 transform ${
              isDarkMode ? "translate-x-[22px]" : "translate-x-[2px]"
            }`}
          ></div>
        </div>
      </label>
      <Image src={dark_icon} alt="dark icon" />
    </div>
  );
}
