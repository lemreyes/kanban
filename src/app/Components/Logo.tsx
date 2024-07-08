import Image from "next/image";
import { useKanbanTheme } from "../ThemeContext";

import logo_light from "../../../public/logo-dark.svg";
import logo_dark from "../../../public/logo-light.svg";

export default function Logo() {
  let { isDarkMode } = useKanbanTheme();
  console.log("Logo isDarkMode: ", isDarkMode);

  return (
    <div className="min-w-80 border-r border-linesLight p-8">
      <Image src={isDarkMode ? logo_dark : logo_light} alt="logo" />
    </div>
  );
}
