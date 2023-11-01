import { Inter } from 'next/font/google'
import '../public/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'INICIO - TURI-BALAM',
  description: 'Página principal sobre el turismo del municipio de Balancán, Tabasco.',
  keywords: "turismo, balancán, tabasco",
  applicationName: "TURI-BALAM",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body classNameName={inter.classNameName}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
