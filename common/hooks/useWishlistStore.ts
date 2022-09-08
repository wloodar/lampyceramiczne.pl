import create from 'zustand'
import { persist } from 'zustand/middleware'
import { produce } from 'immer'
import type { Draft } from 'immer'

type ProductSlug = string

type WishlistStore = {
    slugs: Array<ProductSlug>
    addProduct: (slug: ProductSlug) => void
    removeProduct: (slug: ProductSlug) => void
    toggleProduct: (slug: ProductSlug) => void
}

const useWishlistStore = create<WishlistStore>()(
    persist(
        set => ({
            slugs: [],
            addProduct: slug =>
                set(
                    produce((draft: Draft<Pick<WishlistStore, 'slugs'>>) => {
                        if (!draft.slugs.includes(slug)) {
                            draft.slugs.push(slug)
                        }
                    }),
                ),
            removeProduct: slug =>
                set(state => ({
                    slugs: state.slugs.filter(prodSlug => prodSlug !== slug),
                })),
            toggleProduct: slug =>
                set(
                    produce((draft: Draft<Pick<WishlistStore, 'slugs'>>) => {
                        if (!draft.slugs.includes(slug)) {
                            draft.slugs.push(slug)
                        } else {
                            draft.slugs.splice(draft.slugs.indexOf(slug), 1)
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
