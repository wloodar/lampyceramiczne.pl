import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useWishlistStore } from 'common/hooks/useWishlistStore'
import { allLamps, Lamp } from 'contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'
import { ButtonLink } from './button'
import { H5, Paragraph } from './typography'
import Icon from './icon'
import clsx from 'clsx'

const WishlistItem = ({
    slug,
    title,
    cover,
    removeProduct,
}: Pick<Lamp, 'slug' | 'title' | 'cover'> & {
    removeProduct: (slug: string) => void
}) => {
    return (
        <div className="flex items-center mb-4">
            <div className="cursor-pointer">
                <Link href={`/oferta/${slug}`} scroll={false} passHref>
                    <ExportedImage
                        src={`/img/lamps/${slug}/${cover}`}
                        width={50}
                        height={50}
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-lg"
                    />
                </Link>
            </div>
            <div className="flex-1 pl-4">
                <h5 className="text-xs cursor-pointer hover:underline">
                    <Link href={`/oferta/${slug}`} scroll={false}>
                        {title}
                    </Link>
                </h5>
                <button
                    onClick={() => removeProduct(slug)}
                    className="mt-1 text-[0.65rem] flex items-center group"
                >
                    <Icon
                        name="x"
                        className="w-[14px] h-auto stroke-slate-500 group-hover:stroke-red-600"
                    />
                    <span className="!no-underline text-slate-500 group-hover:text-red-600">
                        Usuń
                    </span>
                </button>
            </div>
        </div>
    )
}

const WishlistProductsList = () => {
    const { slugs, removeProduct } = useWishlistStore()
    const lamps = allLamps.filter(lamp => slugs.includes(lamp.slug))

    return (
        <>
            <div>
                <AnimatePresence initial={false} mode="popLayout">
                    {lamps.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    ease: 'easeInOut',
                                },
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: 'easeOut',
                                },
                            }}
                        >
                            <Paragraph>
                                Na ten moment nie posiadasz na swojej liście
                                jakiejkolwiek lampy.
                            </Paragraph>
                        </motion.div>
                    ) : (
                        lamps.map(lamp => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 0.8,
                                        ease: 'easeInOut',
                                    },
                                }}
                                exit={{
                                    opacity: 0,
                                    x: '-100%',
                                    transition: {
                                        duration: 0.5,
                                        ease: 'easeOut',
                                    },
                                }}
                                key={lamp.slug}
                            >
                                <WishlistItem
                                    slug={lamp.slug}
                                    title={lamp.title}
                                    cover={lamp.cover}
                                    removeProduct={removeProduct}
                                />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
            <div
                className={clsx('hidden mt-8 w-full', {
                    '!block': slugs.length > 0,
                })}
            >
                <ButtonLink href={`/kontakt`}>Zapytaj o lampy</ButtonLink>
            </div>
        </>
    )
}

export default WishlistProductsList
