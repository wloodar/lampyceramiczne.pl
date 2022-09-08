import { NextRouter, withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

type ActiveLinkProps = {
    router: NextRouter
    children: React.ReactNode
    as?: any
    href: string
    activeClassName?: string
    activeSubClassName?: string
}

export default withRouter(
    ({
        router,
        children,
        as,
        href,
        activeClassName,
        activeSubClassName,
        ...rest
    }: ActiveLinkProps) => {
        const child = Children.only(children)
        const childClassName = child!.props.className || ''

        const sanitizedPath = router.asPath.split('#')[0].split('?')[0]

        const activeClass = activeClassName || 'active'
        const activeSubClass = activeSubClassName || 'active-sub'

        href =
            href && href !== '/' && href.endsWith('/')
                ? href.slice(0, -1)
                : href
        as = as && as !== '/' && as.endsWith('/') ? as.slice(0, -1) : as

        const activityClassName =
            sanitizedPath === href || sanitizedPath === as
                ? activeClass
                : sanitizedPath.startsWith(href + '/') ||
                  sanitizedPath.startsWith(as + '/')
                ? activeSubClass
                : ''

        const className = `${childClassName} ${activityClassName}`.trim()

        return (
            <Link href={href} as={as} {...rest} scroll={false} passHref>
                {React.cloneElement(child, {
                    className: className || null,
                })}
            </Link>
        )
    },
)
