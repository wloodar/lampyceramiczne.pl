import { sendMetaPixelEvent } from './metaPixel'
import { GTMTrackingEvents } from 'common/types'

type GTMEvent = {
    eventName: GTMTrackingEvents
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
    const payload: GTMEvent = {
        eventName: 'wishlist',
        data: {
            wishlist: {
                slugs: slugs,
                addProduct: addSlug,
                removeProduct: removeSlug,
                contact: contact,
            },
        },
    }

    sendMetaPixelEvent(payload)
    emitGTMEvent(payload)
}

export { emitGTMEvent, sendWishlistGTMEvent }
