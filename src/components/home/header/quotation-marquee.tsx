import { useCarouselMarquee } from '@/hooks/use-carousel-marquee';
import { useGetTrendingCoins } from '@/services/coin-service';
import { formatCurrency } from '@/utils/number-utils';

export const QuotationMarquee = () => {
  const { viewportRef } = useCarouselMarquee();
  const { data = [] } = useGetTrendingCoins();

  return (
    <div className="relative w-full py-1">
      <div className="w-full overflow-hidden" ref={viewportRef}>
        <div className="ml-3 flex select-none">
          {data.map(coinInfo => {
            const isPositive = coinInfo.percentageChanged24h > 0;
            const percentageLeading = isPositive ? '+' : '';

            return (
              <div
                className="relative inline-flex min-w-fit gap-2 overflow-hidden px-3"
                key={`coin-info-item-${coinInfo.id}`}
              >
                <span className="text-secondary-800 uppercase">
                  {coinInfo.symbol}
                </span>
                <span>{formatCurrency(coinInfo.currentPrice)}</span>
                <span
                  className={isPositive ? 'text-success-500' : 'text-error-500'}
                >
                  {percentageLeading}
                  {coinInfo.percentageChanged24h.toFixed(3)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
