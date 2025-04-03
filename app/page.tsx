import { SAMPLE_LOCATIONS } from '@/app/types';
import { redirect } from 'next/navigation';
function App() {
  const todayLocation = SAMPLE_LOCATIONS.find(
    location => location.date.toDateString() === new Date().toDateString()
  );

  if (!todayLocation) {
    return <div className="flex justify-center items-center h-screen">No location today</div>;
  }
  return redirect(`/location/${todayLocation.slug}`);
  // return (
  //   <LocationLayout >
  //     <LocationPage params={Promise.resolve({ slug: todayLocation.slug })} />
  //   </LocationLayout>
  // );
}

export default App;
