import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import styles from '../styles/utils.module.css';
import Image from 'next/image';
import { useState } from 'react';
import GuessButton from '../components/guessButton';
import SearchBar from '../components/searchBar';
import ShareButton from '../components/shareButton';
import ImageButtons from '../components/imageButtons';

export default function Home() {
    const gameName = ("Death Stranding");
    const [value, setValue] = useState('');
    const [isWon, setWon] = useState(false);
    const [isEnd, setEnd] = useState(false);
    const [copyText, setCopyText] = useState('');
    const [image, setImage] = useState("/images/" + gameName + "/01.jpg");
    const [buttons, addButton] = useState(
        [
        {id: 1, number:1},
    ]);

    const RenderAttempts = () => {
        if(buttons.length === 5) {
            return (<h2 className='font-poppins text-white text-xl'>1 attempt remaining</h2>);
        }
        return (<h2 className='font-poppins text-white text-xl'>{7 - buttons.length} attempts remaining</h2>);
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
                <ImageButtons setImage={setImage} buttons={buttons} mainGameName={gameName} />
                {!isEnd && <>
                    <SearchBar setValue={setValue} value={value}/>
                    <GuessButton buttons={buttons} addButton={addButton} isEnd={isEnd} setEnd={setEnd} setWon={setWon} value={value} gameName={gameName} setImage={setImage}/>
                    <div className='flex justify-center mb-6'>
                    <RenderAttempts/>
                    </div>
                </>
                }
                {isWon &&
                    <div className='flex justify-center mb-6'>
                    <h2 className='font-poppins text-white text-xl'>GG, you have found {gameName}</h2>
                    </div>
                }
                {!isWon && isEnd &&
                    <div className='flex justify-center mb-6'>
                    <h2 className='font-poppins text-white text-xl'>Better luck tomorrow, it was {gameName}</h2>
                    </div>
                }
                {isEnd &&
                    <ShareButton setCopyText={setCopyText} copyText={copyText}/>
                }
            </div>
        </Layout>
    );
}

