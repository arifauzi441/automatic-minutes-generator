import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto text-center mt-10 px-4">
        <h2 className="text-2xl font-bold mb-2">
          Unggah Video untuk Diringkas
        </h2>
        <p className="text-gray-500 mb-8">
          Kita akan mengubah video panjang Anda menjadi teks ringkasan
        </p>

        <UploadCard />
      </div>
    </div>
  );
}