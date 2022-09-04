import { useWishlistStore } from 'common/hooks/useWishlistStore'
import { allLamps } from 'contentlayer/generated'

const WishlistProductsList = () => {
    const { slugs } = useWishlistStore()
    const lamps = allLamps.filter(lamp => slugs.includes(lamp.slug))

    return <div></div>
}

export default WishlistProductsList
