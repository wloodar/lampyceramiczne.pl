import { GTMWishlist } from 'common/types'

type GTMEvent = {
    eventName: string
    data: { [key: string]: any }
}

const emitGTMEvent = ({ eventName, data }: GTMEvent) => {
    // @ts-ignore
    window.dataLayer = window.dataLayer || []
    // @ts-ignore
    window.dataLayer.push({
        event: eventName,
        ...data,
    })

    return true
}

const sendWishlistGTMEvent = ({
    slugs,
    addSlug = undefined,
    removeSlug = undefined,
    contact = undefined,
}: {
    slugs: Array<String>
    addSlug?: undefined | string
    removeSlug?: undefined | string
    contact?: undefined | boolean
}) => {
    emitGTMEvent({
        eventName: 'wishlist',
        data: {
            wishlist: {
                slugs: slugs,
                addProduct: addSlug,
                removeProduct: removeSlug,
                contact: contact,
            } as GTMWishlist,
        },
    })
}

export { emitGTMEvent, sendWishlistGTMEvent }
