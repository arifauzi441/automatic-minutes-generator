import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function UploadCard() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    setFile(selectedFile)
    const url = URL.createObjectURL(selectedFile)
    setPreviewUrl(url)
  }

  const handleProcess = () => {
    if (!file) return alert("Pilih video terlebih dahulu")
    navigate("/result")
  }

  // cleanup memory (best practice)
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <div className="border-2 border-dashed border-blue-300 rounded-xl p-10 text-center">
        <p className="font-medium">Klik atau Seret Video ke Sini</p>
        <p className="text-sm text-gray-500 mb-4">
          Dukungan format: MP4, MOV, AVI (maks 500mb)
        </p>

        <input
          type="file"
          accept="video/*"
          className="hidden"
          id="fileUpload"
          onChange={handleChange}
        />

        <label
          htmlFor="fileUpload"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700"
        >
          Pilih Video
        </label>
      </div>

      {file && (
        <div className="mt-6 text-center">
          <p className="text-sm mb-4">
            Nama file: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </p>

          {/* 🎬 PREVIEW VIDEO */}
          {previewUrl && (
            <video
              src={previewUrl}
              controls
              className="w-full max-h-80 rounded-lg mb-4"
            />
          )}

          <button
            onClick={handleProcess}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Proses dan Buat Ringkasan
          </button>
        </div>
      )}
    </div>
  )
}