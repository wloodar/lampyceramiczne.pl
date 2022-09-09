import create from 'zustand'
import { persist } from 'zustand/middleware'
import { produce } from 'immer'
import type { Draft } from 'immer'

type ProductSlug = string

const MAX_ITEMS = 4

type RecentStore = {
    recentSlugs: Array<ProductSlug>
    toggleRecentProduct: (slug: ProductSlug) => void
    removeRecentProduct: (slug: ProductSlug) => void
}

const useRecentStore = create<RecentStore>()(
    persist(
        set => ({
            recentSlugs: [],
            toggleRecentProduct: slug =>
                set(
                    produce(
                        (draft: Draft<Pick<RecentStore, 'recentSlugs'>>) => {
                            if (
                                new Set(draft.recentSlugs).size !==
                                draft.recentSlugs.length
                            ) {
                                draft.recentSlugs = []
                            }

                            if (draft.recentSlugs.length > MAX_ITEMS) {
                                draft.recentSlugs.splice(MAX_ITEMS - 1)
                            }

                            const existsIndex = draft.recentSlugs.indexOf(slug)

                            if (existsIndex !== -1) {
                                draft.recentSlugs.splice(existsIndex, 1)
                                draft.recentSlugs.unshift(slug)
                                return draft
                            }

                            if (draft.recentSlugs.length === MAX_ITEMS) {
                                draft.recentSlugs.pop()
                                draft.recentSlugs.unshift(slug)
                                return draft
                            }

                            draft.recentSlugs.unshift(slug)
                        },
                    ),
                ),
            removeRecentProduct: slug =>
                set(state => ({
                    recentSlugs: state.recentSlugs.filter(
                        recSlug => recSlug !== slug,
                    ),
                })),
        }),
        {
            name: 'recent-storage',
            getStorage: () => localStorage,
        },
    ),
)

export { useRecentStore }
