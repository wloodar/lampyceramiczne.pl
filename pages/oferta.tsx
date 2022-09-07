import { NextPage } from 'next'
import { allLamps } from 'contentlayer/generated'
import { Grid } from 'common/components/grid'
import { LampCard } from 'common/components/lampCard'

import SEO from 'common/components/seo'

const Offer: NextPage = () => {
    return (
        <div>
            <SEO title="Oferta Lamp Ceramicznych ELCO | Ceramiczne Lampy Z Abażurem" />
            <Grid>
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
