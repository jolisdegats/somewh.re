import { SAMPLE_LOCATIONS } from '@/app/data';
import { redirect } from 'next/navigation';
import { getDayOfYear } from './_utils/getDayOfYear';

// Homepage doesn't receive params in Next.js App Router
function App() {
  const todayLocation = SAMPLE_LOCATIONS.find(
    location => location.id === String(getDayOfYear(new Date()))
  );

  if (!todayLocation) {
    return <div className="flex justify-center items-center h-screen">No location today</div>;
  }
  return redirect(`/location/${todayLocation.slug}`);
}

export default App;
