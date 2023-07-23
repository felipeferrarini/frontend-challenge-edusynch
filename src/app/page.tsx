import {
  About,
  HomeFooter,
  HomeHeader,
  NewsLetter,
  Presentation,
  TopCryptos
} from '@/components/home';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />
      <Presentation />
      <About />
      <TopCryptos />
      <NewsLetter />
      <HomeFooter />
    </main>
  );
}
