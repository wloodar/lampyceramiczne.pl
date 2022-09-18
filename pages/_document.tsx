import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}" height="0" width="0" style="display: none; visibility: hidden;" />`,
                    }}
                />
            </body>
        </Html>
    )
}
