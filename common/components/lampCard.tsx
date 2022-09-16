import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'
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
                    <div className="peer lg:border-2 lg:border-transparent lg:transition-[border] lg:duration-500 lg:ease-in-out lg:hover:border-black">
                        <div className="aspect-h-5 aspect-w-3 relative block lg:scale-x-[0.97] lg:scale-y-[0.98] lg:transition-transform lg:duration-500 lg:ease-in-out lg:group-hover:scale-100">
                            <ExportedImage
                                src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                alt={`Okładka lampy ${lamp.title}`}
                                placeholder="blur"
                                layout={'fill'}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                    <div className="box-border bg-neutral-100 py-5 px-8 lg:mt-6">
                        <div className="2xl:flex 2xl:items-center">
                            <H4 tag={'h2'}>{lamp.title}</H4>
                            <div className="block flex-nowrap">
                                <Button className="mt-4 mb-2 w-full whitespace-nowrap 2xl:mt-0 2xl:mb-0 2xl:ml-8 2xl:w-auto">
                                    Zobacz teraz
                                </Button>
                            </div>
                        </div>
                        <div>
                            <span className="text-xs text-neutral-600">
                                <TechnicalInfo />
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
            <div className="absolute right-8 top-8">
                <button onClick={() => toggleProduct(lamp.slug)}>
                    <Icon
                        name="heart"
                        className={clsx('stroke-white lg:hover:fill-red-500', {
                            'fill-red-500': wishlistSlugs.includes(lamp.slug),
                        })}
                    />
                </button>
            </div>
        </div>
    )
}

export { LampCard }
