import Head from "next/head";
import { Inter } from 'next/font/google';
import { CSSReset } from "../src/CSSReset";

// import IconTab from "../public/assets/icon-logo.svg"

const inter = Inter({
    subsets: ['latin'],
    weight: ['400',"500", '700']
})

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Componente de upload - Bora Codar 14 </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <link rel="shortcut icon" href="/assets/logo.svg" type="image/x-icon"/> */}
        </Head>
            <main className={inter.className}>
                <CSSReset/>
                <Component {...pageProps} />
            </main>
        </>
    )
}
