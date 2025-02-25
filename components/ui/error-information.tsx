import { PrimaryButtonLink } from '@/components/ui/primary-button-link';
import HomeIcon from '@/components/ui/home-icon';
import NotFoundIcon from '@/components/ui/not-found';

export default function ErrorInformation() {
  return (
    <div className="flex items-center justify-center min-h-screen px-12 py-16 text-center sm:py-20 lg:py-24 xl:py-32">
      <div className="max-w-md xl:max-w-lg">
        <NotFoundIcon className="w-full h-[410px]" />
        <p className="text-15px md:text-base 2xl:text-[18px] leading-7 md:leading-8 pt-4 font-black pb-7">
          Nous sommes désolés! Cette page est actuellement indisponible. Nous
          vous demandons de bien vouloir réessayer plus tard.
        </p>
        <PrimaryButtonLink
          href={'/'}
          className='class="text-[13px] md:text-sm lg:text-[15px] leading-4 inline-flex items-center font-medium cursor-pointer transition ease-in-out duration-300 text-white px-4 md:px-6 py-2.5 lg:py-3 hover:text-white bg-opacity-90 hover:bg-opacity-100 rounded-md'
        >
          <HomeIcon width="14" />
          <span className="ps-2">Retour à l&apos;accueil</span>
        </PrimaryButtonLink>
      </div>
    </div>
  );
}
