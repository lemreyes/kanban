import SideBarListItem from "./SideBarListItem";

export default function SideMenu() {
  return (
    <div>
      <h2 className="text-headingS font-headingS leading-headingS letters tracking-widest text-mediumGrey uppercase ml-8">
        All boards (3)
      </h2>
      <ul>
        <SideBarListItem board_name="Dummy1" isSelected={true} />
        <li>Dummy2</li>
        <li>Dummy3</li>
      </ul>
    </div>
  );
}
