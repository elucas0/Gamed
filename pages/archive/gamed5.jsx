import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layoutArchive';
import styles from '../../styles/utils.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GuessButton from '../../components/guessButtonArchive';
import SearchBar from '../../components/searchBar';
import ImageButtons from '../../components/imageButtons';

export default function Home() {
    const gamedNb = 5;
    const [gameName, setGame] = useState("Red Dead Redemption 2");
    const [value, setValue] = useState('');
    const [gameState, setGameState] = useState("playing");
    const [image, setImage] = useState("/images/" + gamedNb + "/01.jpg");
    const [buttons, addButton] = useState(
        [
            { id: 1, number: 1 },
        ]);

    useEffect(() => {
        // if (localStorage.getItem('played')) {
        //     localStorage.setItem('gameState', gameState);
        // } else {
        //     localStorage.setItem('played', true);
        //     setGameState("playing");
        // }
    });

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
                        <h2 className='text-xl'>It was {gameName}</h2>
                    </div>
                }
                {gameState == 'won' &&
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl'>GG, you have found {gameName}</h2>
                    </div>
                }
                {gameState == 'playing' &&
                    <>
                        <div className="mb-6">
                            <SearchBar setValue={setValue} value={value} />
                        </div>
                        <div className='flex justify-center mb-6'>
                            <RenderAttempts />
                        </div>
                        <div className='flex justify-center items-center mb-6'>
                            <GuessButton gamedNb={gamedNb} setGameState={setGameState} buttons={buttons} addButton={addButton} value={value} gameName={gameName} setImage={setImage} />
                        </div>
                    </>
                }
            </div>
        </Layout>
    );
}

