import Image from "next/image";
import MainBoard from "./Components/MainBoard";
import Header from "./Components/Header";
import { Fragment } from "react";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <MainBoard />
    </Fragment>
  );
}
