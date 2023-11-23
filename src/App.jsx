import { Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <div>
      <MainLayout></MainLayout>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
