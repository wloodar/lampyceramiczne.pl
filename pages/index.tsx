import type { NextPage } from 'next'
import Zoom from 'react-medium-image-zoom'
import SEO from '../common/components/seo'

import ExportedImage from 'next-image-export-optimizer'
import { H1, H3, Paragraph } from 'common/components/typography'
import { ButtonLink } from 'common/components/button'
import InstagramPosts from 'common/components/sections/instagramPosts'

const Home: NextPage = () => {
    return (
        <div className="lg:-mt-[200px]">
            <SEO />
            <div className="relative lg:-mr-[64px] 2xl:aspect-w-4 2xl:aspect-h-2">
                <div className="h-full w-full 2xl:bg-black">
                    <div className="absolute inset-0 -z-10 h-full w-full 2xl:z-0">
                        <ExportedImage
                            src="/img/instagram-creators/elco-lampy-ceramiczne-szyszka-homewithbluedoor.jpg"
                            // src="/img/content/lampa-stolowa-ceramiczna-elco-3003.jpg"
                            alt="Lampa Ceramiczne ELCO Szyszka we wnętrzu Homewithbluedoor"
                            layout={'fill'}
                            objectFit="cover"
                            objectPosition="center"
                            className="opacity-90"
                            priority={true}
                        />
                    </div>
                    <div className="container-padding inset-0 box-border bg-[#141414] bg-opacity-80 pt-32 pb-10 2xl:absolute 2xl:top-auto 2xl:max-w-3xl 2xl:bg-opacity-100 2xl:pl-24 2xl:pr-0">
                        <H1 className="2xl:!text-7xl">
                            <span className="block uppercase text-white 2xl:text-7xl">
                                ELCO Lampy Ceramiczne
                            </span>
                            <span className="mt-4 block max-w-lg text-sm font-light leading-7 text-neutral-300 sm:leading-9 2xl:text-base">
                                Ponad 20 lat doświadczenia. Lampy ceramiczne
                                wykonane w Polsce. Indywidualne podejście do
                                każdego zamówienia.
                            </span>
                        </H1>
                        <ButtonLink
                            href={`/oferta`}
                            color={'bright'}
                            className="mt-7 block border sm:mt-0 sm:inline-block sm:text-left"
                        >
                            Zobacz ofertę
                        </ButtonLink>
                        <ButtonLink
                            href={`/kontakt`}
                            type="bs-outline"
                            color="bright"
                            className="mt-6 block text-center sm:ml-6 sm:inline-block sm:text-left"
                        >
                            Skontaktuj się
                        </ButtonLink>
                    </div>
                </div>
            </div>
            <div className="-mr-[64px] hidden h-[100px] bg-[#141414] 2xl:block"></div>

            <div className="container-padding lg:p-0">
                <div className="mt-7 sm:mt-10">
                    <div className="sm:grid sm:grid-cols-2 sm:gap-x-10">
                        <div className="aspect-w-3 aspect-h-2 relative">
                            <ExportedImage
                                src="/img/content/hotel-lampy-ceramiczne-elco-kobalt-czarne.jpg"
                                alt="Lampy ceramiczne ELCO aranżacja"
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                                placeholder="blur"
                            />
                        </div>
                        <div className="aspect-w-3 aspect-h-2 relative mt-7 sm:mt-0">
                            <ExportedImage
                                src="/img/content/palac-lampa-ceramiczna-elco-szyszka.jpg"
                                alt="Lampy ceramiczne ELCO aranżacja"
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-7 border-b border-stone-200 pb-10 sm:mt-10">
                    <div className="sm:grid sm:grid-cols-2 sm:gap-x-10">
                        <div className="aspect-w-3 aspect-h-2 relative">
                            <ExportedImage
                                src="/img/content/hotel-bonerowski-lampa-ceramiczna-elco-maly-andrzej.jpg"
                                alt="Lampy ceramiczne ELCO aranżacja"
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                                placeholder="blur"
                            />
                        </div>
                        <div className="aspect-w-3 aspect-h-2 relative mt-7 sm:mt-0">
                            <ExportedImage
                                src="/img/content/hotel-bonerowski-lampy-ceramiczne-4000-elco.jpg"
                                alt="Lampy ceramiczne ELCO aranżacja"
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="wl-container m-auto mt-10 sm:mt-14 md:mt-16">
                <InstagramPosts />
            </div>

            <div className="wl-container m-auto mt-8 mb-16 sm:mt-24">
                <H3 className="text-base uppercase">Pare słów o nas</H3>
                <Paragraph className="mt-8 !text-sm !leading-6">
                    ELCO jest{' '}
                    <strong>polskim producentem lamp ceramicznych</strong>{' '}
                    działającym w tej branży już od ponad 20 lat. Wyróżniającymi
                    aspektami naszych <strong>ceramicznych lamp</strong> są
                    kolejno klasyczne wykonanie, wraz z eleganckim designem oraz
                    wysoka jakość wykonania. Od samego początku naszym
                    priorytetem było spełnienie oczekiwań osób, które
                    zdecydowały się nam zaufać i pozwolić dostarczyć dla nich
                    nasze <strong>lampy ceramiczne z abażurem</strong>. Za
                    sprawą trzymania się tej fundamentalnej zasady, udało nam
                    się osiągnąć upragniony efekt, który dzisiaj chcemy dla
                    Ciebie przedstawić w postaci naszej oferty.
                </Paragraph>
                <Paragraph className="mt-8 !text-sm !leading-6">
                    Jesteśmy{' '}
                    <strong>polskim producentem lamp ceramicznych</strong>.
                    Proces powstawania naszych lamp ceramicznych od momentu
                    złożenia zamówienia, przez przygotowanie i stworzenie danej
                    lampy ceramicznej, odbywa się w całości na terenie Polski
                    według tradycji fajansu włocławskiego. Nasza hala
                    produkcyjna wyposażona jest w niezbędne maszyny i narzędzia,
                    które pozwalają na wyprodukowanie naszych{' '}
                    <strong>lamp ceramicznych z abażurem</strong>. Pomimo całego
                    zaplecza, decydującym czynnikiem w ELCO, jest całe,{' '}
                    <strong>ponad 20 letnie doświadczenie</strong> osób
                    pracujących i kontrolujących cały proces powstawania naszych{' '}
                    <strong>lamp ceramicznych</strong>.
                </Paragraph>
                <Paragraph className="mt-8 !text-sm !leading-6">
                    Nasze <strong>lampy ceramiczne z abażurem</strong> idealnie
                    spełnią rolę jako przyjemna ozdoba twojego wnętrza,
                    rozświetlając i tworząc wyjątkową atmosferę. W naszej
                    starannie przygotowanej ofercie znajdziesz{' '}
                    <strong>lampy stołowe ceramiczne</strong>, jak i{' '}
                    <strong>ceramiczne lampy podłogowe</strong>. Jako cel,
                    obraliśmy odnalezienie balansu w kwestii klasycznego designu
                    naszych lamp ceramicznych, a dzisiejszych trendów widocznych
                    we wnętrzach domów i lokali. W kolekcji naszych lamp
                    ceramicznych odnajdziesz zarówno klasyczny motyw białego
                    szkliwa, który pięknie zaprezentuje się w stylu Hampton, jak
                    i eleganckie motywy kobaltu czy czerni.
                </Paragraph>
                <Paragraph className="mt-8 !text-sm !leading-6">
                    ELCO wychodząc na wprost oczekiwaniom swoich klientów i
                    posiadanych przez nich niesamowitych pomysłów, umożliwia
                    realizacje <strong>lampy ceramicznej </strong> według
                    własnej koncepcji po wcześniejszym skonsultowaniu się z
                    osobą z naszego zespołu.{' '}
                    <strong>
                        Lampy ceramiczne z abażurem wykonane na zamówienie
                        indywidualne
                    </strong>
                    , to cecha wyróżniającą ELCO pośród innych dostępnych
                    rozwiązań. Droga do wprowadzenia danej opcji do naszej
                    oferty, była poprzedzona ciężką pracą i staraniem w celu
                    osiągnięcia zadowalających efektów. Dzięki nabytemu
                    doświadczeniu przez ten cały okres czasu, jesteśmy w stanie
                    zapewnić klientowi, <strong>lampę ceramiczną</strong>, która
                    w pełni go usatysfakcjonuje.
                </Paragraph>
                <div className="aspect-w-2 aspect-h-1 relative mt-10">
                    <ExportedImage
                        src="/img/content/elco-hala-produkcyjna-wyschniete-lampy.jpg"
                        alt="Hala produkcyjna lamp ceramicznych ELCO"
                        layout={'fill'}
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
                <div className="mt-12 text-center">
                    <ButtonLink
                        href={`/na-temat-elco`}
                        className="block sm:inline-block"
                    >
                        Dowiedz się więcej
                    </ButtonLink>
                    <ButtonLink
                        href={`/oferta`}
                        type="bs-outline"
                        className="mt-5 block sm:ml-6 sm:mt-0 sm:inline-block"
                    >
                        Nasza oferta
                    </ButtonLink>
                </div>
            </div>
        </div>
        // <div className="flex h-screen w-full items-center justify-center">
        //     <SEO />
        // </div>
    )
}

export default Home
