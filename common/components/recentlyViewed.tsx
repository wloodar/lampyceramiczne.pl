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

const RecentlyViewed = ({ className }: { className?: string }) => {
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
        .filter(lamp => lamp !== null) as Array<Lamp>

    if (recentSlugs.length === 0) {
        return <></>
    }

    return (
        <div
            className={clsx(
                className,
                'flex border-y border-r border-stone-200',
            )}
        >
            <div className="w-[30%] border-l border-stone-200">
                <div className="h-full flex items-center justify-center flex-col px-14 box-border text-center">
                    <span className="font-normal text-lg">
                        Ostatnio widzane
                    </span>
                    <span className="w-14 h-[1px] bg-stone-300 my-2"></span>
                    <span className="text-xs font-light text-neutral-400">
                        Lampy, które niedawno były przez Ciebie oglądane
                    </span>
                </div>
            </div>
            {/* <div className="!grid grid-cols-12"> */}
            <Slider
                className="w-[70%]"
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={2}
                slidesToScroll={2}
                adaptiveHeight={true}
                arrows={true}
                nextArrow={<div className="text-red">{'>'}</div>}
            >
                {recentlyViewedLamps.map(lamp => (
                    <Link
                        href={`/oferta/${lamp.slug}`}
                        key={lamp.slug}
                        passHref
                    >
                        <div className="border-l border-stone-200 relative pt-10 cursor-pointer group">
                            <ExportedImage
                                src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                layout="fill"
                                objectFit="cover"
                                className="transition-[transform] duration-500 group-hover:scale-125"
                            />
                            <div className="absolute inset-0 bg-black/70 backdrop-blur-lg transition-[background] duration-500 group-hover:bg-black/90"></div>
                            <div className="h-[300px] block relative mb-10">
                                <ExportedImage
                                    src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                    layout="fill"
                                    objectFit="contain"
                                    className="transition-[transform] duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="relative py-4 px-5 font-light text-sm flex items-center bg-stone-50">
                                <span className="text-black text-lg leading-6 group-hover:underline font-normal">
                                    {lamp.title}
                                </span>
                                <Button className="block m-auto text-xs ml-5 mr-0">
                                    Zobacz
                                </Button>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
            {/* </div> */}
        </div>
    )
}

export { RecentlyViewed }
