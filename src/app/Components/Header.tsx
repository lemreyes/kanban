import Image from "next/image";

import logo_light from "../../../public/logo-dark.svg";
import logo_dark from "../../../public/logo-light.svg";

export default function Header() {
  return (
    <header>
      <Image src={logo_light} alt="logo" />
      <h1>Platform Launch</h1>
    </header>
  );
}
