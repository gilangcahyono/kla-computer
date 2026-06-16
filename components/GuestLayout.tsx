import Navbar from "./Navbar";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default GuestLayout;
