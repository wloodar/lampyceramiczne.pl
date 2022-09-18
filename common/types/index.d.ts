type AboutSectionItem = {
    title: string
    href: string
    content: JSX.Element
}

type GTMWishlist = {
    slugs: Array<string>
    addProduct: undefined | string
    removeProduct: undefined | string
    contact: undefined | boolean
}

export { AboutSectionItem, GTMWishlist }
