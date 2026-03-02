import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import { Link } from "react-router-dom";

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Ringkasan Video
        </h2>

        <SummaryCard />

        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-blue-600 text-sm hover:underline"
          >
            Unggah Video Lainnya
          </Link>
        </div>
      </div>
    </div>
  );
}