export default function SummaryCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-start flex-wrap gap-3">
        <div>
          <h3 className="font-semibold text-lg">
            Cara Membuat Kopi Tawar yang Lezat
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Durasi: 12:45 menit • Format: MP4 • Ukuran: 125 MB
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg text-sm">
            Salin
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
            Unduh
          </button>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold mb-2">Isi Ringkasan:</p>

        <p className="mb-2">
          Rapat membahas progres pengembangan aplikasi notulensi otomatis...
        </p>
        <p className="mb-2">
          <b>Keputusan Rapat:</b> Disepakati penggunaan Google Speech-to-Text...
        </p>
        <p>
          <b>Tindak Lanjut:</b> Evaluasi performa layanan transkripsi...
        </p>
      </div>
    </div>
  );
}