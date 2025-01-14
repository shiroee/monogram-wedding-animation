import { Suspense } from 'react';
import './globals.css';
import localFont from 'next/font/local'

const weddingFont = localFont({
  src: './fonts/ShelleyAllegro.woff',
  display: 'swap',
  variable: '--font-wedding-font',
})
export const metadata = {
  title: 'Paul & Rica',
  description: 'Paul and Rica are getting married!',
  icons: {
    icon: [
        { url: '/ico32x32.ico', sizes: '32x32', type: 'image/png'},
        { url: '/ico192x192.ico', sizes: '192x192', type: 'image/png'},
    ],
    shortcut: '/ico32x32.ico',
    apple: [
        { url: '/ico32x32.ico', sizes: '32x32', type: 'image/png'},
        { url: '/ico192x192.ico', sizes: '192x192', type: 'image/png'},
    ],
    other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/ico32x32.ico',
    },
},
};

export default function RootLayout({ children}) {
  return (
    <html lang="en" className={weddingFont.variable}>
      <body>
        <Suspense>
          <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover z-[-1]">
            <source src={'/mwa/bg/vbg.mp4'} type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
        </Suspense>
        {children}
      </body>
    </html>
  )
}

