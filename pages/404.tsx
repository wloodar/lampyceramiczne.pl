import React from 'react'
import { useRouter } from 'next/router'
import { H1, Paragraph } from 'common/components/typography'
import { ButtonLink } from 'common/components/button'

const NotFound = () => {
    const { asPath } = useRouter()

    return (
        <div className="relative m-auto mt-32 mb-24 max-w-[22rem] overflow-hidden text-center lg:mb-32 lg:mt-0">
            <div className="absolute -top-32 -left-2 right-0 -z-10 text-center">
                <div className="rotate-90 text-[24rem] text-neutral-100">
                    :(
                </div>
            </div>
            <span className="mb-4 inline-block rounded-md bg-stone-100 px-7 py-2 text-sm text-neutral-500">
                {asPath}
            </span>
            <H1>Strona o takim adresie nie istnieje</H1>
            <Paragraph className="mt-7">
                Miejsce, które chciałeś odwiedzić nie istnieje, lub zostało
                usunięte. Sprawdź czy powyższy adres jest prawidłowy.
            </Paragraph>
            <ButtonLink
                href={`/`}
                title="Wróć na stronę główną ELCO"
                className="mt-8 inline-block"
            >
                Początek
            </ButtonLink>
            <ButtonLink
                type="bs-outline"
                href={`/oferta`}
                title="Oferta lamp ceramicznych ELCO"
                className="mt-8 ml-4 inline-block"
            >
                Oferta
            </ButtonLink>
        </div>
    )
}

export default NotFound
