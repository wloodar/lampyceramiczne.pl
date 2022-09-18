import create from 'zustand'
import { persist } from 'zustand/middleware'
import { produce } from 'immer'
import type { Draft } from 'immer'
import { allLamps } from 'contentlayer/generated'
import { sendWishlistGTMEvent } from 'common/utils/googleTagManager'

type ProductSlug = string
type Slugs = Array<ProductSlug>

type WishlistStore = {
    slugs: Slugs
    getWishlistSlugs: () => Array<ProductSlug>
    addProduct: (slug: ProductSlug) => void
    removeProduct: (slug: ProductSlug) => void
    toggleProduct: (slug: ProductSlug) => void
}

const useWishlistStore = create<WishlistStore>()(
    persist(
        (set, get) => ({
            slugs: [],
            getWishlistSlugs: () => {
                let filteredSlugs = []
                for (const slug of get().slugs) {
                    if (!allLamps.find(lamp => lamp.slug === slug)) {
                        get().removeProduct(slug)
                        continue
                    }

                    filteredSlugs.push(slug)
                }

                return filteredSlugs
            },
            addProduct: slug =>
                set(
                    produce((draft: Draft<Pick<WishlistStore, 'slugs'>>) => {
                        if (!draft.slugs.includes(slug)) {
                            draft.slugs.push(slug)
                        }

                        sendWishlistGTMEvent({
                            slugs: draft.slugs,
                            addSlug: slug as string,
                        })
                    }),
                ),
            removeProduct: slug =>
                set(state => {
                    const filteredSlugs = state.slugs.filter(
                        prodSlug => prodSlug !== slug,
                    )

                    sendWishlistGTMEvent({
                        slugs: filteredSlugs,
                        removeSlug: slug as string,
                    })

                    return {
                        slugs: filteredSlugs,
                    }
                }),
            toggleProduct: slug =>
                set(
                    produce((draft: Draft<Pick<WishlistStore, 'slugs'>>) => {
                        if (!draft.slugs.includes(slug)) {
                            draft.slugs.push(slug)
                            sendWishlistGTMEvent({
                                slugs: draft.slugs,
                                addSlug: slug as string,
                            })
                        } else {
                            draft.slugs.splice(draft.slugs.indexOf(slug), 1)
                            sendWishlistGTMEvent({
                                slugs: draft.slugs,
                                removeSlug: slug as string,
                            })
                        }
                    }),
                ),
        }),
        {
            name: 'wishlist-storage',
            getStorage: () => localStorage,
        },
    ),
)

export { useWishlistStore }
