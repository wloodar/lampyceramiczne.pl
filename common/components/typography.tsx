import * as React from 'react'
import clsx from 'clsx'

type HeadingProps = {
    type?: 'primary' | 'secondary'
    className?: string
    tag?: React.ElementType
} & (
    | { children: React.ReactNode }
    | {
          dangerouslySetInnerHTML: {
              __html: string
          }
      }
)

const fontSizes = {
    h1: 'text-2xl lg:text-4xl font-normal',
    h2: 'text-4xl font-normal',
    h3: 'text-2xl lg:text-3xl font-normal',
    h4: 'text-2xl font-normal',
    h5: 'text-xl font-normal',
}

const headingColors = {
    primary: 'text-black',
    secondary: 'text-gray-500',
}

function Heading({
    type = 'primary',
    size,
    tag,
    className,
    ...rest
}: HeadingProps & { size: keyof typeof fontSizes }) {
    const Tag = tag ?? size
    return (
        <Tag
            className={clsx(fontSizes[size], headingColors[type], className)}
            {...rest}
        />
    )
}

function H1(props: HeadingProps) {
    return <Heading {...props} size="h1" />
}

function H2(props: HeadingProps) {
    return <Heading {...props} size="h2" />
}

function H3(props: HeadingProps) {
    return <Heading {...props} size="h3" />
}

function H4(props: HeadingProps) {
    return <Heading {...props} size="h4" />
}

function H5(props: HeadingProps) {
    return <Heading {...props} size="h5" />
}

type ParagraphProps = {
    size?: string
    className?: string
    colorClassName?: string
} & (
    | { children: React.ReactNode }
    | { dangerouslySetInnerHTML: { __html: string } }
)

function Paragraph({
    size = 'text-base',
    className,
    colorClassName = 'text-slate-700',
    ...rest
}: ParagraphProps) {
    return (
        <p
            className={clsx(
                'font-light leading-7',
                size,
                colorClassName,
                className,
            )}
            {...rest}
        ></p>
    )
}

export { H1, H2, H3, H4, H5, Paragraph }
