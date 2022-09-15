import { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import { allLamps } from 'contentlayer/generated'
import { Grid } from 'common/components/grid'
import { LampCard } from 'common/components/lampCard'

import SEO from 'common/components/seo'
import { H2, Paragraph } from 'common/components/typography'
import { Button, ButtonLink } from 'common/components/button'

const Offer: NextPage = () => {
    return (
        <div>
            <SEO title="Oferta Lamp Ceramicznych ELCO | Ceramiczne Lampy Z Abażurem" />
            <Grid>
                <div className="col-span-12 mb-20 flex flex-col xl:col-span-6">
                    <div className="box-border bg-stone-100 p-12 2xl:p-16">
                        <H2 className="mb-8 !text-xl !font-medium uppercase tracking-[3px] 2xl:!text-2xl">
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
        </div>
    )
}

export default Offer
