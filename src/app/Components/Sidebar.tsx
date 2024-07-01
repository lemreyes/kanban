import logo_light from "../../../public/logo-dark.svg";
import Image from "next/image";
import SideMenu from "./SideMenu";
import SideControls from "./SideControls";

export default function Sidebar() {
  return (
    <aside className="flex flex-col">
      <Image src={logo_light} alt="logo" />
      <SideMenu />
      <SideControls />
    </aside>
  );
}
