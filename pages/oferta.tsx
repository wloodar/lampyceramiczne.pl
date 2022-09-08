import { NextPage } from 'next'
import { allLamps } from 'contentlayer/generated'
import { Grid } from 'common/components/grid'
import { LampCard } from 'common/components/lampCard'

import SEO from 'common/components/seo'
import { H2, Paragraph } from 'common/components/typography'

const Offer: NextPage = () => {
    return (
        <div>
            <SEO title="Oferta Lamp Ceramicznych ELCO | Ceramiczne Lampy Z Abażurem" />
            <div className="max-w-[755px]">
                <H2 className="uppercase mb-8 !font-medium tracking-[3px]">
                    Oferta Lamp Ceramicznych ELCO
                </H2>
                <Paragraph className="w-9/12">
                    Przedstawiamy Tobie naszą ofertę stołowych lamp ceramicznych
                    & ceramicznych lamp podłogowych. Kolekcja naszych lamp
                    ceramicznych została przygotowana z myślą rozświetlenia
                    twojego wnętrza i wzbogacenia go o nutkę klasycznego, a
                    zarazem eleganckiego elementu wystroju.
                </Paragraph>
            </div>
            <Grid className="mt-16">
                {allLamps.map(lamp => (
                    <div key={lamp.slug} className="col-span-6 mb-20">
                        <LampCard lamp={lamp} />
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default Offer
