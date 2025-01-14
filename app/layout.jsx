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
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-[-1]">
        <source src={'/bg/vbg.mp4'} type="video/mp4"/>
          Your browser does not support the video tag.
      </video>
      <body>{children}</body>
    </html>
  )
}

