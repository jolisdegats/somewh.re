import Footer from '@/app/_components/Library/Footer';
import Header from '@/app/_components/Library/Header';

const LayoutWithHeader = ({
  children,
  headerChildren,
}: {
  children: React.ReactNode;
  headerChildren: React.ReactNode;
}) => {
  return (
    <div>
      <Header>{headerChildren}</Header>
      <main className="relative">
        <div className="min-h-screen max-w-screen mx-auto bg-white dark:bg-gray-950">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWithHeader;
