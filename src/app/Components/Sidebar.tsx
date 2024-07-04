import SideMenu from "./SideMenu";
import SideControls from "./SideControls";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-screen justify-between min-w-80">
      <SideMenu />
      <SideControls />
    </aside>
  );
}
