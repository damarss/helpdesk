import './globals.css'
import { Footer, Logo, Navbar } from './components'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Helpdesk Politeknik Statistika STIS',
  description: 'Helpdesk untuk mengajukan pertanyaan seputar SPMB Polstat STIS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${poppins.className} text-dark mt-[71px]`}>
        <header>
          <Navbar />        
        </header>
        
        {children}
        <Footer />
      </body>
    </html>
  )
}
