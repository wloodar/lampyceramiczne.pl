import { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import { allLamps } from 'contentlayer/generated'
import { Grid } from 'common/components/grid'
import { LampCard } from 'common/components/lampCard'

import SEO from 'common/components/seo'
import { H1, H2, Paragraph, H5, H4 } from 'common/components/typography'
import { Button, ButtonLink } from 'common/components/button'
import Icon from 'common/components/icon'
import InstagramPosts from 'common/components/sections/instagramPosts'

const Offer: NextPage = () => {
    return (
        <div>
            <SEO title="Oferta Lamp Ceramicznych ELCO | Ceramiczne Lampy Z Abażurem" />
            <Grid>
                <div className="col-span-12 flex flex-col pb-8 lg:mb-10 xl:col-span-6">
                    <div className="relative block min-h-[10rem] lg:hidden">
                        <div className="absolute right-20 -z-10">
                            <Icon
                                name="handwrittenRightUpArrow"
                                className="h-auto w-20"
                            />
                        </div>
                        <div className="absolute -left-20 -bottom-32 -z-10 opacity-10">
                            <Icon
                                name="heart"
                                className="h-auto w-64 stroke-[0.5px]"
                            />
                        </div>
                        <div className="wl-container mt-8">
                            <div>
                                <H2 className="uppercase">
                                    Zapisz swoje lampy
                                </H2>
                                <Paragraph className="mt-2 max-w-[90%]">
                                    Wybierz swoje ulubione modele lamp
                                    ceramicznych i wygodnie wyślij zapytanie lub
                                    zapisz je na przyszłe wizyty w ELCO.
                                </Paragraph>
                                <H2
                                    tag="h1"
                                    className="mt-5 border-t border-stone-200 pt-6 uppercase"
                                >
                                    Oferta Lamp Ceramicznych ELCO
                                </H2>
                            </div>
                        </div>
                    </div>
                    <div className="box-border hidden bg-stone-100 p-12 lg:block 2xl:p-16">
                        <H2
                            tag="h1"
                            className="mb-8 !text-3xl !font-medium uppercase tracking-[3px]"
                        >
                            Oferta Lamp Ceramicznych ELCO
                        </H2>
                        <Paragraph>
                            Przedstawiamy Tobie naszą ofertę stołowych lamp
                            ceramicznych & ceramicznych lamp podłogowych.
                            Kolekcja naszych lamp ceramicznych została
                            przygotowana z myślą rozświetlenia twojego wnętrza i
                            wzbogacenia go o nutkę klasycznego, a zarazem
                            eleganckiego elementu wystroju.
                        </Paragraph>
                    </div>
                    <div className="relative mt-8 hidden bg-black py-10 lg:block">
                        <div className="absolute -left-24 -bottom-24 opacity-100">
                            <Icon
                                name="heart"
                                className="h-auto w-72 stroke-white stroke-[0.5px]"
                            />
                        </div>
                        <div className="m-auto max-w-[22rem] text-center">
                            <H4 tag="h3" className="uppercase !text-white">
                                Zapisz swoje lampy
                            </H4>
                            <Paragraph className="mt-2 max-w-[90%] !text-neutral-300 mix-blend-difference">
                                Wybierz swoje ulubione modele lamp ceramicznych
                                i wygodnie wyślij zapytanie lub zapisz je na
                                przyszłe wizyty w ELCO.
                            </Paragraph>
                        </div>
                    </div>
                    <div className="mt-8 hidden h-full bg-neutral-100 xl:block">
                        <div className="relative h-full">
                            <ExportedImage
                                src={`/img/content/elco-hala-produkcyjna-formy-zblizenie.jpg`}
                                alt={`Widok hali produkcyjnej ELCO formy`}
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.85)]">
                                <div className="text-center">
                                    <div className="pb-6 text-2xl text-white">
                                        O ELCO
                                    </div>
                                    <ButtonLink
                                        href={`/na-temat-elco`}
                                        type="bs-outline"
                                        color="bright"
                                    >
                                        Dowiedz się więcej
                                    </ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {allLamps.map(lamp => (
                    <div
                        key={lamp.slug}
                        className="col-span-12 mb-12 lg:mb-20 xl:col-span-6"
                    >
                        <LampCard lamp={lamp} />
                    </div>
                ))}
            </Grid>
            <div className="wl-container">
                <InstagramPosts />
                <div className="text-center">
                    <ButtonLink
                        href={`/kontakt`}
                        className="mt-12 inline-block"
                    >
                        Skontaktuj się z nami
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}

export default Offer
