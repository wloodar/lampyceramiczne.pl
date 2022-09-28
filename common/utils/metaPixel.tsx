import type { GTMTrackingEvents } from '../types'

const waitForFbq = (callback: any) => {
    // @ts-ignore
    if (typeof fbq !== 'undefined') {
        callback()
    } else {
        setTimeout(function () {
            waitForFbq(callback)
        }, 100)
    }
}

const sendMetaPixelEvent = ({
    eventName,
    data,
}: {
    eventName: GTMTrackingEvents
    data: any
}) => {
    waitForFbq(() => {
        // @ts-ignore
        fbq('trackCustom', eventName, data)
    })
}

export { sendMetaPixelEvent }
