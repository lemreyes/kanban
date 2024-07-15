import SideBarListItem from "./SideBarListItem";

import Image from "next/image";

import new_board_icon from "../../../public/icon-board-newboard.svg";
import { Board } from "../Types/Types";

export default function SideMenu({ boards }: { boards: Array<Board> }) {
  return (
    <div>
      <h2 className="text-headingS font-headingS leading-headingS letters tracking-widest text-mediumGrey uppercase ml-8 mt-4 mb-4">
        All boards ({boards.length()})
      </h2>
      <ul>
        <SideBarListItem board_name="Dummy1" isSelected={true} />
        <SideBarListItem board_name="Dummy2" isSelected={false} />
        <SideBarListItem board_name="Dummy3" isSelected={false} />
      </ul>
      <ul>
        <li className="flex flex-row gap-4 py-4 max-w-[275px] text-headingM font-headingM leading-headingM text-mainPurple">
          <Image
            src={new_board_icon}
            alt="board_icon"
            width={16}
            height={16}
            className="ml-8"
          />
          <p>+ Create New Board</p>
        </li>
      </ul>
    </div>
  );
}
