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
                // 'relative font-semibold outline-none',
                // 'rounded-full disabled:opacity-30',
                // {
                //     'bg-primary border-secondary border-2 transition-[border] ease-in-out duration-500 hover:border-primary':
                //         styleType === 'secondary',
                //     'bg-inverse text-inverse hover:bg-gray-800 hover:text-gray-200 transition-[background,color] ease-in-out duration-300':
                //         styleType === 'primary',
                // },
                // 'py-5 px-10',
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
                    'border border-black bg-transparent': type === 'outline',
                },
                // 'relative font-semibold outline-none',
                // 'rounded-full disabled:opacity-30',
                // {
                //     'bg-primary border-secondary border-2 transition-[border] ease-in-out duration-500 hover:border-primary':
                //         type === 'secondary',
                //     'bg-inverse text-inverse hover:bg-gray-800 hover:text-gray-200 transition-[background,color] ease-in-out duration-300':
                //         type === 'primary',
                // },
                // 'py-5 px-10',
            )}
            {...rest}
        >
            {children}
        </AnchorOrLink>
    )
})

export { Button, ButtonLink }
