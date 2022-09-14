import dynamic from 'next/dynamic'
import Link from 'next/link'
import { H5 } from './typography'
import { Nav } from './nav'
import NoSSRWrapper from './noSSRWrapper'
import ExportedImage from 'next-image-export-optimizer'
import Icon from './icon'

import { MENU_LINKS } from './nav'

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
    return (
        <NoSSRWrapper>
            <div className="flex flex-col justify-start p-[54px_64px]">
                <header className="mb-14 flex-[0_0_80px]">
                    <div className="fixed w-full">
                        <Link href="/" scroll={false}>
                            <a className="text-5xl font-semibold tracking-[10px]">
                                ELCO
                            </a>
                        </Link>
                    </div>
                </header>
                <div className="flex w-full flex-[1_1_100%] content-start items-start justify-start">
                    <div className="min-h-[calc(100vh-250px)] min-w-[230px] max-w-[300px] flex-[0_0_20%]">
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
                    <div className="w-[80%] flex-1">
                        {/* <main className="max-w-full w-[82%] pl-12"> */}
                        <main className="w-full pl-12">{children}</main>
                        <footer className="relative ml-12 -mr-[64px] -mb-[54px] mt-24 h-[400px] pt-10">
                            <div className="flex h-full items-center justify-between bg-[#101010] pt-16">
                                <div className="w-full max-w-[550px]">
                                    <div className="absolute top-0 left-16 flex w-full max-w-xl items-end">
                                        <ExportedImage
                                            src="/img/instagram-creators/w_moim_malutkim_domu-bedroom.jpg"
                                            width={1080}
                                            height={892}
                                            layout="intrinsic"
                                            objectFit={'cover'}
                                            objectPosition={'top'}
                                        />
                                        <div className="ml-14">
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
                                <div className="w-full max-w-[450px]">
                                    <div className="flex items-center">
                                        <Link href={`/`} title="Wstęp ELCO">
                                            <a className="text-5xl font-medium tracking-[5px] text-white">
                                                ELCO
                                            </a>
                                        </Link>
                                        <span className="ml-5 text-sm font-light leading-5 text-stone-300">
                                            <span className="block">
                                                Klasyczne
                                            </span>
                                            <span>Lampy Ceramiczne</span>
                                        </span>
                                    </div>
                                    <div className="mt-6 flex items-center">
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
                            <div className="flex justify-between bg-[#101010] pl-16 pt-4 pb-14">
                                <div className="text-sm text-stone-200">
                                    <span>
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
                                    <span className="pl-10">
                                        mail:{' '}
                                        <a
                                            href="mailto:elco.kontakt@gmail.com"
                                            className="hover:text-stone-300"
                                        >
                                            elco.kontakt@gmail.com
                                        </a>
                                    </span>
                                </div>
                                <div className="w-full max-w-[450px] text-left text-xs text-stone-200">
                                    <span>
                                        Copyright © 2022 ELCO. All Rights
                                        Reserved.
                                    </span>
                                </div>
                            </div>
                        </footer>
                        {/* <div className="bg-[#101010] py-32 px-36 box-border">
                                <div className="flex justify-between text-white">
                                    <div className="max-w-lg">
                                        <H2 className="uppercase mb-8 !font-regular tracking-[3px] !text-2xl 2xl:!text-4xl !text-white">
                                            Zainteresowała Ciebie{' '}
                                            <span className="block pl-12 pt-5">
                                                nasza oferta?
                                            </span>
                                        </H2>
                                    </div>
                                    <div></div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </NoSSRWrapper>
    )
}

export default Layout
