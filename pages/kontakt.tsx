import React from 'react'
import { H2, H3 } from 'common/components/typography'
import { Button } from 'common/components/button'
import Icon from '../common/components/icon'
import SEO from 'common/components/seo'
import clsx from 'clsx'

import { useWishlistStore } from 'common/hooks/useWishlistStore'
import WishlistProductsList from 'common/components/wishlist'

const inputClassName =
    'bg-neutral-100 py-4 px-6 outline-none mb-6 text-black text-sm border-2 border-transparent transition-[border] duration-300 ease-in-out focus:border-black active:border-black'

const contactItemClassName =
    'mr-8 flex items-center group border border-neutral-100 flex items-center py-4 px-5 hover:border-neutral-200 text-sm font-normal mb-6 w-full'

const Kontakt = () => {
    const { slugs: wishlistSlugs } = useWishlistStore()

    const submitContactForm = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="m-auto flex max-w-5xl justify-between">
            <SEO
                title="Kontakt ELCO | Polski Producent Lamp Ceramicznych Z Abażurem"
                description="Kontakt z ELCO - lampyceramiczne.pl | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne."
            />
            <div className="flex-1">
                <div className="sticky top-16">
                    <div className="max-w-sm">
                        <H3 className="uppercase" tag={'h2'}>
                            Służymy pomocą
                        </H3>
                        <div className="mb-10 pt-2 text-stone-500">
                            Skontaktuj się z nami
                        </div>
                        <a
                            href="tel:+48 572 906 548"
                            className={contactItemClassName}
                        >
                            <Icon name="smartphone" className="mr-4 w-5" />
                            +48 572 906 548
                        </a>
                        <a
                            href="mailto:elco.kontakt@gmail.com"
                            className={contactItemClassName}
                        >
                            <Icon name="mail" className="mr-4 w-5" />
                            elco.kontakt@gmail.com
                        </a>
                        <a
                            href="https://www.instagram.com/elco_lampy_ceramiczne/"
                            title="Instagram ELCO Lampy Ceramiczne"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={contactItemClassName}
                        >
                            <Icon name="instagram" className="mr-4 w-6" />
                            Instagram
                        </a>
                    </div>
                    <div className="max-w-xs">
                        <H3 className="mt-10 mb-8 uppercase">Twoje lampy</H3>
                        <WishlistProductsList showButton={false} />
                    </div>
                </div>
            </div>
            <div className="w-[450px]">
                <form
                    method="post"
                    onSubmit={submitContactForm}
                    className="flex flex-col border border-stone-100 p-10"
                >
                    <label htmlFor="name" className="pb-2 text-xs font-light">
                        Twoje imię
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Podaj proszę swoje imię"
                        required
                        className={inputClassName}
                    />

                    <label htmlFor="email" className="pb-2 text-xs font-light">
                        Adres Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="email@poczta.com"
                        className={inputClassName}
                    />

                    <label
                        htmlFor="message"
                        className="pb-2 text-xs font-light"
                    >
                        Wiadomość
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className={clsx(
                            inputClassName,
                            'min-h-[200px] resize-none',
                        )}
                    ></textarea>
                    {wishlistSlugs.length > 0 ? (
                        <div className="mb-6 text-sm font-light text-neutral-400">
                            * Twoje lampy, które wcześniej zostały przez Ciebie
                            wybrane, zostaną dołączone do wiadomości
                        </div>
                    ) : null}
                    <Button
                        type="submit"
                        className="flex items-center justify-center"
                    >
                        Wyślij wiadomość{' '}
                        <Icon name="arrowUpRight" className="ml-2 w-[18px]" />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Kontakt
