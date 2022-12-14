import Link from 'next/link'
import { useRecentStore } from 'common/hooks/useRecentStore'
import { useWishlistStore } from 'common/hooks/useWishlistStore'
import { allLamps, Lamp } from 'contentlayer/generated'
import clsx from 'clsx'
import ExportedImage from 'next-image-export-optimizer'
import Icon from './icon'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button } from './button'
import { H3 } from './typography'

const RecentlyViewed = ({
    disableSlug,
    className,
}: {
    disableSlug?: string
    className?: string
}) => {
    const { recentSlugs, removeRecentProduct } = useRecentStore()
    const { toggleProduct, slugs: wishlistSlugs } = useWishlistStore()

    const recentlyViewedLamps = recentSlugs
        .map(slug => {
            const lamp = allLamps.find(l => l.slug === slug)
            if (lamp === undefined) {
                console.log(lamp)

                removeRecentProduct(slug)
                return null
            }

            return lamp
        })
        .filter(
            lamp => lamp !== null && lamp.slug !== disableSlug,
        ) as Array<Lamp>

    if (recentSlugs.length === 0) {
        return <></>
    }

    return (
        <div
            className={clsx(
                className,
                'border-y border-r border-stone-200 2xl:flex',
            )}
        >
            <div className="border-l border-stone-200 p-8 2xl:w-[30%] 2xl:p-0">
                <div className="box-border flex h-full flex-col items-center justify-center px-14 text-center">
                    <H3 className="!text-lg uppercase">Ostatnio widziane</H3>
                    <span className="my-2 h-[1px] w-14 bg-stone-300"></span>
                    <span className="max-w-[200px] text-xs font-light text-neutral-400">
                        Lampy, które niedawno były przez Ciebie oglądane
                    </span>
                </div>
            </div>
            <Slider
                className="2xl:w-[70%]"
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={2}
                slidesToScroll={2}
                adaptiveHeight={true}
                arrows={true}
                responsive={[
                    {
                        breakpoint: 1280,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        },
                    },
                ]}
                nextArrow={<div className="text-red">{'>'}</div>}
            >
                {recentlyViewedLamps.map(lamp => (
                    <Link
                        href={`/oferta/${lamp.slug}`}
                        key={lamp.slug}
                        scroll={false}
                        passHref
                    >
                        <div className="group relative cursor-pointer border-l border-stone-200">
                            <div className="relative h-full pt-10 pb-10">
                                <ExportedImage
                                    src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-[transform] duration-500 lg:group-hover:scale-125"
                                />
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-lg lg:transition-[background] lg:duration-500 lg:group-hover:bg-black/90"></div>
                                <div>
                                    <div className="relative z-10 block h-[300px]">
                                        <ExportedImage
                                            src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                            layout="fill"
                                            objectFit="contain"
                                            className="transition-[transform] duration-500 lg:group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="relative bg-white py-4 px-5 text-sm font-light sm:flex sm:items-center sm:justify-between">
                                {lamp.slug === disableSlug ? (
                                    <div className="flex min-h-[50px] w-full items-center justify-center">
                                        Aktualnie oglądana
                                    </div>
                                ) : (
                                    <>
                                        <span className="text-sm font-normal leading-6 text-black lg:group-hover:underline">
                                            {lamp.title}
                                        </span>
                                        <Button className="m-auto mt-4 block w-full text-xs sm:mt-0 sm:mr-0 sm:ml-5 sm:w-auto">
                                            Zobacz
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    )
}

export { RecentlyViewed }
