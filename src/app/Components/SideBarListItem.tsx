import Image from "next/image";
import board_icon_selected from "../../../public/icon-board-selected.svg";
import board_icon_notSelected from "../../../public/icon-board-notselected.svg";
import { useActiveBoardStore } from "../stores/ActiveBoardStore";

export default function SideBarListItem({
  board_id,
  board_name,
  isActive,
}: {
  board_id: number;
  board_name: string;
  isActive: boolean;
}) {
  const setActiveBoardId = useActiveBoardStore(
    (state) => state.setActiveBoardId
  );

  let selectedStyle = "";
  if (true === isActive) {
    selectedStyle = "bg-mainPurple text-white rounded-r-full";
  } else {
    selectedStyle = "text-mediumGrey";
  }

  const hdlButtonClick = () => {
    setActiveBoardId(board_id);
  };

  return (
    <button
      className={`flex flex-row gap-4 py-4 min-w-[275px] text-headingM font-headingM leading-headingM ${selectedStyle}`}
      onClick={hdlButtonClick}
    >
      <Image
        src={isActive ? board_icon_selected : board_icon_notSelected}
        alt="board_icon"
        width={16}
        height={16}
        className="ml-8"
      />
      <p>{board_name}</p>
    </button>
  );
}
