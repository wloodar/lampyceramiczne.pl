import clsx from 'clsx'
import * as React from 'react'
import { AnchorOrLink } from '../utils/general'

interface ButtonProps {
    styleType?: 'primary' | 'secondary' | 'outline'
    children: React.ReactNode
    className?: string
}

const Button = ({
    children,
    styleType = 'primary',
    className,
    ...rest
}: ButtonProps & JSX.IntrinsicElements['button']) => {
    return (
        <button
            className={clsx(
                className,
                'py-4 px-12 bg-black text-white rounded-sm text-xs font-medium uppercase tracking-[1px] hover:bg-neutral-800 cursor-pointer',
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

interface ButtonLinkProps {
    href: string
}

const ButtonLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithRef<typeof AnchorOrLink> &
        ButtonProps &
        ButtonLinkProps
>(function ButtonLink(
    { children, href, type = 'primary', className, ...rest },
    ref,
) {
    console.log(type)

    return (
        <AnchorOrLink
            ref={ref}
            href={href}
            className={clsx(
                className,
                'py-4 px-12 bg-black text-white rounded-sm text-xs font-medium uppercase tracking-[2px] hover:bg-neutral-800 cursor-pointer',
                {
                    'border-2 border-black bg-transparent': type === 'outline',
                },
            )}
            {...rest}
        >
            {children}
        </AnchorOrLink>
    )
})

export { Button, ButtonLink }
