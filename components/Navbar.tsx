import { useToggle } from "@/stores/useToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();
  const isAdmin: boolean = router.pathname.startsWith("/admin");
  const { toggle } = useToggle();

  return (
    <nav
      className={`bg-purple-950 flex justify-between items-center ${isAdmin ? "px-5" : "px-20"} py-4 sticky top-0`}
    >
      <div className="flex items-center gap-4">
        {isAdmin && (
          <button className="text-2xl cursor-pointer" onClick={toggle}>
            <AiOutlineMenu className="text-white" />
          </button>
        )}
        <Link href="#">
          <img
            className="h-8"
            src="/kla_computer_sidebar.png"
            alt="KLA Computer"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4 text-white font-semibold">
        {isAdmin ? (
          <button className="bg-yellow-400 rounded-lg px-4 py-1.5 hover:bg-yellow-500">
            Logout
          </button>
        ) : (
          <>
            <Link className="hover:underline hover:text-yellow-400" href="#">
              Beranda
            </Link>
            <Link
              className="hover:underline hover:text-yellow-400"
              href="#apps"
            >
              Semua Aplikasi
            </Link>
            <Link
              className="hover:underline hover:text-yellow-400"
              href="#tradeIns"
            >
              Tukar Tambah
            </Link>
            <Link
              className="hover:underline hover:text-yellow-400"
              href="#videos"
            >
              Video Display
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
