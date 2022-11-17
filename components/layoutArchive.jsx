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
            <header className="mb-6 flex items-center justify-between sm:w-full">
                <div>
                    <div className="-skew-x-12 px-3 text-3xl bg-purple ">
                        <Link href="/">{name}</Link>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <Link href={"../archive"}>
                        <div className="p-2.5 bg-purple ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </Link>
                    <Link href={"../stats"}>
                        <div className="p-2.5 bg-purple ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            </svg>
                        </div>
                    </Link>
                    <Link href={"../about"}>
                        <div className="p-2.5 bg-purple ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </header>
            <main>{children}</main>
        </div>
    );
}
