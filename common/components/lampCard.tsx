import Link from 'next/link'
import ExporteImage from 'next-image-export-optimizer'

import { H2 } from './typography'
import { Lamp } from 'contentlayer/generated'

const LampCard = ({ lamp }: { lamp: Lamp }) => {
    return (
        <div>
            <Link href={`/lampa/${lamp.slug}`} scroll={false} passHref>
                <a>
                    <div className="block relative aspect-h-5 aspect-w-3">
                        <ExporteImage
                            src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                            alt={`Okładka lampy ${lamp.title}`}
                            layout={'fill'}
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="mt-6">
                        <H2>
                            {lamp.title}
                        </H2>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export { LampCard }
