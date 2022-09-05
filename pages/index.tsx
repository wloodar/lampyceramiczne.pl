import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import SEO from '../common/components/seo'

// import { useWishlistStore } from 'common/hooks/useWishlistStore'
// import { allLamps } from 'contentlayer/generated'

// const WishlistProductsList = dynamic(
//     () => import('common/components/wishlist'),
//     {
//         ssr: false,
//     },
// )

const Home: NextPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <SEO />
        </div>
    )
}

export default Home
