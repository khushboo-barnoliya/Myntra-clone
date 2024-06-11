
import Navbar from "./navbar"
import "./css/App.css";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import FetchItems from "./FetchItems";

function Home() {


  return (
    <>
        <div className="container-fluid p-0">


          <Navbar />
          <FetchItems />
          <Outlet />
          <Footer />
        </div>
    </>
  )
}

export default Home
