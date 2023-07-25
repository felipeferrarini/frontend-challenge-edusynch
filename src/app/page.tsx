import {
  About,
  HomeFooter,
  HomeHeader,
  NewsLetter,
  Presentation,
  TopCryptos
} from '@/components/home';
import { SignInModal, SignUpModal } from '@/components/home/authentication';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />
      <Presentation />
      <About />
      <TopCryptos />
      <NewsLetter />
      <HomeFooter />
      <SignInModal />
      <SignUpModal />
    </main>
  );
}
