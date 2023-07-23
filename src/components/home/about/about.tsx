import { HeaderSpacer } from '../header';
import { aboutInfos } from './constants';
import { InfoCard } from './info-card';
import { InfoCardsCarousel } from './info-cards-carousel';

export const About = (): JSX.Element => {
  return (
    <section
      id="about-us"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-white to-[#F7F7F7] px-3"
    >
      <HeaderSpacer />
      <div className="grid-container tablet:grid-system tablet:grid flex h-full flex-col items-center">
        <div className="desktop:order-1 desktop:col-start-1 desktop:col-end-7 tablet:block order-2 col-start-1 col-end-8 hidden">
          <div className="flex flex-wrap gap-8">
            {aboutInfos.map((info, index) => (
              <InfoCard
                key={`about-info-card-${info.label}`}
                {...info}
                className={index === 2 ? 'ml-auto' : ''}
              />
            ))}
          </div>
        </div>

        <div className="desktop:order-2 desktop:col-start-8 desktop:col-end-12 order-1 col-start-2 col-end-7">
          <div className="flex flex-col items-start">
            <p className="body desktop:heading-5 text-primary-500 mb-1 font-bold">
              Lorem ipsum
            </p>

            <h2 className="heading-4 tablet:heading-3 desktop:heading-2 mb-4 font-bold">
              Lorem ipsum
            </h2>

            <p className="paragraph tablet:body tablet:mb-10 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <button className="btn btn-primary btn-large desktop:flex hidden">
              Sign up now
            </button>
          </div>
        </div>

        <div className="tablet:hidden order-2" aria-hidden>
          <InfoCardsCarousel
            slides={aboutInfos.map((info, index) => (
              <InfoCard
                key={`about-info-card-${info.label}`}
                {...info}
                className={index === 2 ? 'ml-auto' : ''}
              />
            ))}
          />
        </div>
      </div>
    </section>
  );
};
