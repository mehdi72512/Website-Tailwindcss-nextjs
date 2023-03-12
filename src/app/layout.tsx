import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Panaverse',
  description: 'Generated by create next app',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}