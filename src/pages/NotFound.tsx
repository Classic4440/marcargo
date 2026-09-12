import { Link } from "react-router-dom";
import { ArrowLeft, PackageSearch } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center text-white px-4">
      <div className="text-center animate-fadeInUp">
        <div className="flex justify-center mb-6">
          <div className="glass-card p-6 rounded-full">
            <PackageSearch size={48} className="text-amber-400" />
          </div>
        </div>
        <h1 className="font-display text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-slate-300 text-lg mb-8">
          This shipment route doesn't exist.
        </p>
        <Link to="/" className="btn-gold">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
