import logo_light from "../../../public/logo-dark.svg";
import Image from "next/image";
import SideMenu from "./SideMenu";
import SideControls from "./SideControls";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen justify-between min-w-80  min p-8">
      <div>
        <Image src={logo_light} alt="logo" className="mb-16" />
        <SideMenu />
      </div>
      <SideControls />
    </aside>
  );
}
