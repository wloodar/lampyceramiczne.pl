import * as React from 'react'
import {
    motion,
    MotionConfig,
    motionValue,
    useMotionValue,
    useScroll,
} from 'framer-motion'
import { allLamps, Lamp } from 'contentlayer/generated'
import { useWishlistStore } from 'common/hooks/useWishlistStore'
import { useRecentStore } from 'common/hooks/useRecentStore'
import { Button, ButtonLink } from 'common/components/button'
import { H1, H3, H5, Paragraph } from 'common/components/typography'
import ExportedImage from 'next-image-export-optimizer'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
import SEO from 'common/components/seo'
import Icon from 'common/components/icon'

import { RecentlyViewed } from 'common/components/recentlyViewed'
import { useMediaQuery } from 'common/hooks/useMediaQuery'

type PathParams = {
    params: {
        slug: string
    }
}

type Props = {
    params: Lamp
}

export const getStaticPaths = async () => {
    const paths: Array<PathParams> = allLamps.map(lamp => ({
        params: { slug: lamp.slug },
    }))

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }: Props) => {
    // @ts-ignore
    const lamp: Lamp = allLamps.find(lamp => lamp.slug === params.slug)

    return {
        props: {
            lamp,
        },
    }
}

const LampPage = ({ lamp }: { lamp: Lamp }) => {
    const { slugs, addProduct, removeProduct } = useWishlistStore()
    const { toggleRecentProduct } = useRecentStore()

    const isWindowSm = useMediaQuery('sm')

    const mainTileInfoRef = React.useRef<HTMLDivElement>(null)
    const mainTileScrollProgress = useMotionValue(1)
    const { scrollYProgress } = useScroll({
        target: mainTileInfoRef,
        // offset: ['end end', 'start start'],
        offset: ['start center', 'end start'],
        // offset: ['end start', 'start end'],
    })

    const TechnicalDetails = () => {
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
            techString.push(`Wysokość: ${technical.height} cm`)
        if (technical.widthShade !== undefined)
            techString.push(`Szerokość Abażuru: ${technical.widthShade} cm`)

        return (
            <>
                {techString.map(tech => {
                    return (
                        <div
                            key={tech}
                            className="mt-3 text-sm font-light text-stone-500 sm:mt-6 sm:text-base"
                        >
                            {tech}
                        </div>
                    )
                })}
            </>
        )
    }

    React.useLayoutEffect(() => {
        toggleRecentProduct(lamp.slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        const updateScaleValue = () => {
            const currentProgress = scrollYProgress.get()
            console.log(currentProgress)
            if (currentProgress > 0) {
                mainTileScrollProgress.set(currentProgress / 3 + 1)
            }
        }

        const unsubscribeTilePosition =
            scrollYProgress.onChange(updateScaleValue)

        return () => unsubscribeTilePosition()
    }, [])

    return (
        <div>
            <SEO
                title={`${lamp.title} | ELCO`}
                description={`Lampa ceramiczna ELCO - ${lamp.title} | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | lampyceramiczne.pl`}
            />
            <div className="hidden items-center justify-between lg:flex">
                <div>
                    <ButtonLink
                        href={`/oferta`}
                        type="bs-outline"
                        className="inline-block"
                    >
                        {`< Wróć do oferty`}
                    </ButtonLink>
                </div>
                <div className="text-sm text-stone-400">
                    <Link href={`/`} scroll={false}>
                        <a className="hover:text-black">{`Wstęp / `}</a>
                    </Link>
                    <Link href={`/oferta`} scroll={false}>
                        <a className="hover:text-black">{`Oferta / `}</a>
                    </Link>
                    <Link href={`/oferta/${lamp.slug}`} scroll={false}>
                        <a className="text-black">{lamp.title}</a>
                    </Link>
                </div>
            </div>
            <div className="mt-12 2xl:grid 2xl:grid-cols-2 2xl:gap-x-10">
                <div className="col-span-1">
                    <Zoom zoomMargin={100}>
                        <motion.div
                            className="fixed left-0 right-0 -z-10 w-full sm:static sm:top-auto sm:left-auto sm:right-auto sm:z-0"
                            style={{
                                scale: isWindowSm ? 1 : mainTileScrollProgress,
                            }}
                            initial={false}
                        >
                            <div className="relative w-full [&>span]:!relative">
                                {/* <div className="aspect-h-5 aspect-w-3 relative"> */}
                                <ExportedImage
                                    src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                    alt={`Lampa Ceramiczna ELCO - ${lamp.title}`}
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="top"
                                    placeholder="blur"
                                    className="!relative !h-[unset] !w-full object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </Zoom>
                </div>
                <div className="col-span-1">
                    <div
                        className="invisible overflow-hidden opacity-0 sm:hidden"
                        ref={mainTileInfoRef}
                    >
                        {/* <Zoom zoomMargin={100}> */}
                        <motion.div
                            className="w-full sm:static sm:top-auto sm:left-auto sm:right-auto sm:z-0"
                            style={{
                                scale: isWindowSm ? 1 : mainTileScrollProgress,
                            }}
                            initial={false}
                        >
                            <div className="relative w-full [&>span]:!relative">
                                {/* <div className="aspect-h-5 aspect-w-3 relative"> */}
                                <ExportedImage
                                    src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                    alt={`Lampa Ceramiczna ELCO - ${lamp.title}`}
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="top"
                                    placeholder="blur"
                                    className="!relative !h-[unset] !w-full object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                        {/* </Zoom> */}
                    </div>
                    <div className="container-padding mt-14 box-border rounded-t-2xl bg-stone-100 py-10 sm:sticky sm:top-10 sm:mt-0 sm:rounded-none sm:px-20 sm:py-16">
                        <motion.div
                            initial={{ opacity: 0, y: -70 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.1,
                                    ease: 'easeInOut',
                                },
                            }}
                        >
                            <span className="flex items-center">
                                <div className="mr-3 h-[2px] w-12 bg-stone-300"></div>
                                <span className="text-sm text-stone-400">
                                    {lamp.code}
                                </span>
                            </span>
                            <H1>{lamp.title}</H1>

                            <div className="mt-10">
                                <TechnicalDetails />
                            </div>

                            <div className="mt-10 border-y border-stone-400 py-8">
                                <Paragraph>
                                    Zainteresowała Ciebie prezentowana lampa
                                    ceramiczna? Skontaktuj się z nami już teraz
                                    w celu poznania szczegółów lub złożenia
                                    zamówienia.
                                </Paragraph>
                            </div>

                            {/* Actions */}
                            <div className="mt-16 text-center sm:w-[400px]">
                                {slugs.includes(lamp.slug) ? (
                                    <Button
                                        onClick={() => removeProduct(lamp.slug)}
                                        className="flex w-full items-center justify-center"
                                    >
                                        Usuń z Twojej listy
                                        <Icon
                                            name="heart"
                                            className="ml-2 w-[16px] fill-red-500 stroke-red-500"
                                        />
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => addProduct(lamp.slug)}
                                        className="flex w-full items-center justify-center"
                                    >
                                        Dodaj do Twojej listy{' '}
                                        <Icon
                                            name="heart"
                                            className="ml-2 w-[16px]"
                                        />
                                    </Button>
                                )}
                                <ButtonLink
                                    href={`/kontakt`}
                                    type="bs-outline"
                                    className="mt-4 block w-full"
                                >
                                    Skontaktuj się
                                </ButtonLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="bg-white pt-10">
                <div className="xl:grid xl:grid-cols-2 xl:gap-x-10">
                    <div className="group relative col-span-1 h-[600px] w-full bg-stone-900">
                        <ExportedImage
                            src="/img/instagram-creators/bohodom-personalized.jpg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="transition-[transform] duration-500 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="absolute left-12 bottom-10 right-12">
                            <H3 className="!text-white">
                                Indywidualne
                                <span className="block">realizacje w ELCO</span>
                            </H3>
                            <p className="mt-4 max-w-[390px] text-sm font-light leading-7 !text-white">
                                Firma ELCO oferuje wykonanie lampy ceramicznej
                                na indywidualne zamówienie. Lampa do salonu w
                                Twojej wymarzonej kolorystyce, albo lampa
                                ceramiczna z abażurem pod kolor Twojej sypialni?
                                Stworzyć swoją własną ceramiczną lampę, np.
                                połączenie szyszki z kolumną?
                            </p>
                            <ButtonLink
                                href={`/na-temat-elco`}
                                type="bs-outline"
                                className="mt-6 inline-block !text-white hover:!text-stone-200"
                            >
                                Więcej o personalizacji
                            </ButtonLink>
                        </div>
                    </div>
                    <div className="group relative col-span-1 mt-10 h-[600px] w-full bg-stone-100 xl:mt-0">
                        <ExportedImage
                            src="/img/instagram-creators/homewithbluedoor-corridor.jpg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="bottom"
                            className="transition-[transform] duration-500 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="absolute left-12 bottom-10 right-12">
                            <H3 className="!text-white">
                                Poznaj ELCO{' '}
                                <span className="block">Lampy Ceramiczne</span>
                            </H3>
                            <p className="mt-4 max-w-[350px] text-sm font-light leading-7 !text-white">
                                Od ponad 20 lat tworzymy lampy ceramiczne z
                                abażurem. Cały proces produkcyjny od początku do
                                końca odbywa się na terenie Polski. Lampy
                                ceramiczne naszego wykonania, oferują zarówno
                                solidną jakość wykonania jak i elegancki design.
                            </p>
                            <ButtonLink
                                href={`/na-temat-elco`}
                                type="bs-outline"
                                className="mt-6 inline-block !text-white hover:!text-stone-200"
                            >
                                Dowiedz się więcej
                            </ButtonLink>
                        </div>
                    </div>
                </div>
                <RecentlyViewed className="mt-10" />
            </div>
        </div>
    )
}

export default LampPage
