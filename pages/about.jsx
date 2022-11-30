import Head from "next/head";
import Layout from "../components/layout";
import copy from "copy-to-clipboard";
import { useState } from "react";
import styles from "../styles/utils.module.css";

export default function FirstPost() {
    const [isActive, setIsActive] = useState();

    const copyToClipboard = () => {
        copy("elouann#9933");
        setIsActive(current => !current);
        setTimeout(() => {
            setIsActive(current => !current);
        }, 2000);
    }

    return (
        <Layout>
            <div className="fixed top-0 w-full left-0 right-0 text-center bg-purple overflow-hidden">
                <div className={isActive ? styles.active : styles.hidden}>Copied to clipboard : elouann#9933 </div>
            </div>
            <Head>
                <title>Gamed - About</title>
            </Head>
            <h1 className="text-3xl text-center mb-6">
                About
            </h1>
            <div className="flex flex-col gap-5">
                {/* <p>A daily guessing game made for casual and frequent gamers, mainly inspired by <a className="text-yellow" href="https://framed.wtf/">Framed </a>
                    and the concept introduced by <a className="text-yellow" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>.
                </p> */}
                <p>Gamed est un jeux de devinette actualisé quotidiennement et destiné aux joueurs occasionnels et fréquents. Le principe est inspiré de
                    <a className="text-yellow" href="https://framed.wtf/">Framed </a>et du concept introduit par
                    <a className="text-yellow" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>.
                </p>
                {/* <p>All rights go to the rightful owners - no copyright infringement intended.</p> */}
                <p>Tous droits réservés aux propriétaires légitimes - aucun droit d'auteur n'est intentionnellement enfreint.</p>
                {/* <p>Contact me on Discord : elouann#9933</p> */}
                <p>Contactez moi via Discord :
                    <a className="cursor-pointer text-yellow" onClick={copyToClipboard}> elouann#9933</a>
                </p>
                <p>Ou sur Twitter :
                    <a className="text-yellow" href="https://twitter.com/LucasElouann" target="_blank"> @LucasElouann</a>
                </p>

                {/* <p>Source code available on <a className="text-yellow" href="https://github.com/PandAmiral/Gamed">GitHub</a>.</p> */}
                <p>Code source disponible sur <a className="text-yellow" href="https://github.com/PandAmiral/Gamed">GitHub</a></p>
            </div>
        </Layout>
    );
}
