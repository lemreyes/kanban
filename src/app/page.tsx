import React from "react";
import MainBoard from "./Components/MainBoard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { ThemeProvider } from "./ThemeContext";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <ThemeProvider>
        <Header />
        <div className="flex flex-row flex-1">
          <Sidebar />
          <MainBoard />
        </div>
      </ThemeProvider>
    </div>
  );
}
