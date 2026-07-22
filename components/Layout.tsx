import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white">
      <Navbar />
      <div className="p-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
