import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="pb-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
