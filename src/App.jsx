import { Outlet } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
import Footer from "./shared/Footer/Footer";
import Navbar from "./layout/Navbar";

const App = () => {
  return (
    <div>
      {/* <MainLayout></MainLayout> */}
      <Navbar></Navbar>
      <div className="-mt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
