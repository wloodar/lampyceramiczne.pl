import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import SEO from '../common/components/seo'

import { useWishlistStore } from 'common/hooks/useWishlistStore'
import { allLamps } from 'contentlayer/generated'

const WishlistProductsList = dynamic(
    () => import('common/components/wishlist'),
    {
        ssr: false,
    },
)

const Home: NextPage = () => {
    const { addProduct, removeProduct } = useWishlistStore()

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <SEO />
            {/* <div>
                {slugs.map((slug) => (
                    <p key={slug}>{slug}</p>
                ))}
            </div> */}
            <div className="mr-[100px]">
                Your list:
                <WishlistProductsList />
            </div>
            <div className="mr-[100px]">
                List of Lamps
                {allLamps.map(lamp => (
                    <div key={lamp.slug}>name: {lamp.title}</div>
                ))}
            </div>
            <button
                onClick={() =>
                    addProduct(
                        'lampa-ceramiczna-stolowa-elco-szyszka-klasyczna',
                    )
                }
                className="block"
            >
                Create new
            </button>
            <button
                onClick={() =>
                    removeProduct(
                        'lampa-ceramiczna-stolowa-elco-szyszka-klasyczna',
                    )
                }
                className="block"
            >
                Remove
            </button>
        </div>
    )
}

export default Home
