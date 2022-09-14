import ExportedImage from 'next-image-export-optimizer'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Paragraph } from '../typography'
import { H2 } from 'common/components/typography'

const BasicParagraph = ({ children }: { children: React.ReactNode }) => (
    <Paragraph className="mt-10">{children}</Paragraph>
)

const BasicImage = ({
    aspectW = 4,
    aspectH = 2,
    children,
}: {
    aspectW?: number | string
    aspectH?: number | string
    children: React.ReactNode
}) => (
    <Zoom zoomMargin={100}>
        <div
            className={`aspect-w-${aspectW} aspect-h-${aspectH} relative mt-10`}
        >
            {children}
        </div>
    </Zoom>
)

const IntroContent = () => {
    return (
        <div>
            <BasicImage>
                <ExportedImage
                    src="/img/content/elco-hala-produkcyjna-prezentacja.jpg"
                    alt="Hala produkcyjna lamp ceramicznych ELCO"
                    layout={'fill'}
                    objectFit="cover"
                    objectPosition="center"
                />
            </BasicImage>
            <BasicParagraph>
                ELCO już od ponad 20 lat jest producentem lamp ceramicznych.
                Cały proces tworzenia naszych lamp ceramicznych odbywa się na
                terenie Polski według tradycji włocławskiego fajansu. Już od
                samego początku naszym celem było dostarczanie produktu o
                solidnym wykonaniu oraz niepowtarzalnym designie. Dzięki
                nabytemu przez ten cały okres czasu doświadczenia, udało nam się
                stworzyć lampy ceramiczne, o których od zawsze marzyliśmy. Nasza
                oferta została starannie przygotowana, tak aby każde wnętrze
                mogło zostać pięknie rozświetlone oraz wzbogacone o pewien
                element klasyki jak i zarówno elegancji. Duże doświadczenie jak
                i stare dobre tradycje fajansu włocławskiego, pozwalają nam na
                zaoferowanie wyrobów nowoczesnych tak w szkliwach błyszczących,
                matowych lub efektowych oraz innych technikach zdobniczych.
                Podejmujemy się również realizacji lamp ceramicznych według
                indywidualnych preferencji i pomysłu klienta.
            </BasicParagraph>
            <BasicImage>
                <ExportedImage
                    src="/img/content/hotel-bonerowski-lampy-ceramiczne-4000-elco.jpg"
                    alt="Lampy ceramiczne w hotelu Bonerowskim"
                    layout={'fill'}
                    objectFit="cover"
                    objectPosition="center"
                />
            </BasicImage>
        </div>
    )
}

const ProductionContent = () => {
    return (
        <div className="mt-16">
            <H2 className="uppercase">Proces produkcji</H2>
            <BasicParagraph>
                Proces produkcji jest fundamentalną kwestią jeżeli chodzi o
                nasze lampy ceramiczne. Jako producent lamp ceramicznych, który
                działa już od ponad 20 lat w tej branży, naszym głównym celem
                jest dostarczenie osobą, które nam zaufały, produktu wyjątkowego
                o nietuzinkowym designie i solidnym wykonaniu. W celu spełnienia
                tych postulatów, od samego początku skupiliśmy się na rozwoju -
                poznawanie nowych technik, odkrywanie różnych metod, nabywanie
                potrzebnego sprzętu. Dzięki poświęconemu czasu i włożonej
                ciężkiej pracy, udało nam się ukształtować idealny proces
                twórczy naszych lamp ceramicznych.
            </BasicParagraph>
            <BasicParagraph>
                Pierwszym etapem w całym procesie, jest wykonanie odlewu lampy
                ceramicznej przy wykorzystaniu wcześniej zaprojektowanych form.
                Do wykonania takiego odlewu, przygotowujemy specjalną masę,
                która jest bezustannie przez nas monitorowana pod kątem jakości
                i mieszana przy pomocy dostępnej maszyny w naszej hali
                produkcyjnej.
            </BasicParagraph>
            <BasicImage>
                <ExportedImage
                    src="/img/content/elco-hala-produkcyjna-mieszarka-masy.jpg"
                    alt="Mieszarka masy do lamp ceramicznych"
                    layout={'fill'}
                    objectFit="cover"
                    objectPosition="center"
                />
            </BasicImage>
            <div className="flex">
                <div className="w-50% flex-1 mr-5">
                    <BasicImage aspectW={2} aspectH={3}>
                        <ExportedImage
                            src="/img/content/elco-hala-produkcyjna-formy-zblizenie.jpg"
                            alt="Hala produkcyjna ELCO lampy ceramiczne formy"
                            layout={'fill'}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </BasicImage>
                </div>
                <div className="w-50% flex-1 ml-5">
                    <BasicImage aspectW={2} aspectH={3}>
                        <ExportedImage
                            src="/img/content/elco-hala-produkcyjna-formy-poziomo-pionowa.jpg"
                            alt="Hala produkcyjna lamp ceramicznych formy"
                            layout={'fill'}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </BasicImage>
                </div>
            </div>
            <BasicParagraph>
                Po upływie pewnego okresu czasu, gotowy model lampy ceramicznej
                jest uwalniany z formy. Następnie taki gotowy odlew zostaje
                przez nas bardzo ostrożnie przeniesiony do miejsca, w którym
                będzie mógł swobodnie schnąć. Wydająca się na pierwszy rzut oka
                niezbyt skomplikowana czynność, jest tak naprawdę podstawowym
                oraz bardzo ważnym elementem produkcji naszych lamp
                ceramicznych. Wynika to z faktu, że właściwości oswobodzonej z
                formy masy, mogą wpłynąć negatywnie na wymodelowany kształt
                lampy ceramicznej w dość szybki i prosty sposób, gdy cała
                czynność wykonana jest bez niezbędnej staranności.
            </BasicParagraph>
            <BasicParagraph>
                Następnym etapem produkcji naszych ceramicznych lamp, jest ich
                wykończenie. Wyjęty z formy model lampy ceramicznej nie jest
                jeszcze w pełni gotowym produktem, który może przejść kolejno
                szkliwienie i wypał. W celu przejścia do kolejnego etapu,
                wykonywane są czynności wykończeniowe, takie jak likwidacja
                szwów, które zostały pozostawione przez formę oraz zamywanie
                gotowego modelu lampy ceramicznej w celu pozbycia się wszelkich
                niedoskonałości.
            </BasicParagraph>
            <BasicParagraph>
                Kolejnym krokiem po wykonaniu prac wykończeniowych przy gotowych
                modelach lamp ceramicznych jest ich szkliwienie. W naszej hali
                produkcyjnej posiadamy dość unikatową maszynę, której zadaniem
                jest wyrób szkliwa do naszych lamp ceramicznych. Mowa tutaj o
                Młynie kulowym. Służy on do mielenia zarówno suchych jak i
                mokrych surowców średniotwardych i miękkich, w tym przypadku
                fryty.
            </BasicParagraph>
            <BasicImage>
                <ExportedImage
                    src="/img/content/elco-hala-produkcyjna-mlyn-kulowy-szkliwo.jpg"
                    alt="Młyn kulowy do szkliwa wykorzystywanego w lampach ceramicznych ELCO"
                    layout={'fill'}
                    objectFit="cover"
                    objectPosition="center"
                />
            </BasicImage>
            <div className="flex items-center">
                <div className="flex-1 mr-20">
                    <BasicParagraph>
                        Gotowe szkliwo zostaje następnie nanoszone na model
                        lampy ceramicznej. W przypadku większych elementów,
                        stosujemy równie skuteczną metodę szkliwienia
                        natryskowego. Po wykonaniu wszystkich czynności
                        związanymi z wykończeniem oraz szkliwieniem lampy
                        ceramicznej, następuję moment, w którym tak gotowy model
                        zostaje poddany procesowi wypału ostrego. Do tego
                        zadania wykorzystujemy specjalny piec, który w celu
                        zrealizowania poprawnego wypału, uzyskuje temperaturę
                        wynoszącą ponad 1000 stopni celsjusza. Nasze niektóre
                        lampy ceramiczne zbudowane są z kilku pojedynczych
                        części, dlatego finalnie po zakończeniu wypału ostrego,
                        dokonujemy montażu wszystkich elementów danego modelu,
                        tak aby w efekcie końcowym otrzymać gotową lampę
                        ceramiczną.
                    </BasicParagraph>
                </div>
                <div className="w-80">
                    <BasicImage aspectW={2} aspectH={2}>
                        <ExportedImage
                            src="/img/content/elco-hala-produkcyjna-piec-wypal-ostry.jpg"
                            alt="Piec do wypału lamp ceramicznych"
                            layout={'fill'}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </BasicImage>
                </div>
            </div>
        </div>
    )
}

const RealizationsContent = () => {
    return (
        <div className="mt-28">
            <H2 className="uppercase">
                Lampy ceramiczne pod indywidualne zamówienie
            </H2>
            <BasicParagraph>
                ELCO wychodząc na wprost oczekiwaniom swoich klientów i
                posiadanych przez nich niesamowitych pomysłów, umożliwia
                realizację lampy ceramicznej według własnej koncepcji po
                wcześniejszym skonsultowaniu się z osobą z naszego zespołu.
                Lampy ceramiczne z abażurem wykonane na zamówienie indywidualne,
                to cecha wyróżniającą ELCO pośród innych dostępnych rozwiązań.
                Droga do wprowadzenia danej opcji do naszej oferty, była
                poprzedzona ciężką pracą i staraniem w celu osiągnięcia
                zadowalających efektów. Dzięki nabytemu doświadczeniu przez ten
                cały okres czasu, jesteśmy w stanie zapewnić klientowi, lampę
                ceramiczną, która w pełni go usatysfakcjonuje.
            </BasicParagraph>
            <BasicImage aspectW={2} aspectH={2}>
                <ExportedImage
                    src="/img/instagram-creators/bohodom-personalized.jpg"
                    alt="Spersonalizowana Lampa Ceramiczna ELCO"
                    layout={'fill'}
                    objectFit="cover"
                    objectPosition="center"
                />
            </BasicImage>
        </div>
    )
}

const ProductionTime = () => {
    return (
        <div className="mt-28">
            <H2 className="uppercase">Czas realizacji</H2>
            <div className="flex items-center">
                <div className="flex-1 mr-20">
                    <BasicParagraph>
                        Lampy ceramiczne ELCO produkowane są z największa
                        precyzją i dbałością o szczegóły tak, aby dostarczyć
                        klientowi produkt najwyższej jakości. Każda z naszych
                        lamp ceramicznych przechodzi przez zaawansowany proces
                        produkcji pod nadzorem osób z ponad 20 letnim
                        doświadczeniem (Więcej na temat procesu produkcji lamp
                        ceramicznych ELCO w sekcji "Proces produkcji"). W
                        związku z rozbudowanymi etapami produkcji naszych lamp
                        ceramicznych, czas realizacji zamówienia z reguły wynosi
                        około 30 dni. Wyznaczony termin może jednak ulec zmian
                        za sprawą niektórych czynników, jak np. poziom
                        zaawansowania produkcji lampy ceramicznej pod zamówienie
                        indywidualne czy dostępności gotowego modelu lampy
                        ceramicznej, co w tym drugim przypadku pozwala na
                        zrealizowanie zamówienia już w kilka dni roboczych.
                    </BasicParagraph>
                </div>
                <div className="w-80">
                    <BasicImage aspectW={2} aspectH={2}>
                        <ExportedImage
                            src="/img/content/elco-hala-produkcyjna-formy-gotowe-modele-polka.jpg"
                            alt="Formy oraz wyschnięte masy od lamp ceramicznych"
                            layout={'fill'}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </BasicImage>
                </div>
            </div>
        </div>
    )
}

export { IntroContent, ProductionContent, RealizationsContent, ProductionTime }
