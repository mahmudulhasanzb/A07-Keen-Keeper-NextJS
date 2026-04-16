import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavbarPage from '@/components/Shared/Navbar/Navbar';
import Footer from '@/components/Shared/Footer';
import { Toaster } from 'react-hot-toast';

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
  description: 'friends to keep close in your life',
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
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
