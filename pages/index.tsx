import Footer from "@/components/Footer";
import GuestLayout from "@/components/GuestLayout";
import Hero from "./Hero";
import Apps from "./Apps";
import Videos from "./Videos";

const Home = () => {
  return (
    <GuestLayout>
      <Hero />
      <Apps />
      <Videos />
      <Footer />
    </GuestLayout>
  );
};

export default Home;
