import { About, HomeHeader, Presentation, TopCryptos } from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />
      <Presentation />
      <About />
      <TopCryptos />
    </main>
  );
}
