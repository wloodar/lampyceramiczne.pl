import type { NextPage } from 'next'
import Zoom from 'react-medium-image-zoom'
import SEO from '../common/components/seo'

import ExportedImage from 'next-image-export-optimizer'
import { H1, H3, Paragraph, H2 } from 'common/components/typography'
import { ButtonLink } from 'common/components/button'
import InstagramPosts from 'common/components/sections/instagramPosts'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className="lg:-mt-[200px]">
            <SEO title="Lampy Ceramiczne Z Abażurem & Ceramiczne Lampy Stołowe | ELCO" />
            <div className="relative overflow-hidden lg:-mr-[64px] 2xl:aspect-w-4 2xl:aspect-h-2">
                <div className="h-full w-full 2xl:bg-black">
                    <div className="absolute inset-0 left-1/3 -z-10 h-full w-full 2xl:z-0">
                        <ExportedImage
                            // src="/img/instagram-creators/elco-lampy-ceramiczne-szyszka-homewithbluedoor.jpg"
                            src="/img/content/lampa-stolowa-ceramiczna-elco-3003.jpg"
                            alt="Lampa Ceramiczne ELCO Szyszka we wnętrzu Homewithbluedoor"
                            layout={'fill'}
                            objectFit="cover"
                            objectPosition="center"
                            className="opacity-90"
                            priority={true}
                        />
                    </div>
                    <div className="container-padding inset-0 box-border bg-[#141414] bg-opacity-80 pt-32 pb-24 2xl:absolute 2xl:top-auto 2xl:max-w-3xl 2xl:bg-opacity-0 2xl:pl-24 2xl:pr-0">
                        <H1 className="mb-4 2xl:!text-7xl">
                            <span className="2xl:text-7xl!leading-5 block font-medium uppercase leading-[1.2] text-white">
                                ELCO Lampy Ceramiczne
                            </span>
                            <span className="mt-6 block max-w-lg text-sm font-light leading-7 text-neutral-300 sm:!leading-[2] 2xl:text-base">
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
            <div className="mt-12 bg-[#fffcee]">
                <div className="wl-container m-auto max-w-2xl pt-24 pb-20 text-center">
                    <div className="mb-4 text-sm font-medium">/ Wstęp</div>
                    <Paragraph
                        size="text-3xl"
                        className="font-normal leading-[1.4]"
                    >
                        ELCO jest producentem klasycznych lamp ceramicznych w
                        pełni wykonanych na terenie Polski. Marka powstała ponad
                        20 lat temu z zamiłowaniem do ceramiki i tradycji. ELCO
                        specjalizuje się w tworzeniu wysokiej jakości
                        ceramicznych opraw oświetleniowych.
                    </Paragraph>
                    <div className="mt-10 inline-block border-t border-stone-500 px-10 py-4">
                        Based in Poland
                    </div>
                </div>
            </div>
            <div>
                <div className="wl-container m-auto mt-10 max-w-6xl pt-24 pb-20">
                    <div className="relative flex items-center">
                        <div className="absolute left-0 top-0 text-sm font-medium">
                            / Historia
                        </div>
                        <div className="mr-24 w-[390px]">
                            <H2>Tworzone ręcznie z pasją od ponad 20 lat</H2>
                            <Paragraph className="mt-10 !leading-[2]">
                                {/* ELCO jest producentem klasycznych lamp
                                ceramicznych w pełni wykonanych na terenie
                                Polski. Marka powstała ponad 20 lat temu z
                                zamiłowaniem do ceramiki i tradycji. ELCO
                                specjalizuje się w tworzeniu wysokiej jakości
                                ceramicznych opraw oświetleniowych. */}
                                W ELCO od samego początku znacząca uwagę
                                przywiązywaliśmy do tradycji oraz jakości
                                naszych wyrobów. Od momentu powstania nie
                                pozwoliśmy na jakiekolwiek kompromisy i do dnia
                                dzisiejszego dostarczamy dla naszych klientów
                                starannie wykonane, klasyczne lampy ceramiczne.
                            </Paragraph>
                            <Link href={`/na-temat-elco`} scroll={false}>
                                <a className="mt-16 inline-block border-b border-stone-700 pb-1 hover:border-stone-500 hover:text-neutral-500">
                                    Na temat ELCO
                                </a>
                            </Link>
                        </div>
                        <div className="aspect-w-4 aspect-h-3 relative flex-1">
                            <ExportedImage
                                src="/img/content/elco-hala-produkcyjna-formy-zblizenie.jpg"
                                alt="Hala produkcyjna lamp ceramicznych formy"
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="wl-container bg-[#fffcee] pt-24 pb-20"></div>
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
    )
}

export default Home
