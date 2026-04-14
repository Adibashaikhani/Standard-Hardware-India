import dealership1 from "@/assets/DEALERSHIP 1.jpeg";
import dealership2 from "@/assets/DEALERSHIP 2.jpeg";
import isoCertificate from "@/assets/iso-certificate.png";
import iecCertificate from "@/assets/iec-certificate.png";
import udyamCertificate from "@/assets/udyam certificate.jpeg";

const Dealership = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">

        <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300 bg-white">
          <img src={isoCertificate} alt="ISO 9001:2015 Certificate" className="w-full h-auto object-contain" />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300 bg-white">
          <img src={iecCertificate} alt="Importer-Exporter Code Certificate" className="w-full h-auto object-contain" />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300 bg-white">
          <img src={udyamCertificate} alt="Udyam Registration Certificate" className="w-full h-auto object-contain" />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300 bg-white">
          <img src={dealership1} alt="Dealership Details Page 1" className="w-full h-auto object-contain" />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300 bg-white">
          <img src={dealership2} alt="Dealership Details Page 2" className="w-full h-auto object-contain" />
        </div>

      </div>
    </div>
  );
};

export default Dealership;