export default function Navbar() {
    return (
        <div className="w-full border-b bg-white">
            <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
                <h1 className="font-bold text-blue-600 text-lg">NotulenOtomatis</h1>
                <button className="text-sm text-blue-600 hover:underline">Lihat Ringkasan</button>
            </div>
        </div>
    )
}