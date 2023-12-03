require('dotenv').config();
// ova e layout za cella applikacija children se site strani na aplikacijata 
import { Inter, Roboto_Serif, Montserrat } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/contex/ThemeContex'
import AuthProvider from "@/components/AuthProvider/AuthProvider";


const inter = Inter({ subsets: ['latin'] })
const montserat = Montserrat({ subsets: ['latin'] })
const roboto = Roboto_Serif({subsets: ['latin']})

export const metadata = {
  title: 'Els Blog',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
