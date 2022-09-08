import Link from 'next/link'
import ExporteImage from 'next-image-export-optimizer'
import { useWishlistStore } from 'common/hooks/useWishlistStore'
import Icon from './icon'

import { H2, H3, H4 } from './typography'
import { Lamp } from 'contentlayer/generated'
import { Button } from './button'
import clsx from 'clsx'

const LampCard = ({ lamp }: { lamp: Lamp }) => {
    const { slugs: wishlistSlugs, toggleProduct } = useWishlistStore()

    const TechnicalInfo = () => {
        const { technical } = lamp

        if (technical === undefined) {
            return <></>
        }

        if (
            technical.height === undefined &&
            technical.widthShade === undefined
        ) {
            return <></>
        }

        let techString = []

        if (technical.height !== undefined)
            techString.push(`Height: ${technical.height} cm`)
        if (technical.widthShade !== undefined)
            techString.push(`Width: ${technical.widthShade} cm`)

        return <span>{techString.join(' / ')}</span>
    }

    return (
        <div className="group relative">
            <Link href={`/oferta/${lamp.slug}`} scroll={false} passHref>
                <a className="">
                    <div className="peer border-2 border-transparent hover:border-black transition-[border] duration-500 ease-in-out">
                        <div className="block relative aspect-h-5 aspect-w-3 scale-x-[0.97] scale-y-[0.98] group-hover:scale-100 transition-transform duration-500 ease-in-out">
                            <ExporteImage
                                src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                alt={`Okładka lampy ${lamp.title}`}
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                    <div className="mt-6 py-5 px-8 box-border bg-neutral-100">
                        <div className="flex items-center">
                            <H4 tag={'h2'}>{lamp.title}</H4>
                            <div className="flex-nowrap block">
                                <Button className="whitespace-nowrap ml-8">
                                    Zobacz teraz
                                </Button>
                            </div>
                        </div>
                        <div>
                            <span className="text-xs text-neutral-600">
                                <TechnicalInfo />
                                {/* TODO: Technical Height Width */}
                                {/* Height: 50 Width: 40 */}
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
            <div className="absolute right-8 top-8">
                <button onClick={() => toggleProduct(lamp.slug)}>
                    <Icon
                        name="heart"
                        className={clsx('stroke-white hover:fill-red-500', {
                            'fill-red-500': wishlistSlugs.includes(lamp.slug),
                        })}
                    />
                </button>
            </div>
        </div>
    )
}

export { LampCard }
