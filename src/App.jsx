import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Footer from "./shared/Footer/Footer";

const App = () => {
  return (
    <div>
      <MainLayout></MainLayout>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
