import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <SideBar></SideBar>
        </div>
        <MusicPlayer> </MusicPlayer>
      </div>
    </>
  );
}

export default App;
