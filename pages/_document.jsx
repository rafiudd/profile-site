import { Html, Main, Head, NextScript } from 'next/document'
export default function Document() {
    const headdata = [
        {
            image: 'https://www.eliaschen.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feliaschen.d614d9a1.jpg&w=640&q=75',
            url: 'https://www.eliaschen.dev/',
            description: 'Learning about coding and creating something useful for every developers and user',
            title: 'EliasChen - Developer',
        },
    ]
    return (
        <Html>
            <Head>
                <meta charset="utf-8" />
                <meta name="theme-color" content="#a855f7" />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="icon" type="image/ico" href="https://www.eliaschen.dev/favicon.ico" />
                <meta
                    name="description"
                    content="Learning about coding and creating something useful for every developers and user"
                />
                {/* og: */}
                <meta
                    property="og:image"
                    content="https://www.eliaschen.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feliaschen.d614d9a1.jpg&w=640&q=75"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={headdata.url} />
                <meta property="og:title" content={headdata.title} />
                <meta property="og:description" content={headdata.description} />
                {/* twitter: */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={headdata.url} />
                <meta property="twitter:title" content={headdata.title} />
                <meta property="twitter:description" content={headdata.description} />
                <meta
                    property="twitter:image"
                    content="https://www.eliaschen.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feliaschen.d614d9a1.jpg&w=640&q=75"
                />
            </Head>
            <body className="dark:bg-[#111111] bg-[#f9fafb] dark:text-white duration-75">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
