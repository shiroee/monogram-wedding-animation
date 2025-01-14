import './globals.css';
import localFont from 'next/font/local'

const weddingFont = localFont({
  src: './fonts/ShelleyAllegro.woff',
  display: 'swap',
  variable: '--font-wedding-font',
})

export default function RootLayout({ children}) {
  return (
    <html lang="en" className={weddingFont.variable}>
      <body>{children}</body>
    </html>
  )
}

