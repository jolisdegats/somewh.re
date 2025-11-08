import LocationPage from './(pages)/location/[[...slug]]/page';

export default function HomePage() {
  return <LocationPage params={Promise.resolve({ slug: undefined })} />;
}
