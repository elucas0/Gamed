import Head from 'next/head';
import Link from 'next/link';

const name = 'Gamed';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className="m-auto-center p-3 max-w-2xl">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className='mb-2 flex flex-wrap items-center justify-between sm:w-full'>
                <div className="-skew-x-12 px-3 text-3xl bg-purple font-poppins text-white ">
                    <Link href="/">
                        {name}
                    </Link>
                </div>
                <div className="px-3 text-2xl bg-purple font-poppins text-white ">
                    <Link href={'posts/first-post'}>
                        About
                    </Link>
                </div>
            </header>
            <main>{children}</main>
        </div>
    );
}