/** @jsx jsx */
import React, { useState, useEffect, createRef } from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import $ from 'jquery'
import { Layout, SEO, Link } from '../components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import cs from 'classnames'
import s from './scss/about.module.scss'

import ContentsList from './about/contents-list'
import AboutSection from './about/about-section'

const AboutPage = ({ location, data }) => {
    const {
        heroPic,
        aboutPic,
        portraitImageOne,
        twoImagesFirst,
        twoImagesSecond,
        productionMixing,
        mlynKulowy,
        piec,
    } = data

    const aboutSections = [
        {
            id: '1',
            name: 'Wstęp',
            content: (
                <React.Fragment>
                    <div className={s.row}>
                        <div className={s.singlePic}>
                            <Img
                                fluid={heroPic.childImageSharp.fluid}
                                alt="Hala produkcyjna lamp ceramicznych ELCO"
                            />
                        </div>
                        <div className={s.bsDesc}>
                            <p className="bs-p">
                                ELCO już od ponad 20 lat jest producentem lamp
                                ceramicznych. Cały proces tworzenia naszych lamp
                                ceramicznych odbywa się na terenie Polski według
                                tradycji włocławskiego fajansu. Już od samego
                                początku naszym celem było dostarczanie produktu
                                o solidnym wykonaniu oraz niepowtarzalnym
                                designie. Dzięki nabytemu przez ten cały okres
                                czasu doświadczenia, udało nam się stworzyć
                                lampy ceramiczne, o których od zawsze
                                marzyliśmy. Nasza oferta została starannie
                                przygotowana, tak aby każde wnętrze mogło zostać
                                pięknie rozświetlone oraz wzbogacone o pewien
                                element klasyki jak i zarówno elegancji. Duże
                                doświadczenie jak i stare dobre tradycje fajansu
                                włocławskiego, pozwalają nam na zaoferowanie
                                wyrobów nowoczesnych tak w szkliwach
                                błyszczących, matowych lub efektowych oraz
                                innych technikach zdobniczych. Podejmujemy
                                się również realizacji lamp ceramicznych według
                                indywidualnych preferencji i pomysłu klienta.
                            </p>
                        </div>
                        <div className={s.singlePic}>
                            <Img
                                fluid={aboutPic.childImageSharp.fluid}
                                alt="Lampy ceramiczne w hotelu Bonerowskim"
                            />
                        </div>
                    </div>
                </React.Fragment>
            ),
        },
        {
            id: '3',
            name: 'Proces produkcji',
            content: (
                <React.Fragment>
                    <div className={s.row}>
                        <div className={s.row__header}>
                            <h2>Proces produkcji</h2>
                        </div>
                        <p className="bs-p">
                            Proces produkcji jest fundamentalną kwestią jeżeli
                            chodzi o nasze lampy ceramiczne. Jako producent lamp
                            ceramicznych, który działa już od ponad 20 lat w tej
                            branży, naszym głównym celem jest dostarczenie
                            osobą, które nam zaufały, produktu wyjątkowego o
                            nietuzinkowym designie i solidnym wykonaniu. W celu
                            spełnienia tych postulatów, od samego początku
                            skupiliśmy się na rozwoju - poznawanie nowych
                            technik, odkrywanie różnych metod, nabywanie
                            potrzebnego sprzętu. Dzięki poświęconemu czasu i
                            włożonej ciężkiej pracy, udało nam się ukształtować
                            idealny proces twórczy naszych lamp ceramicznych.
                        </p>
                        <p className="bs-p">
                            Pierwszym etapem w całym procesie, jest wykonanie
                            odlewu lampy ceramicznej przy wykorzystaniu
                            wcześniej zaprojektowanych form. Do wykonania
                            takiego odlewu, przygotowujemy specjalną masę, która
                            jest bezustannie przez nas monitorowana pod kątem
                            jakości i mieszana przy pomocy dostępnej maszyny w
                            naszej hali produkcyjnej.
                        </p>
                        <div className={s.singlePic}>
                            <Img
                                fluid={productionMixing.childImageSharp.fluid}
                                alt="Mieszarka masy do lamp ceramicznych"
                            />
                        </div>
                        <div className={s.twoPics}>
                            <div className={s.twoPics__item}>
                                <Img
                                    fluid={twoImagesFirst.childImageSharp.fluid}
                                    alt="Hala produkcyjna ELCO lampy ceramiczne formy"
                                />
                            </div>
                            <div className={s.twoPics__item}>
                                <Img
                                    fluid={
                                        twoImagesSecond.childImageSharp.fluid
                                    }
                                    alt="Hala produkcyjna lamp ceramicznych formy"
                                />
                            </div>
                        </div>
                        <div className={s.bsDesc}>
                            <p className="bs-p">
                                Po upływie pewnego okresu czasu, gotowy model
                                lampy ceramicznej jest uwalniany z formy.
                                Następnie taki gotowy odlew zostaje przez nas
                                bardzo ostrożnie przeniesiony do miejsca, w
                                którym będzie mógł swobodnie schnąć. Wydająca
                                się na pierwszy rzut oka niezbyt skomplikowana
                                czynność, jest tak naprawdę podstawowym oraz
                                bardzo ważnym elementem produkcji naszych lamp
                                ceramicznych. Wynika to z faktu, że właściwości
                                oswobodzonej z formy masy, mogą wpłynąć
                                negatywnie na wymodelowany kształt lampy
                                ceramicznej w dość szybki i prosty sposób, gdy
                                cała czynność wykonana jest bez niezbędnej
                                staranności.
                            </p>
                            <p className="bs-p">
                                Następnym etapem produkcji naszych ceramicznych
                                lamp, jest ich wykończenie. Wyjęty z formy model
                                lampy ceramicznej nie jest jeszcze w pełni
                                gotowym produktem, który może przejść kolejno
                                szkliwienie i wypał. W celu przejścia do
                                kolejnego etapu, wykonywane są czynności
                                wykończeniowe, takie jak likwidacja szwów, które
                                zostały pozostawione przez formę oraz zamywanie
                                gotowego modelu lampy ceramicznej w celu
                                pozbycia się wszelkich niedoskonałości.
                            </p>
                            <p className="bs-p">
                                Następnym krokiem po wykonaniu prac
                                wykończeniowych przy gotowych modelach lamp
                                ceramicznych jest ich szkliwienie. W naszej hali
                                produkcyjnej posiadamy dość unikatową maszynę,
                                której zadaniem jest wyrób szkliwa do naszych
                                lamp ceramicznych. Mowa tutaj o Młynie kulowym.
                                Służy on do mielenia zarówno suchych jak i
                                mokrych surowców średniotwardych i miękkich, w
                                tym przypadku fryty.
                            </p>
                        </div>
                        <div className={s.singlePic}>
                            <Img
                                fluid={mlynKulowy.childImageSharp.fluid}
                                alt="Młyn kulowy do szkliwa wykorzystywanego w lampach ceramicznych ELCO"
                            />
                        </div>
                        <div className={s.textPicColumn}>
                            <div className={s.textPicColumn__content}>
                                <p className="bs-p">
                                    Gotowe szkliwo zostaje następnie nanoszone
                                    na model lampy ceramicznej. W przypadku
                                    większych elementów, stosujemy równie
                                    skuteczną metodę szkliwienia natryskowego.
                                    Po wykonaniu wszystkich czynności związanymi
                                    z wykończeniem oraz szkliwieniem lampy
                                    ceramicznej, następuję moment, w którym tak
                                    gotowy model zostaje poddany procesowi
                                    wypału ostrego. Do tego zadania
                                    wykorzystujemy specjalny piec, który w celu
                                    zrealizowania poprawnego wypału, uzyskuje
                                    temperaturę wynoszącą ponad 1000 stopni
                                    celsjusza. Nasze niektóre lampy ceramiczne
                                    zbudowane są z kilku pojedynczych części,
                                    dlatego finalnie po zakończeniu wypału
                                    ostrego, dokonujemy montażu wszystkich
                                    elementów danego modelu, tak aby w efekcie
                                    końcowym otrzymać gotową lampę ceramiczną.
                                </p>
                            </div>
                            <div className={s.textPicColumn__image}>
                                <Img
                                    fluid={piec.childImageSharp.fluid}
                                    alt="Piec do wypału lamp ceramicznych"
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ),
        },
        {
            id: '4',
            name: 'Realizacje indywidualne',
            content: (
                <React.Fragment>
                    <div className={s.row}>
                        <div className={s.row__header}>
                            <h2>
                                Lampy ceramiczne pod indywidualne zamówienie
                            </h2>
                        </div>
                        <div className={s.bsDesc}>
                            <p className="bs-p">
                                ELCO wychodząc na wprost oczekiwaniom swoich
                                klientów i posiadanych przez nich niesamowitych
                                pomysłów, umożliwia realizację lampy ceramicznej
                                według własnej koncepcji po wcześniejszym
                                skonsultowaniu się z osobą z naszego zespołu.
                                Lampy ceramiczne z abażurem wykonane na
                                zamówienie indywidualne, to cecha wyróżniającą
                                ELCO pośród innych dostępnych rozwiązań. Droga
                                do wprowadzenia danej opcji do naszej oferty,
                                była poprzedzona ciężką pracą i staraniem w celu
                                osiągnięcia zadowalających efektów. Dzięki
                                nabytemu doświadczeniu przez ten cały okres
                                czasu, jesteśmy w stanie zapewnić klientowi,
                                lampę ceramiczną, która w pełni go
                                usatysfakcjonuje.
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            ),
        },
        {
            id: '5',
            name: 'Czas realizacji',
            content: (
                <React.Fragment>
                    <div className={s.row}>
                        <div className={s.row__header}>
                            <h2>Czas realizacji</h2>
                        </div>
                        <div className={s.textPicColumn}>
                            <div className={s.textPicColumn__content}>
                                <p className="bs-p">
                                    Lampy ceramiczne ELCO produkowane są z
                                    największa precyzją i dbałością o szczegóły
                                    tak, aby dostarczyć klientowi produkt
                                    najwyższej jakości. Każda z naszych lamp
                                    ceramicznych przechodzi przez zaawansowany
                                    proces produkcji pod nadzorem osób z ponad
                                    20 letnim doświadczeniem (Więcej na temat
                                    procesu produkcji lamp ceramicznych ELCO w
                                    sekcji "Proces produkcji"). W związku z
                                    rozbudowanymi etapami produkcji naszych lamp
                                    ceramicznych, czas realizacji zamówienia z
                                    reguły wynosi około 30 dni. Wyznaczony
                                    termin może jednak ulec zmian za sprawą
                                    niektórych czynników, jak np. poziom
                                    zaawansowania produkcji lampy ceramicznej
                                    pod zamówienie indywidualne czy dostępności
                                    gotowego modelu lampy ceramicznej, co w tym
                                    drugim przypadku pozwala na zrealizowanie
                                    zamówienia już w kilka dni roboczych.
                                </p>
                            </div>
                            <div className={s.textPicColumn__image}>
                                <Img
                                    fluid={
                                        portraitImageOne.childImageSharp.fluid
                                    }
                                    alt="Formy oraz wyschnięte masy od lamp ceramicznych"
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ),
        },
    ]

    const [activeCharacter, setActiveCharacter] = useState()
    const [pageHeight, setPageHeight] = useState()
    const [pageWidth, setPageWidth] = useState()
    const [navigateToAboutSection, setNavigateToAboutSection] = useState()
    const [sectionChanged, setSectionChanged] = useState(false)

    useEffect(() => {
        setPageHeight(window.innerHeight)
        setPageWidth(window.innerWidth)

        if (location.state) {
            if (
                location.state.navigateToAboutSection &&
                navigateToAboutSection === undefined
            ) {
                console.log('yes')
                setNavigateToAboutSection(location.state.navigateToAboutSection)
            }
        }

        window.addEventListener('resize', e => {
            setTimeout(() => {
                setPageHeight(window.innerHeight)
                setPageWidth(window.innerWidth)
            }, 300)
        })
    }, [])

    const refs = aboutSections.reduce((refsObj, character) => {
        refsObj[character.name] = createRef()
        return refsObj
    }, {})

    const handleCLick = name => {
        if (name === 'Wstęp') {
            $('html, body').animate({ scrollTop: 0 }, 400)
        } else {
            $('html, body').animate(
                {
                    scrollTop:
                        $(refs[name].current).offset().top - pageHeight / 5,
                },
                400,
            )
        }
    }

    const nav = (
        <ContentsList
            items={aboutSections}
            handleCLick={handleCLick}
            activeCharacter={activeCharacter}
            pageWidth={pageWidth}
            sectionChanged={sectionChanged}
            setSectionChanged={setSectionChanged}
        />
    )

    return (
        <div>
            <div className={s.mobileNav}>
                <div className={s.mobileNav__inner}>{nav}</div>
            </div>
            <Layout hasHero>
                <SEO
                    title="Na Temat ELCO | Polski Producent Lamp Ceramicznych Z Abażurem"
                    description="Na temat ELCO - lampyceramiczne.pl | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne."
                />
                <div className={cs(s.box, 's-container')}>
                    <div className={s.box__content}>
                        <div className={s.intro}>
                            <h1>Na temat ELCO</h1>
                            <div className={s.intro__desc}>
                                <p className="bs-p">
                                    Poznaj naszą wizję i dowiedz się więcej na
                                    temat tego czym się zajmujemy i naszej pracy
                                    przy produkcji lamp ceramicznych ELCO.
                                </p>
                            </div>

                            {aboutSections.map(item => {
                                return (
                                    <AboutSection
                                        key={item.name}
                                        scrollTo={navigateToAboutSection}
                                        setNavigateToAboutSection={
                                            setNavigateToAboutSection
                                        }
                                        backTo={
                                            location.state
                                                ? location.state
                                                      .aboutBackToProduct !==
                                                  undefined
                                                    ? location.state
                                                          .aboutBackToProduct
                                                    : null
                                                : null
                                        }
                                        activeCharacter={activeCharacter}
                                        data={item}
                                        setActiveCharacter={setActiveCharacter}
                                        pageHeight={pageHeight}
                                        refs={refs}
                                        setSectionChanged={setSectionChanged}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className={s.box__nav}>{nav}</div>
                </div>
                <div className="s-container">
                    <div className={s.bottomOffer}>
                        <div className={s.bottomOffer__overlay}>
                            <div className={s.bottomOffer__box}>
                                <Link
                                    url="/oferta"
                                    title="Lampy ceramiczne ELCO oferta"
                                    className="action-border"
                                >
                                    Odkryj nasze lampy ceramiczne
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

AboutPage.propTypes = {
    location: PropTypes.node.isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
    query {
        heroPic: file(
            relativeDirectory: { eq: "hala" }
            name: { in: "elco-hala-produkcyjna-lamp-ceramicznych-prezentacja" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        aboutPic: file(
            relativeDirectory: { eq: "wnetrza" }
            name: { in: "hotel-bonerowski-lampy-ceramiczne-4000-elco" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        portraitImageOne: file(
            relativeDirectory: { eq: "hala" }
            name: { in: "elco-hala-produkcyjna-formy-gotowe-modele-polka" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        twoImagesFirst: file(
            relativeDirectory: { eq: "hala" }
            name: { in: "elco-hala-produkcyjna-formy-zblizenie" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        twoImagesSecond: file(
            relativeDirectory: { eq: "hala" }
            name: { in: "elco-hala-produkcyjna-formy-poziomo-pionowa" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        productionMixing: file(
            relativeDirectory: { eq: "hala" }
            name: { in: "elco-hala-produkcyjna-mieszarka-masy" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        mlynKulowy: file(
            relativeDirectory: { eq: "hala" }
            name: { in: "elco-hala-produkcyjna-mlyn-kulowy-szkliwo" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        piec: file(
            relativeDirectory: { eq: "hala" }
            name: { in: "elco-hala-produkcyjna-piec-wypal-ostry" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 40) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
