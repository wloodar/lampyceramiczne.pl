import React from 'react'
import { H1, Paragraph } from 'common/components/typography'
import { AboutSectionItem } from 'common/types'
import clsx from 'clsx'
import SEO from 'common/components/seo'

import {
    IntroContent,
    ProductionContent,
    RealizationsContent,
    ProductionTime,
} from 'common/components/sections/aboutSections'
import { PageBanner } from 'common/components/pageBanner'
import { RecentlyViewed } from 'common/components/recentlyViewed'
import InstagramPosts from 'common/components/sections/instagramPosts'

const aboutSections: Array<AboutSectionItem> = [
    { title: 'Wstęp', href: 'intro', content: <IntroContent /> },
    {
        title: 'Proces produkcji',
        href: 'proces-produkcji',
        content: <ProductionContent />,
    },
    {
        title: 'Realizacje indywidudalne',
        href: 'realizacjeindywidudalne',
        content: <RealizationsContent />,
    },
    {
        title: 'Czas produkcji',
        href: 'czas-produkcji',
        content: <ProductionTime />,
    },
]

const AboutSection = ({
    data,
    refs,
    pageHeight,
    pageWidth,
    activeCharacter,
    setActiveCharacter,
}: {
    data: AboutSectionItem
    refs: any
    pageHeight: number
    pageWidth: number
    activeCharacter: string
    setActiveCharacter: React.Dispatch<React.SetStateAction<string>>
}) => {
    const observerMargin = Math.floor(pageHeight / 2)

    React.useEffect(() => {
        const observerConfig = {
            rootMargin: `-${
                pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
            }px 0px -${observerMargin}px 0px`,
        }

        const handleIntersection = (
            entries: Array<IntersectionObserverEntry>,
        ) => {
            entries.forEach(entry => {
                const { id: targetID } = entry.target
                if (targetID !== activeCharacter && entry.isIntersecting) {
                    setActiveCharacter(targetID)
                }
            })
        }

        const observer = new IntersectionObserver(
            handleIntersection,
            observerConfig,
        )

        observer.observe(refs[data.href].current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div ref={refs[data.href]} id={data.href}>
            {data.content}
        </div>
    )
}

const SectionsMenu = ({
    sections,
    activeCharacter,
    handleMenuClick,
}: {
    sections: Array<AboutSectionItem>
    activeCharacter: string
    handleMenuClick: (sectionHref: string) => void
}) => {
    return (
        <ul>
            {sections.map(section => (
                <li
                    id={section.href}
                    key={section.title}
                    className={clsx(
                        'border-l-2 border-stone-200 text-neutral-500',
                        { '!border-black': activeCharacter === section.href },
                    )}
                >
                    <button
                        className={clsx(
                            'block w-full pl-3 pt-12 pb-6 text-left text-sm hover:bg-neutral-50',
                            {
                                'bg-neutral-50 text-black':
                                    activeCharacter === section.href,
                            },
                        )}
                        onClick={() => handleMenuClick(section.href)}
                    >
                        - {section.title}
                    </button>
                </li>
            ))}
        </ul>
    )
}

const NaTematElco = () => {
    const [pageHeight, setPageHeight] = React.useState<number>(0)
    const [pageWidth, setPageWidth] = React.useState<number>(0)

    const [activeCharacter, setActiveCharacter] = React.useState<string>('')

    React.useEffect(() => {
        setPageHeight(window.innerHeight)
        setPageWidth(window.innerWidth)

        window.addEventListener('resize', () => {
            setTimeout(() => {
                setPageHeight(window.innerHeight)
                setPageWidth(window.innerWidth)
            }, 300)
        })
    }, [])

    const refs = aboutSections.reduce(
        (refsObj: { [key: string]: React.Ref<HTMLElement> }, character) => {
            refsObj[character.href] = React.createRef()
            return refsObj
        },
        {},
    )

    const handleMenuClick = (sectionHref: string) => {
        console.log(refs[sectionHref])

        if (sectionHref === 'intro') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        window.scrollTo({
            // @ts-ignore
            top: refs[sectionHref]!.current.offsetTop - pageHeight / 5,
            behavior: 'smooth',
        })
        return
    }

    return (
        <div className="container-padding m-auto max-w-[1500px] pt-14 lg:px-0 lg:pt-0">
            <SEO
                title="Na Temat ELCO | Polski Producent Lamp Ceramicznych Z Abażurem"
                description="Na temat ELCO - lampyceramiczne.pl | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne."
            />
            <H1 className="uppercase">Na temat ELCO</H1>
            <Paragraph className="mt-6 max-w-[500px]">
                Poznaj naszą wizję i dowiedz się więcej na temat tego czym się
                zajmujemy i naszej pracy przy produkcji lamp ceramicznych ELCO.
            </Paragraph>
            <div className="flex">
                <div className="max-w-[1000px] flex-1 lg:mr-12">
                    {pageHeight > 0
                        ? aboutSections.map(section => (
                              <AboutSection
                                  key={section.href}
                                  data={section}
                                  refs={refs}
                                  pageHeight={pageHeight}
                                  pageWidth={pageWidth}
                                  setActiveCharacter={setActiveCharacter}
                                  activeCharacter={activeCharacter}
                              />
                          ))
                        : null}
                </div>
                <div className="ml-auto hidden w-[250px] lg:block">
                    <div className="sticky top-20">
                        <div className="pb-6 text-xs font-medium uppercase">
                            Navigation
                        </div>
                        <SectionsMenu
                            sections={aboutSections}
                            activeCharacter={activeCharacter}
                            handleMenuClick={handleMenuClick}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <PageBanner
                    title="Kolekcja"
                    heading="Zobacz kolekcję naszych lamp"
                    description="Wyjątkowe & eleganckie lampy ceramiczne wykonane
                            ręcznie według wieloletnich tradycji"
                    linkText="Zobacz wszystkie lampy"
                    href="/oferta"
                />
            </div>
            <div className="mt-16">
                <InstagramPosts />
            </div>
            <div className="mt-12 lg:mt-24">
                <RecentlyViewed />
            </div>
        </div>
    )
}

export default NaTematElco
