import dynamic from 'next/dynamic'
import Link from 'next/link'
import { H5 } from './typography'
import { Nav } from './nav'
import NoSSRWrapper from './noSSRWrapper'
import ExportedImage from 'next-image-export-optimizer'
import Icon from './icon'

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
                        <footer className="ml-12 -mr-[64px] -mb-[54px] h-[400px] relative pt-16 mt-24">
                            <div className="bg-[#101010] h-full flex justify-between pt-16">
                                <div className="max-w-[550px] w-full">
                                    <div className="absolute top-0 left-12 max-w-sm">
                                        <ExportedImage
                                            src="/img/instagram-creators/w_moim_malutkim_domu-bedroom.jpg"
                                            width={1080}
                                            height={892}
                                            layout="intrinsic"
                                        />
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
