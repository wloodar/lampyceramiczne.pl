import * as React from 'react'
import clsx from 'clsx'

type GridProps = {
    children: React.ReactNode
    className?: string
}

const Grid = React.forwardRef<HTMLElement, GridProps>(function Grid(
    { children, className },
    ref,
) {
    return (
        <div
            className={clsx(
                'grid grid-cols-6 gap-x-5 lg:grid-cols-12 lg:gap-x-14',
                className,
            )}
        >
            {children}
        </div>
    )
})

export { Grid }
