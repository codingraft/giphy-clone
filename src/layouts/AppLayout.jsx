import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="container px-6 py-4 mx-auto">
        <main>
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
