import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Navbar } from "../nav/nav";

export function Layout() {
  return (<>
  
  <Navbar />
  <Outlet/>
  <Footer />
  
  </>);
}