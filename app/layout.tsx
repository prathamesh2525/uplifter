import './globals.css'

export const metadata = {
  title: 'uplifter',
  description: 'build strong profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
