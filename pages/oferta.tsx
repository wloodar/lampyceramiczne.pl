import { NextPage } from 'next'
import { allLamps } from 'contentlayer/generated'
import { Grid } from 'common/components/grid'
import { LampCard } from 'common/components/lampCard'

const Offer: NextPage = () => {
    return (
        <div className="wl-container">
            <Grid className="pt-40">
                {allLamps.map(lamp => (
                    <div key={lamp.slug} className="col-span-6 mb-10">
                        <LampCard lamp={lamp} />
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default Offer
