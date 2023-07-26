import { DailyVariation } from '@/components/dashboard/daily-variation';
import { NftCard } from '@/components/dashboard/nft-card';
import { WalletBalance } from '@/components/dashboard/wallet-balance';

export default function Dashboard() {
  return (
    <main className="grid-system h-max">
      <section className="desktop:col-end-7 tablet:col-end-9 col-start-1 col-end-5">
        <WalletBalance />
      </section>
      <section className="tablet:col-end-5 desktop:col-start-7 desktop:col-end-10 col-start-1 col-end-3">
        <DailyVariation />
      </section>
      <section className="tablet:col-start-5 tablet:col-end-9 desktop:col-start-10 desktop:col-end-13 col-start-3 col-end-5">
        <NftCard />
      </section>
    </main>
  );
}
