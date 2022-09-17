import clsx from 'clsx'
import * as React from 'react'
import { AnchorOrLink } from '../utils/general'

interface ButtonProps {
    styleType?: 'primary' | 'secondary' | 'outline' | 'bs-outline'
    color?: 'dark' | 'bright'
    children: React.ReactNode
    className?: string
}

const buttonStyleClassname = (
    className: string | undefined,
    styleType: string,
    color: string,
) =>
    clsx(
        className,
        // 'cursor-pointer rounded-sm bg-black py-4 px-12 text-xs font-medium uppercase tracking-[1px] text-white hover:bg-neutral-800',
        'cursor-pointer rounded-sm py-4 px-12 text-xs font-medium uppercase tracking-[1px]',
        {
            'bg-black text-white hover:bg-neutral-800':
                styleType === 'primary' && color === 'dark',
            'bg-white text-center text-black hover:border-neutral-200 hover:bg-neutral-200':
                styleType === 'primary' && color === 'bright',
            'border-2 border-black bg-transparent': styleType === 'outline',
            'border border-stone-200 bg-transparent hover:border-stone-400':
                styleType === 'bs-outline',
            'text-white  hover:text-neutral-300':
                styleType === 'bs-outline' && color === 'bright',
            'text-black hover:border-stone-400 hover:bg-transparent':
                styleType === 'bs-outline' && color === 'dark',
        },
    )

const Button = ({
    children,
    styleType = 'primary',
    color = 'dark',
    className,
    ...rest
}: ButtonProps & JSX.IntrinsicElements['button']) => {
    return (
        <button
            className={buttonStyleClassname(className, styleType, color)}
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
    { children, href, type = 'primary', color = 'dark', className, ...rest },
    ref,
) {
    return (
        <AnchorOrLink
            ref={ref}
            href={href}
            className={buttonStyleClassname(className, type, color)}
            {...rest}
        >
            {children}
        </AnchorOrLink>
    )
})

export { Button, ButtonLink }
