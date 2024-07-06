"use client";
import Image from "next/image";

import dark_icon from "../../../public/icon-dark-theme.svg";
import light_icon from "../../../public/icon-light-theme.svg";
import { useState } from "react";

export default function LightDarkToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleCheckboxChange = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex flex-row gap-4 p-4 justify-center bg-linesLight border-b-linesLight rounded-md">
      <Image src={light_icon} alt="light icon" />
      <label>
        <input
          type="checkbox"
          className="sr-only"
          checked={isDark}
          onChange={handleCheckboxChange}
        />
        <div
          className={`bg-mainPurple w-10 h-5 rounded-full relative transition-all duration-300 $`}
        >
          <div
            className={`bg-white w-4 h-4 absolute rounded-full top-[2px] transition-transform duration-300 transform ${
              isDark ? "translate-x-[22px]" : "translate-x-[2px]"
            }`}
          ></div>
        </div>
      </label>
      <Image src={dark_icon} alt="dark icon" />
    </div>
  );
}
