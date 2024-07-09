"use client";

import Image from "next/image";
import more_icon from "../../../public/icon-vertical-ellipsis.svg";
import Logo from "./Logo";
import { useKanbanTheme } from "../ThemeContext";

export default function Header() {
  const { isDarkMode } = useKanbanTheme();

  return (
    <header className="flex flex-row">
      <Logo />
      <div
        className={`flex flex-row justify-between items-center w-full border-b p-4 ${
          isDarkMode
            ? "bg-darkGray border-linesDark"
            : "bg-white border-linesLight"
        }`}
      >
        <h1
          className={`text-headingXL font-headingXL leading-headingXL ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Platform Launch
        </h1>
        <div className="flex gap-8">
          <button className="bg-mainPurple p-4 font-headingM text-headingM leading-headingM text-white rounded-3xl">
            + Add New Task
          </button>
          <button>
            <Image src={more_icon} alt="ellipsis_icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
