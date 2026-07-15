import { useToggle } from "@/stores/useToggle";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const page: string = router.pathname.split("/")[2];
  const activeClass = "bg-yellow-400 hover:bg-yellow-500 text-white";
  const { collapsed } = useToggle();

  const links = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      page: "dashboard",
    },
    {
      name: "Semua Aplikasi",
      href: "/admin/apps",
      page: "apps",
    },
    {
      name: "Video Display",
      href: "/admin/videos",
      page: "videos",
    },
    {
      name: "Profile",
      href: "/admin/profile",
      page: "profile",
    },
  ];

  return (
    <aside
      className={`bg-gray-100 w-72 h-screen p-5 fixed left-0 transition-all ${collapsed ? "-translate-x-full" : "translate-x-0"}`}
    >
      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            className={`${page === link.page ? activeClass : ""} rounded-lg px-3 py-1.5 ${collapsed ? "hidden" : ""}`}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
