import { useToggle } from "@/stores/useToggle";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const isAdmin: boolean = router.pathname.startsWith("/admin");
  const { collapsed } = useToggle();

  return (
    <footer
      className={`${isAdmin ? (collapsed ? "ms-0" : "ms-72") : ""} bg-yellow-600 py-5 transition-all`}
    >
      <p className="text-center text-white">
        © 2026 KLA Computer | created with sincerity💙 by{" "}
        <a className="hover:underline" target="_blank" href="#">
          Gilang Cahyono
        </a>
      </p>
    </footer>
  );
};

export default Footer;
