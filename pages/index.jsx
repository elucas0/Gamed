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
    const gamedNb = 34;
    const gameName = "The Last Guardian";
    const [currentImage, setImage] = useState(`/images/${gamedNb}/01.jpg`);
    const [currentGuess, setGuess] = useState(1);
    const [value, setValue] = useState('');
    const [gameState, setGameState] = useState("playing");
    const [buttons, addButton] = useState([{ number: 1 },]);
    const guessData = {
        gameName: gameName,
        gamedNb: gamedNb,
        buttons: buttons,
        value: value,
        currentGuess: currentGuess,
        setImage: setImage,
        setGameState: setGameState,
        addButton: addButton,
        setGuess: setGuess,
    };
    // const [stats, setStats] = useState({
    //     played: 0,
    //     won: 0,
    //     avgGuess: 0,
    // });

    const setArrayLength = () => {
        for (let i = buttons.length; i < parseInt(localStorage.getItem("currentGuess")); i++) {
            addButton((buttons) => [...buttons, { number: i + 1 }]);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('gamedNb') != gamedNb) {
            ResetStorageAndState();
        }
        if (localStorage.getItem('played')) {
            RestoreStorageAndState();
        } else {
            ResumeStorageAndState();
        }
    });

    const ResetStorageAndState = () => {
        setImage(`/images/${gamedNb}/01.jpg`);
        setGuess(1);
        localStorage.removeItem('played');
        localStorage.removeItem('results')
        localStorage.setItem('gamedNb', gamedNb);
        localStorage.setItem('currentImage', "1");
        localStorage.setItem("currentGuess", 1);
        localStorage.setItem("results", `Gamed #${gamedNb} \n🎮 ⬛ ⬛ ⬛ ⬛ ⬛ ⬛\n\nhttps://gamed-seven.vercel.app/`);
    }

    const RestoreStorageAndState = () => {
        setGameState(localStorage.getItem('gameState'));
        setImage(`/images/${gamedNb}/0${localStorage.getItem("currentImage")}.jpg`);
    }

    const ResumeStorageAndState = () => {
        setGameState("playing");
        setArrayLength();
        setGuess(parseInt(localStorage.getItem("currentGuess")));
        setImage(`/images/${gamedNb}/0${localStorage.getItem("currentImage")}.jpg`);
        localStorage.setItem("gamedNb", gamedNb);
        localStorage.setItem("gameState", gameState);
    }

    const RenderAttempts = () => {
        if (currentGuess === 6) {
            return (<h2 className='text-lg sm:text-xl'>1 essai restant</h2>);
        }
        return (<h2 className='text-lg sm:text-xl'>{7 - buttons.length} essais restants</h2>);
    }
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className='mb-6'>
                <div className={styles.image}>
                    <Image
                        src={currentImage}
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
                    ? <ShareButton buttons={buttons} addButton={addButton} />
                    : <>
                        <div className="mb-3">
                            <SearchBar setValue={setValue} value={value} />
                        </div>
                        <div className='flex justify-center mb-3'>
                            <RenderAttempts />
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

