import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layoutArchive";
import styles from "../../styles/utils.module.css";
import Image from "next/image";
import { useState } from "react";
import GuessButton from "components/guessButtonArchive";
import SearchBar from "components/searchBar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const gamesArchive = require("../../public/data/archive.json");

export default function ArchiveEntry() {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }
    const gamedNb = router.query.id;
    const [gameName, setGameName] = useState("");
    const [value, setValue] = useState("");
    const [gameState, setGameState] = useState("playing");
    const [image, setImage] = useState("/mock_image.jpg");
    const [buttons, addButton] = useState([{ number: 1 }]);
    const guessData = {
        gameName: gameName,
        gamedNb: gamedNb,
        buttons: buttons,
        value: value,
        setImage: setImage,
        setGameState: setGameState,
        addButton: addButton,
    };

    useEffect(() => {
        router.isReady
            ? setImage(`/images/${gamedNb}/01.jpg`) +
            setGameName(gamesArchive[gamedNb - 1].game_name)
            : null;
    }, [router.isReady]);

    const RenderAttempts = () => {
        if (buttons.length === 6) {
            return <h2 className="text-lg sm:text-xl">1 essai restant</h2>;
        }
        return (
            <h2 className="text-lg sm:text-xl">{7 - buttons.length} essais restants</h2>
        );
    };

    return (
        <Layout home>
            <Head>
                <title>{siteTitle + " " + gamedNb}</title>
            </Head>
            <div className="flex justify-center mb-6">
                <Link className="px-3 text-2xl bg-yellow text-black hover:shadow-[5px_5px_0_#6225E6] duration-500" href="/.">Jour {gamedNb}</Link>
            </div>
            <div className="mb-6">
                <div className={styles.image}>
                    <Image
                        src={image}
                        alt="Gamed Image"
                        height={720}
                        width={1280}
                        priority={true}
                        quality={100}
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-center mb-3 font-bold space-x-2">
                    {buttons.map((button) => {
                        return (
                            <div key={button.number}>
                                <button
                                    onClick={() => {
                                        setImage(
                                            `/images/${gamedNb}/0${button.number}.jpg`
                                        );
                                    }}
                                    className="bg-yellow px-3 py-1 sm:text-xl -skew-x-12 text-black focus:bg-purple focus:text-white"
                                >
                                    {button.number}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            {gameState == "lost" && (
                <div className="flex justify-center mb-3">
                    <h2 className="text-center text-lg">C'était {gameName}</h2>
                </div>
            )}
            {gameState == "won" && (
                <div className="flex justify-center mb-3">
                    <h2 className="text-center text-lg">GG, tu as trouvé {gameName}</h2>
                </div>
            )}
            {gameState == "playing" && (
                <>
                    <div className="mb-3">
                        <SearchBar setValue={setValue} value={value} />
                    </div>
                    <div className="flex justify-center mb-3">
                        <RenderAttempts />
                    </div>
                    <div className="flex justify-center items-center mb-3">
                        <GuessButton {...guessData} />
                    </div>
                </>
            )}
        </Layout>
    );
}
