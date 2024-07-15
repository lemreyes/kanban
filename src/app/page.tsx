import React from "react";
import MainBoard from "./Components/MainBoard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { ThemeProvider } from "./ThemeContext";
import prisma from "./utils/prisma";
import { Board } from "./Types/Types";

export default async function Home() {
  const boards: Array<Board> = await prisma.board.findMany();
  console.log("Boards: ", boards);

  return (
    <div className="flex flex-col h-screen">
      <ThemeProvider>
        <Header />
        <div className="flex flex-row flex-1">
          <Sidebar boards={boards} />
          <MainBoard />
        </div>
      </ThemeProvider>
    </div>
  );
}
