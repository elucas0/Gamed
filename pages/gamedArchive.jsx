import Head from 'next/head';
import Layout, { siteTitle } from '../components/layoutArchive';
import styles from '../styles/utils.module.css';
import Image from 'next/image';
import { useState } from 'react';
import GuessButton from 'components/guessButtonArchive';
import SearchBar from 'components/searchBar';
import ImageButtons from 'components/imageButtons';
import { useLocation } from "react-router-dom";

export default function ArchiveEntry() {
    const location = useLocation();
    const gamedNb = location.state;
    const [gameName, setGame] = useState(gameList[gamedNb - 1].game_name);
    const [value, setValue] = useState('');
    const [gameState, setGameState] = useState("playing");
    const [image, setImage] = useState(`/images/${gamedNb}/01.jpg`);
    const [buttons, addButton] = useState(
        [
            { number: 1 },
        ]);
    const guessData = {
        gameName: gameName,
        gamedNb: gamedNb,
        buttons: buttons,
        value: value,
        setImage: setImage,
        setGameState: setGameState,
        addButton: addButton,
    };

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
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-center mb-6 font-bold space-x-3">
                    <ImageButtons setImage={setImage} buttons={buttons} gamedNb={gamedNb} />
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
};