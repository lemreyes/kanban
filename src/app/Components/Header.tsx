import Image from "next/image";

import logo_light from "../../../public/logo-dark.svg";
import logo_dark from "../../../public/logo-light.svg";

export default function Header() {
  return (
    <header className="flex flex-row">
      <div className="min-w-[300px] border-r border-linesLight p-8">
        <Image src={logo_light} alt="logo" />
      </div>
      <div className="flex flex-row justify-between items-center w-full border-b border-linesLight p-4">
        <h1 className="text-xl font-bold">Platform Launch</h1>
        <div className="">
          <button className="bg-mainPurple p-4 font-bold text-md text-white rounded-3xl">+ Add New Task</button>
          <button>More</button>
        </div>
      </div>
    </header>
  );
}
