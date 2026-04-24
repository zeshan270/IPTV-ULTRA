import './globals.css'

export const metadata = {
  title: 'IPTV ULTRA',
  description: 'Professional IPTV Streaming Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">{children}</body>
    </html>
  )
}
