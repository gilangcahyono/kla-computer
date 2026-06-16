import Footer from "@/components/Footer";
import GuestLayout from "@/components/GuestLayout";

const Index = () => {
  return (
    <GuestLayout>
      <section className="bg-gray-100 py-10">
        <div className="text-center">
          <h1 className="mb-5 font-bold text-3xl">
            "Aset Teknisi KLA Computer Surabaya Merr"
          </h1>
          <p className="mb-7">
            Lakukan penginstalan aplikasi standar dengan cara klik tombol
            download dibawah ini:
          </p>
          <a
            className="bg-yellow-400 rounded-lg px-4 py-1.5 text-white hover:bg-yellow-500 transition"
            href="#"
            download
          >
            Download
          </a>
          <p className="mt-7">
            🚀🚀🚀🚀🚀🚀🚀 . 🔥🔥🔥🔥🔥🔥🔥 . 🐐🐐🐐🐐🐐🐐🐐
          </p>
        </div>
      </section>

      <section id="allApps" className="py-7 px-30 scroll-mt-20">
        <h3 className="mb-3 text-xl font-bold">Semua Aplikasi</h3>
        <input
          className="border rounded py-1 px-3 mb-5 min-w-sm"
          type="text"
          placeholder="Cari aplikasi"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col items-center text-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732205.png"
              className="h-10"
            />
            <h4 className="text-sm font-semibold">Chrome</h4>
            <a
              href="#"
              className="w-full text-xs bg-yellow-400 text-white py-1.5 rounded-md hover:opacity-90 transition"
            >
              Download
            </a>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col items-center text-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732242.png"
              className="h-10"
            />
            <h4 className="text-sm font-semibold">VLC</h4>
            <a
              href="#"
              className="w-full text-xs bg-yellow-400 text-white py-1.5 rounded-md hover:opacity-90 transition"
            >
              Download
            </a>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col items-center text-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png"
              className="h-10"
            />
            <h4 className="text-sm font-semibold">WinRAR</h4>
            <a
              href="#"
              className="w-full text-xs bg-yellow-400 text-white py-1.5 rounded-md hover:opacity-90 transition"
            >
              Download
            </a>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-md transition p-3 flex flex-col items-center text-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
              className="h-10"
            />
            <h4 className="text-sm font-semibold">Zoom</h4>
            <a
              href="#"
              className="w-full text-xs bg-yellow-400 text-white py-1.5 rounded-md hover:opacity-90 transition"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      <section id="cekTT" className="py-7 px-30 scroll-mt-18">
        <h3 className="mb-3 text-xl font-bold">Cek Tukar Tambah</h3>
      </section>

      <section id="videoDisplay" className="py-7 px-30 scroll-mt-18">
        <h3 className="mb-3 text-xl font-bold">Video Display</h3>
      </section>

      <Footer />
    </GuestLayout>
  );
};

export default Index;
