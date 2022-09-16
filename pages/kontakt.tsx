import React from 'react'
import { H2, H3, Paragraph } from 'common/components/typography'
import { Button } from 'common/components/button'
import Icon from '../common/components/icon'
import SEO from 'common/components/seo'
import clsx from 'clsx'

import { useWishlistStore } from 'common/hooks/useWishlistStore'
import WishlistProductsList from 'common/components/wishlist'
import { allLamps, Lamp } from 'contentlayer/generated'
import { AnimatePresence, motion } from 'framer-motion'
import { RecentlyViewed } from 'common/components/recentlyViewed'

const inputClassName =
    'bg-neutral-100 py-4 px-6 outline-none mb-6 text-black text-sm border-2 border-transparent transition-[border] duration-300 ease-in-out focus:border-black active:border-black'

const contactItemClassName =
    'mr-8 flex items-center group border border-neutral-100 flex items-center py-4 px-5 hover:border-neutral-200 text-sm font-medium mb-6 w-full'

const formAnimationVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeInOut' },
    },
    exit: {
        opacity: 0,
    },
}

const Kontakt = () => {
    const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
    const [submitError, setSubmitError] = React.useState<null | string>(null)
    const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false)

    const { slugs: wishlistSlugs } = useWishlistStore()

    const submitContactForm = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsSubmitting(true)
        setSubmitError(null)

        const { first_name, email, message } = e.target as HTMLFormElement
        let emailMessage: string = message.value

        if (wishlistSlugs.length > 0) {
            const choosedLamps = wishlistSlugs
                .map(slug => {
                    const lamp = allLamps.find(l => l.slug === slug)

                    if (lamp === undefined) return null
                    return lamp
                })
                .filter(lamp => lamp !== null) as Array<Lamp>

            const lampsString = choosedLamps.map(
                lamp => `Lamp Code - ${lamp.code}: ${lamp.title}, \n`,
            )

            emailMessage += `\n - - - - - - - - \n Sender Lamps List: \n ${lampsString}`
        }

        const body = {
            name: 'FormSubmit',
            senderName: first_name.value,
            senderEmail: email.value,
            _subject: `New Inquiry - ${email.value}, lampyceramiczne.pl`,
            message: emailMessage,
        }

        // Send email
        try {
            const response = await fetch(
                'https://formsubmit.co/ajax/elco.kontakt@gmail.com',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                },
            )

            setIsSubmitting(false)

            if (response.ok) {
                setSubmitSuccess(true)
            } else {
                setSubmitError(
                    'Twoja wiadomość niestety do nas nie dotarła. Sugerujemy skorzystanie bezpośredniego kontaktu mailowego, telefonicznego lub przez instagram. Przepraszamy za niedogodności.',
                )
            }
        } catch (err) {
            setIsSubmitting(false)
            setSubmitError(
                'Twoja wiadomość niestety do nas nie dotarła. Sugerujemy skorzystanie bezpośredniego kontaktu mailowego, telefonicznego lub przez instagram. Przepraszamy za niedogodności.',
            )
        }
    }

    return (
        <div className="container-padding m-auto max-w-5xl justify-between pt-16 lg:flex lg:p-0">
            <SEO
                title="Kontakt ELCO | Polski Producent Lamp Ceramicznych Z Abażurem"
                description="Kontakt z ELCO - lampyceramiczne.pl | Polski producent lamp ceramicznych z abażurem - ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne."
            />
            <div className="flex-1">
                <div className="top-16 lg:sticky">
                    <div className="m-auto max-w-md lg:m-0 lg:max-w-xs xl:max-w-sm">
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
                    <div className="m-auto max-w-md lg:m-0 lg:max-w-xs">
                        <H3 className="mt-10 mb-8 uppercase">Twoje lampy</H3>
                        <WishlistProductsList showButton={false} />
                    </div>
                </div>
            </div>
            <div className="relative m-auto mt-6 w-full max-w-md lg:m-0 lg:mt-12 lg:w-[370px] xl:w-[450px]">
                <H3 className="mb-6 uppercase">Wyślij wiadomość</H3>
                {isSubmitting && (
                    <div className="absolute top-1/2 left-0 right-0 text-center font-medium">
                        Wysyłamy Twoją wiadomość
                    </div>
                )}
                <div
                    className={clsx(
                        'border border-stone-100 py-8 px-4 transition-[height] duration-500 ease-in-out sm:p-10 lg:p-4 xl:p-10',
                        {
                            'border-red-200': submitError !== null,
                        },
                    )}
                >
                    <AnimatePresence initial={false}>
                        {submitSuccess ? (
                            <motion.div
                                variants={formAnimationVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="text-center"
                            >
                                <H3 className="uppercase">Sukces!</H3>
                                <Paragraph className="mt-6">
                                    Twoja wiadomość właśnie do nas dotarła.
                                    Dotrzymamy wszelkich starań, by jak
                                    najszybciej wrócić do Ciebie z odpowiedzą.
                                </Paragraph>
                            </motion.div>
                        ) : (
                            <motion.form
                                variants={formAnimationVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                method="post"
                                onSubmit={submitContactForm}
                                className={clsx(
                                    'flex flex-col transition-[opacity] duration-500 ease-in-out',
                                    {
                                        'pointer-events-none !opacity-20':
                                            isSubmitting,
                                    },
                                )}
                            >
                                <label
                                    htmlFor="name"
                                    className="pb-2 text-xs font-medium"
                                >
                                    Twoje imię
                                </label>
                                <input
                                    id="name"
                                    name="first_name"
                                    type="text"
                                    placeholder="Podaj proszę swoje imię"
                                    required
                                    minLength={1}
                                    maxLength={32}
                                    className={inputClassName}
                                />

                                <label
                                    htmlFor="email"
                                    className="pb-2 text-xs font-medium"
                                >
                                    Adres Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    minLength={1}
                                    maxLength={64}
                                    placeholder="email@poczta.com"
                                    className={inputClassName}
                                />

                                <label
                                    htmlFor="message"
                                    className="pb-2 text-xs font-medium"
                                >
                                    Wiadomość
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    minLength={1}
                                    maxLength={5000}
                                    className={clsx(
                                        inputClassName,
                                        'min-h-[200px] resize-none',
                                    )}
                                ></textarea>
                                {wishlistSlugs.length > 0 && (
                                    <div className="mb-6 text-sm font-light text-neutral-400">
                                        * Twoje lampy, które wcześniej zostały
                                        przez Ciebie wybrane, zostaną dołączone
                                        do wiadomości
                                    </div>
                                )}
                                {submitError !== null && (
                                    <div className="py-4 pb-10 text-sm text-red-700">
                                        {submitError}
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    className="flex items-center justify-center"
                                    disabled={isSubmitting}
                                >
                                    Wyślij wiadomość{' '}
                                    <Icon
                                        name="arrowUpRight"
                                        className="ml-2 w-[18px]"
                                    />
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Kontakt
