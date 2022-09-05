import Link from 'next/link'
import { useWishlistStore } from 'common/hooks/useWishlistStore'
import { allLamps, Lamp } from 'contentlayer/generated'
import { H5, Paragraph } from './typography'
import ExportedImage from 'next-image-export-optimizer'

const WishlistItem = ({
    slug,
    title,
    cover,
    removeProduct,
}: Pick<Lamp, 'slug' | 'title' | 'cover'> & {
    removeProduct: (slug: string) => void
}) => {
    return (
        <div className="flex items-center">
            <div className="peer cursor-pointer">
                <Link href={`/lampa/${slug}`} scroll={false} passHref>
                    <ExportedImage
                        src={`/img/lamps/${slug}/${cover}`}
                        width={45}
                        height={45}
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-lg"
                    />
                </Link>
            </div>
            <div className="flex-1 pl-4 peer-hover:underline">
                <h5 className="text-xs cursor-pointer hover:underline">
                    <Link href={`/lampa/${slug}`} scroll={false}>
                        {title}
                    </Link>
                </h5>
                <button onClick={() => removeProduct(slug)} className="text-xs">
                    Usuń
                </button>
            </div>
        </div>
    )
}

const WishlistProductsList = () => {
    const { slugs, removeProduct } = useWishlistStore()
    const lamps = allLamps.filter(lamp => slugs.includes(lamp.slug))

    if (lamps.length === 0) {
        return (
            <div>
                <Paragraph>
                    Na ten moment nie posiadasz na swojej liście jakiejkolwiek
                    lampy.
                </Paragraph>
            </div>
        )
    }

    return (
        <div>
            {lamps.map(lamp => (
                <WishlistItem
                    key={lamp.slug}
                    slug={lamp.slug}
                    title={lamp.title}
                    cover={lamp.cover}
                    removeProduct={removeProduct}
                />
            ))}
        </div>
    )
}

export default WishlistProductsList
