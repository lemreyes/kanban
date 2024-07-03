import Image from "next/image";
import MainBoard from "./Components/MainBoard";
import Header from "./Components/Header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <MainBoard />
    </Fragment>
  );
}
