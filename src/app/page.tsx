import { About, HomeHeader, Presentation } from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />
      <Presentation />
      <About />
    </main>
  );
}
