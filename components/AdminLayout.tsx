import { useToggle } from "@/stores/useToggle";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { collapsed } = useToggle();
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main
          className={`h-screen w-full p-5 transition-all ${collapsed ? "ms-0" : "ms-72"}`}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
