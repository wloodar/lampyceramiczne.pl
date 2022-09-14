import React, { Ref } from 'react'
import { motion, useScroll } from 'framer-motion'
import { H1, Paragraph } from 'common/components/typography'
import { AboutSectionItem } from 'common/types'
import clsx from 'clsx'

import {
    IntroContent,
    ProductionContent,
    RealizationsContent,
    ProductionTime,
} from 'common/components/sections/aboutSections'

const aboutSections: Array<AboutSectionItem> = [
    { title: 'Wstęp', href: 'intro', content: <IntroContent /> },
    {
        title: 'Proces produkcji',
        href: 'proces-produkcji',
        content: <ProductionContent />,
    },
    {
        title: 'Realizacje indywidudalne',
        href: 'realizacje-indywidudalne',
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

                console.log(targetID)
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
        <ul className="sticky top-20">
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
                            'block w-full text-left text-sm pl-3 pt-12 pb-6 hover:bg-neutral-50',
                            { 'text-black': activeCharacter === section.href },
                        )}
                        onClick={() => handleMenuClick(section.href)}
                    >
                        . {section.title}
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
            top: refs[sectionHref]!.current.offsetTop - pageHeight / 5,
            behavior: 'smooth',
        })
        return
    }

    return (
        <div className="max-w-[1500px] m-auto pb-14">
            <H1 className="uppercase">Na temat ELCO</H1>
            <Paragraph className="max-w-[500px] mt-6">
                Poznaj naszą wizję i dowiedz się więcej na temat tego czym się
                zajmujemy i naszej pracy przy produkcji lamp ceramicznych ELCO.
            </Paragraph>
            <div className="flex">
                <div className="flex-1 max-w-[1000px]">
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
                <div className="ml-auto w-[250px]">
                    <SectionsMenu
                        sections={aboutSections}
                        activeCharacter={activeCharacter}
                        handleMenuClick={handleMenuClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default NaTematElco
