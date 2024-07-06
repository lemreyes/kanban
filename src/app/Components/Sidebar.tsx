import SideMenu from "./SideMenu";
import SideControls from "./SideControls";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-full justify-between min-w-80 border-r border-linesLight ">
      <SideMenu />
      <SideControls />
    </aside>
  );
}
