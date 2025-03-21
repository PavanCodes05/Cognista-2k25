import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cognista 2k25 - AI&DS Symposium',
  description: 'Where AI Meets Innovation - Join the premier symposium on Artificial Intelligence and Data Science',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}