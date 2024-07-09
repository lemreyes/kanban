"use client";
import SideMenu from "./SideMenu";
import SideControls from "./SideControls";
import { useKanbanTheme } from "../ThemeContext";

export default function Sidebar() {
  const { isDarkMode } = useKanbanTheme();

  return (
    <aside
      className={`flex flex-col h-full justify-between min-w-80 border-r ${
        isDarkMode
          ? "bg-darkGray text-white border-linesDark"
          : "bg-white text-black border-linesLight"
      } `}
    >
      <SideMenu />
      <SideControls />
    </aside>
  );
}
