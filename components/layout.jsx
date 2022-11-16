import Head from "next/head";
import Link from "next/link";

const name = "Gamed";
export const siteTitle = "Gamed - Daily videogame guessing game";

export default function Layout({ children, home }) {
    return (
        <div className="m-auto-center p-3 max-w-2xl">
            <Head>
                <link rel="icon" href="/gamedicon.ico" />
                <meta
                    name="description"
                    content="Guess the game from 6 screenshots and share with your results with your friends. Come back every day for a new game to guess !"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className="mb-6 flex flex-wrap items-center justify-between sm:w-full">
                <div className="-skew-x-12 px-3 text-3xl bg-purple font-poppins text-white ">
                    <Link href="/">{name}</Link>
                </div>
                <div className="px-3 text-2xl bg-purple font-poppins text-white ">
                    <Link href={"archive"}>Archive</Link>
                </div>
            </header>
            <main>{children}</main>
        </div>
    );
}
