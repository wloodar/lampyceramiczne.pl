import dynamic from 'next/dynamic'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'
import { H5 } from './typography'
import { Nav } from './nav'
import NoSSRWrapper from './noSSRWrapper'
import { useWishlistStore } from 'common/hooks/useWishlistStore'
import Icon from './icon'

import { MENU_LINKS } from './nav'
import { AnimatePresence, motion } from 'framer-motion'

const WishlistProductsList = dynamic(
    () => import('common/components/wishlist'),
    {
        ssr: false,
    },
)

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const { slugs: wishlistSlugs } = useWishlistStore()

    return (
        <NoSSRWrapper>
            <div className="flex flex-col justify-start lg:p-[54px_64px]">
                <header className="container-padding fixed left-0 top-0 right-0 z-10 box-border flex flex-[0_0_80px] items-center justify-between bg-white py-4 lg:relative lg:left-auto lg:top-auto lg:right-auto lg:mb-14 lg:block lg:bg-transparent lg:py-0 lg:px-0">
                    <div className="w-full lg:fixed">
                        <Link href="/" scroll={false}>
                            <a className="text-3xl font-semibold tracking-[10px] lg:text-5xl">
                                ELCO
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-3 flex items-center lg:hidden">
                        <button className="relative p-3">
                            <Icon name="heart" />
                            {wishlistSlugs.length > 0 ? (
                                <div className="absolute right-1 top-1 flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-red-500">
                                    <AnimatePresence mode="popLayout">
                                        <motion.span
                                            key={wishlistSlugs.length}
                                            initial={{ opacity: 0, y: '100%' }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: 'easeInOut',
                                                },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: '-100%',
                                                transition: {
                                                    duration: 0.5,
                                                    ease: 'easeOut',
                                                },
                                            }}
                                            className="text-[9px] font-medium text-white"
                                        >
                                            {wishlistSlugs.length}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            ) : null}
                        </button>
                        <button className="p-3">
                            <div className="w-[30px] [&>span]:block [&>span]:h-[2px] [&>span]:w-full [&>span]:bg-black">
                                <span className="mb-[6px]"></span>
                                <span className="mt-[3px] mb-[3px]"></span>
                                <span className="mt-[6px]"></span>
                            </div>
                        </button>
                    </div>
                </header>
                <div className="w-full content-start items-start justify-start lg:flex lg:flex-[1_1_100%]">
                    <div className="hidden min-h-[calc(100vh-250px)] min-w-[230px] max-w-[300px]  flex-[0_0_20%] lg:block">
                        <div className="fixed">
                            <div className="flex flex-col">
                                <Nav />
                                <div className="flex items-center">
                                    <a
                                        href="https://www.instagram.com/elco_lampy_ceramiczne/"
                                        title="Instagram ELCO Lampy Ceramiczne"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-2"
                                    >
                                        <Icon
                                            name="instagram"
                                            className="w-[25px] hover:fill-slate-700"
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/elco.lampy"
                                        title="Facebok ELCO Lampy Ceramiczne"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon
                                            name="facebook"
                                            className="w-[20px] hover:fill-slate-700"
                                        />
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <a
                                        href="tel:+48 572 906 548"
                                        className="block text-xs font-light text-neutral-600 hover:text-black"
                                    >
                                        +48 572 906 548
                                    </a>
                                    <a
                                        href="mailto:elco.kontakt@gmail.com"
                                        className="mt-2 block text-xs font-light text-neutral-600 hover:text-black"
                                    >
                                        elco.kontakt@gmail.com
                                    </a>
                                </div>
                                <div className="mt-10 max-w-[250px]">
                                    <div className="mb-4 text-sm font-semibold uppercase tracking-[2px]">
                                        Twoja lista
                                    </div>
                                    <WishlistProductsList />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[82px] lg:mt-0 lg:w-[80%] lg:flex-1">
                        {/* <main className="max-w-full w-[82%] pl-12"> */}
                        <main className="w-full lg:pl-12">{children}</main>
                        <footer className="relative mt-24 pt-10 lg:ml-12 lg:-mr-[64px] lg:-mb-[54px] 2xl:h-[400px]">
                            <div className="container-padding bg-[#101010] pt-16 2xl:flex 2xl:h-full 2xl:items-center 2xl:justify-between 2xl:p-0">
                                <div className="m-auto -mt-[100px] w-full max-w-[550px] 2xl:m-0">
                                    <div className="flex w-full max-w-xl items-end 2xl:absolute 2xl:top-0 2xl:left-16">
                                        <ExportedImage
                                            src="/img/instagram-creators/w_moim_malutkim_domu-bedroom.jpg"
                                            width={1080}
                                            height={892}
                                            layout="intrinsic"
                                            objectFit={'cover'}
                                            objectPosition={'top'}
                                        />
                                        <div className="ml-14 hidden sm:block">
                                            {MENU_LINKS.map(linkItem => (
                                                <Link
                                                    key={linkItem.href}
                                                    href={linkItem.href}
                                                    scroll={false}
                                                >
                                                    <a className="mt-6 flex items-center whitespace-nowrap text-sm font-light text-white hover:text-stone-200">
                                                        {linkItem.label}
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="m-auto mt-10 w-full max-w-[550px] pb-10 2xl:m-0 2xl:max-w-[450px] 2xl:pb-0">
                                    <div className="flex flex-col-reverse 2xl:block">
                                        <div className="mt-7 mb-2 flex items-center justify-center 2xl:mt-0 2xl:mb-0 2xl:justify-start">
                                            <Link href={`/`} title="Wstęp ELCO">
                                                <a className="text-3xl font-medium tracking-[5px] text-white sm:text-5xl">
                                                    ELCO
                                                </a>
                                            </Link>
                                            <span className="ml-5 text-xs font-light text-stone-300 sm:text-sm sm:leading-5">
                                                <span className="block">
                                                    Klasyczne
                                                </span>
                                                <span>Lampy Ceramiczne</span>
                                            </span>
                                        </div>
                                        <div className="mt-6 flex items-center justify-center 2xl:justify-start">
                                            <a
                                                href="https://www.instagram.com/elco_lampy_ceramiczne/"
                                                title="Instagram ELCO Lampy Ceramiczne"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group mr-8 flex items-center"
                                            >
                                                <Icon
                                                    name="instagram"
                                                    className="w-[28px] fill-white group-hover:fill-stone-300"
                                                />
                                                <span className="pl-2 text-xs text-white group-hover:text-stone-300">
                                                    Instagram
                                                </span>
                                            </a>
                                            <a
                                                href="https://www.facebook.com/elco.lampy"
                                                title="Facebok ELCO Lampy Ceramiczne"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center"
                                            >
                                                <Icon
                                                    name="facebook"
                                                    className="fill-white group-hover:fill-stone-300"
                                                />
                                                <span className="pl-2 text-xs text-white group-hover:text-stone-300">
                                                    Facebook
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-padding bg-[#101010] pb-14 text-center 2xl:flex 2xl:justify-between 2xl:pt-4 2xl:pl-16 2xl:pr-0 2xl:text-left">
                                <div className="border-t border-stone-700 pt-10 text-sm text-stone-200 2xl:border-0">
                                    <span className="block sm:inline-block">
                                        tel:{' '}
                                        <a
                                            href="tel:+48 572 906 548"
                                            className="hover:text-stone-300"
                                        >
                                            <span className="text-[.8rem]">
                                                +48 572 906 548
                                            </span>
                                        </a>
                                    </span>
                                    <span className="inline-block pt-6 sm:pt-0 sm:pl-10">
                                        mail:{' '}
                                        <a
                                            href="mailto:elco.kontakt@gmail.com"
                                            className="hover:text-stone-300"
                                        >
                                            elco.kontakt@gmail.com
                                        </a>
                                    </span>
                                </div>
                                <div className="mt-10 text-[.65rem] font-light text-stone-400 sm:text-xs 2xl:mt-0 2xl:w-full 2xl:max-w-[450px] 2xl:text-left">
                                    <span>
                                        Copyright © 2022 ELCO. All Rights
                                        Reserved.
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </NoSSRWrapper>
    )
}

export default Layout
