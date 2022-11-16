import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/utils.module.css';
import Image from 'next/image';
import { useState } from 'react';
import GuessButton from '../components/guessButton';
import SearchBar from '../components/searchBar';
import ShareButton from '../components/shareButton';
import ImageButtons from '../components/imageButtons';

export default function Home() {
    const [gamedNb, setGamedNb] = useState("Gamed #2");
    const [gameName, setGame] = useState("Horizon Zero Dawn");
    const [value, setValue] = useState('');
    const [isWon, setWon] = useState(false);
    const [isEnd, setEnd] = useState(false);
    const [image, setImage] = useState("/images/" + gameName + "/01.jpg");
    const [buttons, addButton] = useState(
        [
            { id: 1, number: 1 },
        ]);

    const changeGame = () => {
        if (new Date().getHours() === 0) {
            setGame("For Honor");
        }
    }

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
                {!isWon && isEnd &&
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl'>Better luck tomorrow, it was {gameName}</h2>
                    </div>
                }
                {isWon &&
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl'>GG, you have found {gameName}</h2>
                    </div>
                }
                {isEnd
                    ? <ShareButton isWon={isWon} gamedNb={gamedNb} buttons={buttons} addButton={addButton} />
                    : <>
                        <div className="mb-6">
                            <SearchBar setValue={setValue} value={value} />
                        </div>
                        <div className='flex justify-center mb-6'>
                            <RenderAttempts />
                        </div>
                        <div className='flex justify-center items-center mb-6'>
                            <GuessButton buttons={buttons} addButton={addButton} isEnd={isEnd} setEnd={setEnd} setWon={setWon} value={value} gameName={gameName} setImage={setImage} />
                        </div>
                    </>
                }
            </div>
        </Layout>
    );
}

