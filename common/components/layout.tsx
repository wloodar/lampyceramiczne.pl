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
                        <Link href="/" passHref>
                            <a className="text-5xl font-semibold tracking-[10px]">
                                ELCO
                            </a>
                        </Link>
                    </div>
                </header>
                <div className="w-full flex justify-start content-start items-start flex-[1_1_100%]">
                    <div className="max-w-[300px] min-w-[230px] flex-[0_0_20%] min-h-[calc(100vh-250px)]">
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
                                            className="w-[28px] hover:fill-slate-700"
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
                                            className="hover:fill-slate-700"
                                        />
                                    </a>
                                </div>
                                <div className="mt-14 max-w-[250px]">
                                    <div className="mb-4 uppercase tracking-[3px] text-sm font-semibold">
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
                        <footer className="ml-12 -mr-[64px] -mb-[54px] h-[400px] relative pt-10 mt-24">
                            <div className="bg-[#101010] h-full flex justify-between items-center pt-16">
                                <div className="max-w-[550px] w-full">
                                    <div className="absolute top-0 left-16 max-w-xl w-full flex items-end">
                                        <ExportedImage
                                            src="/img/instagram-creators/w_moim_malutkim_domu-bedroom.jpg"
                                            width={1080}
                                            height={892}
                                            layout="intrinsic"
                                        />
                                        <div className="ml-14">
                                            {MENU_LINKS.map(linkItem => (
                                                <Link
                                                    key={linkItem.href}
                                                    href={linkItem.href}
                                                >
                                                    <a className="text-white text-sm font-light flex items-center whitespace-nowrap mt-6 hover:text-stone-200">
                                                        {linkItem.label}
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[450px] w-full">
                                    <div className="flex items-center">
                                        <Link href={`/`} title="Wstęp ELCO">
                                            <a className="text-5xl font-medium tracking-[5px] text-white">
                                                ELCO
                                            </a>
                                        </Link>
                                        <span className="text-stone-300 font-light leading-5 text-sm ml-5">
                                            <span className="block">
                                                Klasyczne
                                            </span>
                                            <span>Lampy Ceramiczne</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-6">
                                        <a
                                            href="https://www.instagram.com/elco_lampy_ceramiczne/"
                                            title="Instagram ELCO Lampy Ceramiczne"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mr-8 flex items-center group"
                                        >
                                            <Icon
                                                name="instagram"
                                                className="w-[28px] fill-white group-hover:fill-stone-300"
                                            />
                                            <span className="text-white pl-2 text-xs group-hover:text-stone-300">
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
                                            <span className="text-white pl-2 text-xs group-hover:text-stone-300">
                                                Facebook
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#101010] flex justify-between pl-16 pt-4 pb-14">
                                <div className="text-stone-200 text-sm">
                                    <span>
                                        tel:{' '}
                                        <a
                                            href="tel:+48 572 906 548"
                                            className="hover:text-stone-300"
                                        >
                                            +48 572 906 548
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
                                <div className="text-stone-200 text-xs max-w-[450px] w-full text-left">
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
