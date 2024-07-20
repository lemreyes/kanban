import SideBarListItem from "./SideBarListItem";

import Image from "next/image";

import new_board_icon from "../../../public/icon-board-newboard.svg";
import { Board } from "../Types/Types";
import { useActiveBoardStore } from "../stores/ActiveBoardStore";

export default function SideMenu({ boards }: { boards: Array<Board> }) {
  const activeBoardId = useActiveBoardStore((state) => state.activeBoardId);

  return (
    <div>
      <h2 className="text-headingS font-headingS leading-headingS letters tracking-widest text-mediumGrey uppercase ml-8 mt-4 mb-4">
        All boards ({boards.length})
      </h2>
      <div>
        {boards.map((board) => (
          <SideBarListItem
            board_id={board.id}
            board_name={board.name}
            key={board.id}
            isActive={board.id === activeBoardId}

          />
        ))}
        <button className="flex flex-row gap-4 py-4 min-w-[275px] text-headingM font-headingM leading-headingM text-mainPurple">
          <Image
            src={new_board_icon}
            alt="board_icon"
            width={16}
            height={16}
            className="ml-8"
          />
          <p>+ Create New Board</p>
        </button>
      </div>
    </div>
  );
}
