import React from 'react'
import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'
import type { ExportedImageProps } from 'next-image-export-optimizer'

import { Paragraph } from './typography'

import Icon from './icon'

const PageBanner = ({
    title,
    heading,
    description,
    linkText,
    href,
    imagePath = '/img/instagram-creators/elco-lampy-ceramiczne-szyszka-homewithbluedoor.jpg',
    imageFit = 'cover',
    imagePos = 'center',
    ...rest
}: {
    title: string
    heading: string
    description: string
    linkText: string
    href: string
    imagePath?: string
    imageFit?: ExportedImageProps['objectFit']
    imagePos?: ExportedImageProps['objectPosition']
}) => {
    return (
        <div className=" relative mt-10">
            <div className="absolute inset-0 -z-10">
                <ExportedImage
                    src={imagePath}
                    alt="Hala produkcyjna lamp ceramicznych ELCO"
                    layout={'fill'}
                    objectFit={imageFit}
                    objectPosition={imagePos}
                />
            </div>
            <div className="bg-black/50 py-20 px-28">
                <div className="mb-20 font-medium text-white">{title}</div>
                <div className="max-w-lg">
                    <h3 className="text-6xl font-semibold text-white">
                        {heading}
                    </h3>
                    <div className="max-w-sm">
                        <Paragraph
                            className="mt-12"
                            colorClassName="text-white"
                        >
                            {description}
                        </Paragraph>
                    </div>
                    <div className="mt-20">
                        <div className="inline-block">
                            <Link href={href} scroll={false}>
                                <a className="flex items-center border-b-2 border-transparent pb-2 font-medium text-white hover:border-stone-200">
                                    {linkText}
                                    <Icon
                                        name="arrowRight"
                                        className="ml-3 h-auto"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PageBanner }
