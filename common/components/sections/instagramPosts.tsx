import React from 'react'
import ExportedImage from 'next-image-export-optimizer'
import { H3 } from '../typography'

const instagramPosts: Array<{ author: string; url: string; imgPath: string }> =
    [
        {
            author: 'homewithbluedoor',
            url: 'https://www.instagram.com/p/CNHsVcUMKZ9/',
            imgPath:
                '/homewithbluedoor-elco-lampy-ceramiczne-szyszka-corridor.jpg',
        },
        {
            author: 'pracownia_bohodom',
            url: 'https://www.instagram.com/p/CNKvhZQsPj2/',
            imgPath: '/bohodom-warszawa-lampa-ceramiczna-personalized-dark.jpg',
        },
        {
            author: 'w_moim_malutkim_domu',
            url: 'https://www.instagram.com/p/CTL9gxZIugm/',
            imgPath:
                '/w_moim_malutkim_domu-elco-lampy-ceramiczne-marciniak-bedroom.jpg',
        },
    ]

const InstagramPosts = () => {
    return (
        <>
            <div className="text-center">
                <H3 className="uppercase">ELCO na instagramie</H3>
                <a
                    href="https://instagram.com/elco_lampy_ceramiczne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-light text-neutral-400 hover:text-black"
                >
                    @elco_lampy_ceramiczne
                </a>
            </div>
            <div className="mt-12 md:mt-20 md:grid md:grid-cols-12 md:gap-x-10">
                {instagramPosts.map(post => (
                    <div key={post.url} className="mb-12 md:col-span-4 md:mb-0">
                        <div className="aspect-w-2 aspect-h-2 relative">
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExportedImage
                                    src={`/img/instagram-creators${post.imgPath}`}
                                    alt={`Instagram post by ${post.author} with elco`}
                                    layout={'fill'}
                                    objectFit="cover"
                                    objectPosition="center"
                                    className="cursor-pointer opacity-95 hover:opacity-75"
                                />
                            </a>
                        </div>
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-sm font-light italic text-neutral-400 hover:text-black"
                        >
                            @{post.author}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default InstagramPosts
