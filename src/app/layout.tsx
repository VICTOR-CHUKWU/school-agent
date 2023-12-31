import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '@/styles/app.scss'
import '@/styles/app.scss'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const popins = Poppins({ subsets: ['latin'], weight: ['100', '200', '400', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'GlobalHT Education',
  description: 'We assist individuals seeking educational advancement overseas through personalized admission assistance and visa counseling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={popins.className}>
        <Nav />
        <div className=' mt-14 md:mt-20'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
