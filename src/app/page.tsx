import MainBoard from "./Components/MainBoard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <MainBoard />
      </div>
    </div>
  );
}
