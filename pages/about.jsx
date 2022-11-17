import Head from "next/head";
import Layout from "../components/layout";
import copy from "copy-to-clipboard";

const copyToClipboard = () => {
    copy("elouann#9933");
}

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Gamed - About</title>
            </Head>
            <h1 className="text-3xl text-center mb-6">
                About
            </h1>
            <div className="flex flex-col gap-5">
                <p>A daily guessing game made for casual and frequent gamers, mainly inspired by <a className="text-yellow" href="https://framed.wtf/">Framed </a>
                    and the concept introduced by <a className="text-yellow" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>.
                </p>
                <p>All rights go to the rightful owners - no copyright infringement intended.</p>
                <div className="flex gap-5 align-middle">
                    <p>Contact me on Discord : elouann#9933</p>
                    <button className='bg-purple p-1' onClick={copyToClipboard}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                        </svg>
                    </button>
                </div>
                <p>Source code available on <a className="text-yellow" href="https://github.com/PandAmiral/Gamed">GitHub</a>.</p>

            </div>
        </Layout>
    );
}
