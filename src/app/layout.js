import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavbarPage from '@/components/Shared/Navbar/Navbar';
import Footer from '@/components/Shared/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Keen Keeper | Home Page',
  description: 'Freinds to keep close in your life',
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarPage />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
