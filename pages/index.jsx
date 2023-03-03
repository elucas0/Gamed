import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/utils.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SearchBar from '../components/searchBar';
import ShareButton from '../components/shareButton';
import ImageButtons from '../components/imageButtons';
import GuessButton from '../components/guessButton';

export default function Home() {
    const gamedNb = 16;
    const gameName = "Devil May Cry 5";
    // const [points, setPoints] = useState(0);
    const [currentImage, setImage] = useState(`/images/${gamedNb}/01.jpg`);
    const [currentGuess, setGuess] = useState(1);
    const [value, setValue] = useState('');
    const [gameState, setGameState] = useState("playing");
    const [buttons, addButton] = useState([{ number: 1 },]);
    const [stats, setStats] = useState({
        played: 0,
        won: 0,
    });
    const guessData = {
        gameName: gameName,
        gamedNb: gamedNb,
        buttons: buttons,
        value: value,
        currentGuess: currentGuess,
        stats: stats,
        setImage: setImage,
        setGameState: setGameState,
        addButton: addButton,
        setGuess: setGuess,
        setStats: setStats,
    };


    const setArrayLength = () => {
        for (let i = buttons.length; i < parseInt(localStorage.getItem("currentGuess")); i++) {
            addButton((buttons) => [...buttons, { number: i + 1 }]);
        }
    };

    useEffect(() => {
        // if (gameState == "won" && localStorage.getItem('played') == null) {
        //     const storedStats = JSON.parse(localStorage.getItem('stats'));
        //     storedStats.played += 1;
        //     localStorage.setItem('stats', JSON.stringify(storedStats));
        if (localStorage.getItem('gamedNb') != gamedNb) {
            ResetStorageAndState();
            // }
        }
    }, [gamedNb]);

    useEffect(() => {
        // if (localStorage.getItem('gamedNb') == null) {
        //     localStorage.setItem('points', 0);
        // }
        if (localStorage.getItem('played')) {
            const storedStats = JSON.parse(localStorage.getItem('stats'));
            // setStats(storedStats);
            console.log(stats);
        }
        localStorage.getItem('played') ? RestoreStorageAndState() : ResumeStorageAndState();
    }, []);

    const ResetStorageAndState = () => {
        setImage(`/images/${gamedNb}/01.jpg`);
        setGuess(1);
        localStorage.removeItem('results')
        localStorage.setItem('gamedNb', gamedNb);
        localStorage.setItem('currentImage', "1");
        localStorage.setItem("currentGuess", 1);
        localStorage.setItem("results", `Gamed #${gamedNb} \n🎮 ⬛ ⬛ ⬛ ⬛ ⬛ ⬛\n\nhttps://gamed-seven.vercel.app/`);
        localStorage.removeItem('played');
    }

    const RestoreStorageAndState = () => {
        setGameState(localStorage.getItem('gameState'));
        setImage(`/images/${gamedNb}/0${localStorage.getItem("currentImage")}.jpg`);
        console.log("Restore");
    }

    const ResumeStorageAndState = () => {
        setGameState("playing");
        setArrayLength();
        setGuess(parseInt(localStorage.getItem("currentGuess")));
        setImage(`/images/${gamedNb}/0${localStorage.getItem("currentImage")}.jpg`);
        localStorage.setItem("gamedNb", gamedNb);
        localStorage.setItem("gameState", gameState);
    }

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1 className="text-2xl text-center mb-6">Jour {gamedNb}</h1>
            <div className={styles.frame}>
                <Image
                    src={currentImage}
                    alt="Gamed Image"
                    height={540}
                    width={960}
                    priority={true}
                />
            </div>
            <div>
                <div className="flex justify-center mb-3 font-bold space-x-2">
                    <ImageButtons setImage={setImage} buttons={buttons} gamedNb={gamedNb} />
                </div>
                {gameState == 'lost' &&
                    <div className='flex justify-center mb-3'>
                        <h2 className='text-center text-lg'>Dommage, c'était {gameName}</h2>
                    </div>
                }
                {gameState == 'won' &&
                    <div className='flex justify-center mb-3'>
                        <h2 className='text-center text-lg'>GG tu as deviné {gameName}</h2>
                    </div>
                }
                {gameState != "playing"
                    ? <ShareButton buttons={buttons} addButton={addButton} stats={stats} setStats={setStats} currentGuess={currentGuess} />
                    : <>
                        <div className="mb-3">
                            <SearchBar setValue={setValue} value={value} />
                        </div>
                        <div className='flex justify-center items-center mb-3'>
                            <GuessButton {...guessData}></GuessButton>
                        </div>
                    </>
                }
            </div>
        </Layout>
    );
}

