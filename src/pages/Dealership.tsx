import dealership1 from "@/assets/DEALERSHIP 1.jpeg";
import dealership2 from "@/assets/DEALERSHIP 2.jpeg";
import isoCertificate from "@/assets/iso-certificate.png";
import iecCertificate from "@/assets/iec-certificate.png";

const Dealership = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300">
          <img
            src={isoCertificate}
            alt="ISO 9001:2015 Certificate"
            className="w-full h-auto"
          />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300">
          <img
            src={iecCertificate}
            alt="Importer-Exporter Code Certificate"
            className="w-full h-auto"
          />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300">
          <img
            src={dealership1}
            alt="Dealership Details Page 1"
            className="w-full h-auto"
          />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-200/60 transition-transform hover:scale-[1.02] duration-300">
          <img
            src={dealership2}
            alt="Dealership Details Page 2"
            className="w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Dealership;

