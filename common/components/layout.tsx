import dynamic from 'next/dynamic'
import Link from 'next/link'
import { H5 } from './typography'
import { Nav } from './nav'
import NoSSRWrapper from './noSSRWrapper'

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
                                <div className="mt-14 max-w-[250px]">
                                    <div className="mb-4 uppercase tracking-[3px] text-sm font-semibold">
                                        Twoja lista
                                    </div>
                                    <WishlistProductsList />
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className="max-w-full w-[82%] px-6">{children}</main>
                </div>
            </div>
        </NoSSRWrapper>
    )
}

export default Layout
