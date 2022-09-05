import { allLamps, Lamp } from 'contentlayer/generated'
import { useWishlistStore } from 'common/hooks/useWishlistStore'

type PathParams = {
    params: {
        slug: string
    }
}

type Props = {
    params: Lamp
}

export const getStaticPaths = async () => {
    const paths: Array<PathParams> = allLamps.map(lamp => ({
        params: { slug: lamp.slug },
    }))

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }: Props) => {
    // @ts-ignore
    const lamp: Lamp = allLamps.find(lamp => lamp.slug === params.slug)

    return {
        props: {
            lamp,
        },
    }
}

const LampPage = ({ lamp }: { lamp: Lamp }) => {
    const { slugs, addProduct, removeProduct } = useWishlistStore()

    return (
        <div>
            <div>title: {lamp.title}</div>

            {slugs.includes(lamp.slug) ? (
                <button onClick={() => removeProduct(lamp.slug)}>
                    Usuń z Twojej listy
                </button>
            ) : (
                <button onClick={() => addProduct(lamp.slug)}>
                    Dodaj do Twojej listy
                </button>
            )}
        </div>
    )
}

export default LampPage
