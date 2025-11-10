import Footer from '@/app/_components/Library/Footer';
import Header from '@/app/_components/Library/Header';
import RandomPlanetButton from '@/app/_components/Library/RandomPlanetButton';

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
      <RandomPlanetButton />
    </div>
  );
};

export default LayoutWithHeader;
