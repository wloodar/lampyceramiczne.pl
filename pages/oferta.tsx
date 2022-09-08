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
                <div className="col-span-12 xl:col-span-6 mb-20 flex flex-col">
                    <div className="bg-neutral-50 p-12 2xl:p-16 box-border">
                        <H2 className="uppercase mb-8 !font-medium tracking-[3px] !text-2xl 2xl:!text-4xl">
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
                    <div className="hidden xl:block h-full bg-neutral-100 mt-8">
                        <div className="relative h-full">
                            <ExportedImage
                                src={`/img/content/elco-hala-produkcyjna-formy-zblizenie.jpg`}
                                alt={`Widok hali produkcyjnej ELCO formy`}
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                            />
                            <div className="absolute inset-0 bg-[rgba(0,0,0,0.85)] flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-white pb-6 text-2xl">
                                        O ELCO
                                    </div>
                                    <ButtonLink
                                        href={`/na-temat-elco`}
                                        type="outline"
                                        className="!border-white inline-block"
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
                        className="col-span-12 xl:col-span-6 mb-20"
                    >
                        <LampCard lamp={lamp} />
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default Offer
