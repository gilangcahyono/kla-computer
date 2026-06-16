import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-950 flex justify-between items-center px-20 py-4 sticky top-0">
      <div>
        <Link href="/">
          <img
            className="h-10"
            src="/kla_computer_sidebar.png"
            alt="KLA Computer"
          />
        </Link>
      </div>
      <div className="flex gap-4 text-white font-semibold">
        <Link className="hover:underline hover:text-yellow-400" href="/">
          Beranda
        </Link>
        <Link className="hover:underline hover:text-yellow-400" href="#apps">
          Semua Aplikasi
        </Link>
        <Link
          className="hover:underline hover:text-yellow-400"
          href="#tradeIns"
        >
          Tukar Tambah
        </Link>
        <Link className="hover:underline hover:text-yellow-400" href="#videos">
          Video Display
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
