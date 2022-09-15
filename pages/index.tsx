import type { NextPage } from 'next'
import SEO from '../common/components/seo'

import ExportedImage from 'next-image-export-optimizer'
import { H1, H3, Paragraph } from 'common/components/typography'
import { ButtonLink } from 'common/components/button'

const instagramPosts: Array<{ author: string; url: string; imgPath: string }> =
    [
        {
            author: 'homewithbluedoor',
            url: 'https://www.instagram.com/p/CNHsVcUMKZ9/',
            imgPath:
                '/homewithbluedoor-elco-lampy-ceramiczne-szyszka-corridor.jpg',
        },
        {
            author: 'pracownia_bohodom',
            url: 'https://www.instagram.com/p/CNKvhZQsPj2/',
            imgPath: '/bohodom-warszawa-lampa-ceramiczna-personalized-dark.jpg',
        },
        {
            author: 'w_moim_malutkim_domu',
            url: 'https://www.instagram.com/p/CTL9gxZIugm/',
            imgPath:
                '/w_moim_malutkim_domu-elco-lampy-ceramiczne-marciniak-bedroom.jpg',
        },
    ]

const Home: NextPage = () => {
    return (
        <div className="lg:-mt-[200px]">
            <SEO />
            <div className="relative lg:-mr-[64px] 2xl:aspect-w-4 2xl:aspect-h-2">
                <div className="h-full w-full 2xl:bg-black">
                    <div className="absolute inset-0 -z-10 h-full w-full 2xl:z-0">
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
                    <div className="container-padding inset-0 box-border bg-[#141414] bg-opacity-80 pt-32 pb-10 2xl:absolute 2xl:top-auto 2xl:max-w-3xl 2xl:bg-opacity-100 2xl:pl-28 2xl:pr-0">
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

            <div className="wl-container m-auto mt-14 md:mt-32">
                <div className="text-center">
                    <H3 className="uppercase">ELCO na instagramie</H3>
                    <a
                        href="https://instagram.com/elco_lampy_ceramiczne"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-light text-neutral-400 hover:text-black"
                    >
                        @elco_lampy_ceramiczne
                    </a>
                </div>
                <div className="mt-12 md:mt-20 md:grid md:grid-cols-12 md:gap-x-10">
                    {instagramPosts.map(post => (
                        <div
                            key={post.url}
                            className="mb-12 md:col-span-4 md:mb-0"
                        >
                            <div className="aspect-w-2 aspect-h-2 relative">
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExportedImage
                                        src={`/img/instagram-creators${post.imgPath}`}
                                        alt={`Instagram post by ${post.author} with elco`}
                                        layout={'fill'}
                                        objectFit="cover"
                                        objectPosition="center"
                                        className="cursor-pointer opacity-95 hover:opacity-75"
                                    />
                                </a>
                            </div>
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-sm font-light italic text-neutral-400 hover:text-black"
                            >
                                @{post.author}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="wl-container m-auto mt-16 mb-16 sm:mt-24">
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
            </div>
        </div>
        // <div className="flex h-screen w-full items-center justify-center">
        //     <SEO />
        // </div>
    )
}

export default Home
