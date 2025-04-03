import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/app/_components/Library/Footer';
import Header from '@/app/_components/Library/Header';
export const metadata: Metadata = {
  title: 'Somewh.re',
  description: 'Your daily dose of travel inspiration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="relative">
          <div className="min-h-screen bg-white">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
