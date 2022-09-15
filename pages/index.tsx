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
        <div className="-mt-[200px]">
            <SEO />
            <div className="aspect-w-4 aspect-h-2 relative -mr-[64px]">
                <div className="h-full w-full bg-black">
                    <ExportedImage
                        src="/img/instagram-creators/elco-lampy-ceramiczne-szyszka-homewithbluedoor.jpg"
                        alt="Lampa Ceramiczne ELCO Szyszka we wnętrzu Homewithbluedoor"
                        layout={'fill'}
                        objectFit="cover"
                        objectPosition="center"
                        className="opacity-90"
                    />
                    <div className="absolute left-0 bottom-0 box-border max-w-3xl bg-[#141414] pt-32 pb-10 pl-28">
                        <H1 className="text-7xl text-white">
                            <span className="block uppercase">
                                ELCO Lampy Ceramiczne
                            </span>
                            <span className="mt-4 block max-w-lg text-base font-light leading-9 text-neutral-300">
                                Ponad 20 lat doświadczenia. Lampy ceramiczne
                                wykonane w Polsce. Indywidualne podejście do
                                każdego zamówienia.
                            </span>
                        </H1>
                        <ButtonLink
                            href={`/oferta`}
                            className="border border-black hover:border-neutral-800"
                        >
                            Zobacz ofertę
                        </ButtonLink>
                        <ButtonLink
                            href={`/na-temat-elco`}
                            type="bs-outline"
                            className="mt-6 ml-6 inline-block !text-white hover:!text-stone-200"
                        >
                            Skontaktuj się
                        </ButtonLink>
                    </div>
                </div>
            </div>
            <div className="-mr-[64px] h-[100px] bg-[#141414]"></div>

            <div className="m-auto mt-16 mt-32 max-w-[1500px]">
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
                <div className="mt-20 grid grid-cols-12 gap-x-10">
                    {instagramPosts.map(post => (
                        <div key={post.url} className="col-span-4">
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

            <div className="m-auto mt-24 mb-16 max-w-[1500px]">
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
