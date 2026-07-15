const Apps = () => {
  return (
    <section id="apps" className="py-7 px-30 scroll-mt-20">
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
  );
};

export default Apps;
