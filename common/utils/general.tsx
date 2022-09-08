import * as React from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'

type AnchorProps = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>

const AnchorOrLink = React.forwardRef<
    HTMLAnchorElement,
    AnchorProps & {
        reload?: boolean
        href?: LinkProps['href']
    }
>(function AnchorOrLink(props, ref) {
    const { href, reload = false, children, className, ...rest } = props

    let destinationUrl = ''
    let useRegularAnchor = reload

    if (!useRegularAnchor && typeof href === 'string') {
        useRegularAnchor = true
    }

    if (useRegularAnchor) {
        return (
            <Link
                href={href ?? destinationUrl}
                {...rest}
                ref={ref}
                scroll={false}
                passHref
            >
                <a className={className}>{children}</a>
            </Link>
        )
    }

    return <></>
})

export { AnchorOrLink }
