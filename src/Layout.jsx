import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      {/* <div style={{ width: "100%", height: "85vh" }}> */}
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
