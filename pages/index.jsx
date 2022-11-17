import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/utils.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GuessButton from '../components/guessButton';
import SearchBar from '../components/searchBar';
import ShareButton from '../components/shareButton';
import ImageButtons from '../components/imageButtons';

export default function Home() {
    const [gamedNb, setGamedNb] = useState(3);
    const [gameName, setGame] = useState("Control");
    const [value, setValue] = useState('');
    const [gameState, setGameState] = useState("playing");
    const [results, setResults] = useState("Gamed #" + gamedNb + "\n🎮 ⬛ ⬛ ⬛ ⬛ ⬛ ⬛\n\nhttps://gamed-seven.vercel.app/ ");
    const [image, setImage] = useState("/images/" + gameName + "/01.jpg");
    const [buttons, addButton] = useState(
        [
            { id: 1, number: 1 },
        ]);

    useEffect(() => {
        if (localStorage.getItem('gamedNb') != gamedNb) {
            localStorage.removeItem('played');
            localStorage.removeItem('gamedNb');
        }
        if (localStorage.getItem('played')) {
            setGameState(localStorage.getItem('gameState'));
        } else {
            setGameState("playing");
            localStorage.setItem("gameState", gameState);
        }
        
    });

    // const changeGame = () => {
    //     if (new Date().getHours() === 0) {
    //         setGame("For Honor");
    //     }
    // }

    const RenderAttempts = () => {
        if (buttons.length === 6) {
            return (<h2 className='text-xl'>1 attempt remaining</h2>);
        }
        return (<h2 className='text-xl'>{7 - buttons.length} attempts remaining</h2>);
    }

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
                <div className={styles.image}>
                    <Image className='mb-6'
                        priority
                        src={image}
                        height={720}
                        width={1280}
                        alt=""
                        quality={100}
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-center mb-6 font-bold space-x-3">
                    <ImageButtons setImage={setImage} buttons={buttons} mainGameName={gameName} />
                </div>
                {gameState == 'lost' &&
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl'>Better luck tomorrow, it was {gameName}</h2>
                    </div>
                }
                {gameState == 'won' &&
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl'>GG, you have found {gameName}</h2>
                    </div>
                }
                {gameState != "playing"
                    ? <ShareButton gamedNb={gamedNb} results={results} buttons={buttons} addButton={addButton} />
                    : <>
                        <div className="mb-6">
                            <SearchBar setValue={setValue} value={value} />
                        </div>
                        <div className='flex justify-center mb-6'>
                            <RenderAttempts />
                        </div>
                        <div className='flex justify-center items-center mb-6'>
                            <GuessButton gameState={gameState} setGameState={setGameState} setResults={setResults} results={results} buttons={buttons} addButton={addButton} value={value} gameName={gameName} setImage={setImage} />
                        </div>
                    </>
                }
            </div>
        </Layout>
    );
}

