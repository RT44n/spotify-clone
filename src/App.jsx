import "./App.css";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <SideBar></SideBar>
        </div>
      </div>
    </>
  );
}

export default App;
