import { NewsLetterForm } from './newsletter-form';

export const NewsLetter = (): JSX.Element => {
  return (
    <section className="desktop:py-[120px] tablet:py-20 bg-gradient-[138deg] relative from-[#FBAB34] to-[#AD721A] px-3 py-14">
      <div className="grid-system relative z-10 items-center gap-10">
        <div className="tablet:col-end-5 desktop:col-start-2 desktop:col-end-6 col-start-1 col-end-5 flex flex-col">
          <h4 className="desktop:heading-4 tablet:heading-5 body text-primary-200 mb-1 font-bold">
            Lorem ipsum
          </h4>
          <h2 className="desktop:heading-2 tablet:heading-3 heading-4 mb-4 font-bold text-white">
            Lorem ipsum
          </h2>
          <p className="tablet:body paragraph text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>

        <div className="tablet:col-end-9 desktop:col-start-8 desktop:col-end-12 w-ful tablet:col-start-5 col-start-1 col-end-5">
          <NewsLetterForm />
        </div>
      </div>

      <div
        style={{ backgroundImage: 'url(/images/waves.svg)' }}
        className="absolute inset-0 z-0 h-full w-full -scale-x-100 bg-cover bg-center bg-no-repeat"
      />
    </section>
  );
};
