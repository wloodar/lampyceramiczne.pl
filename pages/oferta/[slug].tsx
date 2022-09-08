import { motion, AnimatePresence } from 'framer-motion'
import { allLamps, Lamp } from 'contentlayer/generated'
import { useWishlistStore } from 'common/hooks/useWishlistStore'
import { Button, ButtonLink } from 'common/components/button'
import { H1, Paragraph } from 'common/components/typography'
import ExportedImage from 'next-image-export-optimizer'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
import SEO from 'common/components/seo'
import Icon from 'common/components/icon'

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
                            className="mt-6 font-light text-stone-500"
                        >
                            {tech}
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <SEO
                title={`${lamp.title} | ELCO`}
                description={`Lampa ceramiczna ELCO - ${lamp.title} | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | lampyceramiczne.pl`}
            />
            <div className="flex items-center justify-between">
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
            <div className="flex mt-12">
                <div className="max-w-[700px] flex-1">
                    <Zoom zoomMargin={100}>
                        <div className="aspect-h-5 aspect-w-3 relative">
                            <ExportedImage
                                src={`/img/lamps/${lamp.slug}/${lamp.cover}`}
                                alt={`Lampa Ceramiczna ELCO - ${lamp.title}`}
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                            />
                        </div>
                    </Zoom>
                </div>
                <div className="flex-1 pl-10 box-border">
                    <div className="bg-stone-100 px-20 py-16 box-border sticky top-10">
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
                                <div className="bg-stone-300 w-12 h-[2px] mr-3"></div>
                                <span className="text-sm text-stone-400">
                                    {lamp.code}
                                </span>
                            </span>
                            <H1>{lamp.title}</H1>

                            <div className="mt-10">
                                <TechnicalDetails />
                            </div>

                            <div className="mt-10 py-8 border-y border-stone-400">
                                <Paragraph>
                                    Zainteresowała Ciebie prezentowana lampa
                                    ceramiczna? Skontaktuj się z nami już teraz
                                    w celu poznania szczegółów lub złożenia
                                    zamówienia.
                                </Paragraph>
                            </div>

                            {/* Actions */}
                            <div className="mt-16 w-[400px] text-center">
                                {slugs.includes(lamp.slug) ? (
                                    <Button
                                        onClick={() => removeProduct(lamp.slug)}
                                        className="w-full flex items-center justify-center"
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
                                        className="w-full flex items-center justify-center"
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
                                    className="block w-full mt-4"
                                >
                                    Skontaktuj się
                                </ButtonLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* <div>title: {lamp.title}</div>

            {slugs.includes(lamp.slug) ? (
                <button onClick={() => removeProduct(lamp.slug)}>
                    Usuń z Twojej listy
                </button>
            ) : (
                <button onClick={() => addProduct(lamp.slug)}>
                    Dodaj do Twojej listy
                </button>
            )} */}
        </div>
    )
}

export default LampPage
