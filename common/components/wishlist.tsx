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
        <div className="mb-4 flex items-center">
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
                <h5 className="cursor-pointer text-xs hover:underline">
                    <Link href={`/oferta/${slug}`} scroll={false}>
                        {title}
                    </Link>
                </h5>
                <button
                    onClick={() => removeProduct(slug)}
                    className="group mt-1 flex items-center text-[0.65rem]"
                >
                    <Icon
                        name="x"
                        className="h-auto w-[14px] stroke-slate-500 group-hover:stroke-red-600"
                    />
                    <span className="text-slate-500 !no-underline group-hover:text-red-600">
                        Usuń
                    </span>
                </button>
            </div>
        </div>
    )
}

const WishlistProductsList = ({
    showButton = true,
    className,
}: {
    showButton?: boolean
    className?: string
}) => {
    const { slugs, removeProduct } = useWishlistStore()
    const lamps = allLamps.filter(lamp => slugs.includes(lamp.slug))

    return (
        <>
            <div className={clsx(className, 'overflow-y-auto')}>
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
                            <Paragraph className="text-xs leading-6">
                                Na ten moment nie posiadasz na swojej liście
                                żadnej lampy.
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
            {showButton ? (
                <div
                    className={clsx('mt-8 hidden w-full', {
                        '!block': slugs.length > 0,
                    })}
                >
                    <ButtonLink href={`/kontakt`} className="block text-center">
                        Zapytaj o lampy
                    </ButtonLink>
                </div>
            ) : null}
        </>
    )
}

export default WishlistProductsList
