export default function Home() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">🎬 IPTV ULTRA</h1>
        <p className="text-2xl text-gray-300 mb-8">Professional IPTV Streaming Platform</p>
        <div className="grid grid-cols-3 gap-4">
          <a href="#" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold">📺 Channels</a>
          <a href="#" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold">🎥 Movies</a>
          <a href="#" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold">⚙️ Settings</a>
        </div>
        <p className="text-sm text-gray-500 mt-8">✅ Next.js + Capacitor + Production Ready</p>
      </div>
    </div>
  )
}
