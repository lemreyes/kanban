import Image from "next/image";
import board_icon_selected from "../../../public/icon-board-selected.svg";
import board_icon_notSelected from "../../../public/icon-board-notselected.svg";

export default function SideBarListItem({
  board_name,
  isSelected,
}: {
  board_name: string;
  isSelected: boolean;
}) {
  let selectedStyle = "";
  if (true === isSelected) {
    selectedStyle = "bg-mainPurple text-white rounded-r-full";
  } else {
    selectedStyle = "text-mediumGrey";
  }
  return (
    <button
      className={`flex flex-row gap-4 py-4 max-w-[275px] text-headingM font-headingM leading-headingM ${selectedStyle}`}
    >
      <Image
        src={isSelected ? board_icon_selected : board_icon_notSelected}
        alt="board_icon"
        width={16}
        height={16}
        className="ml-8"
      />
      <p>{board_name}</p>
    </button>
  );
}
