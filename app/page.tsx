import LocationPage from './(pages)/location/[[...slug]]/page';
import LocationLayout from './(pages)/location/[[...slug]]/layout';

export default function HomePage() {
  return (
    <LocationLayout params={Promise.resolve({ slug: undefined })}>
      <LocationPage params={Promise.resolve({ slug: undefined })} />
    </LocationLayout>
  );
}
