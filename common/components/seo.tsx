import Head from 'next/head'

const DOMAIN = 'http://lampyceramiczne.pl'

const SEO = ({
    title = 'ELCO Lampy Ceramiczne',
    description = 'Polski producent lamp ceramicznych - ELCO | Ponad 20 lat doświadczenia | Ceramiczne lampy z abażurem. Podłogowe lampy & stołowe lampy ceramiczne.',
    siteName = 'ELCO Lampy Ceramiczne',
    ogType = 'website',
    canonical = DOMAIN,
}: {
    title?: string
    description?: string
    siteName?: string
    ogType?: string
    canonical?: string
}) => {
    return (
        <Head>
            <title key="title">{title}</title>
            <meta name="description" content={description} />
            <meta key="og_type" property="og:type" content={ogType} />
            <meta key="og_title" property="og:title" content={title} />
            <meta
                key="og_description"
                property="og:description"
                content={description}
            />
            <meta key="og_locale" property="og:locale" content="en_IE" />
            <meta
                key="og_site_name"
                property="og:site_name"
                content={siteName}
            />
            <meta
                key="og_url"
                property="og:url"
                content={canonical ?? DOMAIN}
            />
            <meta
                key="og_site_name"
                property="og:site_name"
                content={siteName}
            />

            <meta
                key="twitter:title"
                property="twitter:title"
                content={title}
            />
            <meta
                key="twitter:description"
                property="twitter:description"
                content={description}
            />

            <link rel="canonical" href={canonical ?? DOMAIN} />

            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEO
