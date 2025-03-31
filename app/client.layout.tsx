import Footer from '@/app/_components/Library/Footer';
import Header from '@/app/_components/Library/Header';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </body>
  );
};

export default ClientLayout;
