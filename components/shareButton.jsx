import styles from '../styles/utils.module.css';
import copy from "copy-to-clipboard"
import { useState } from 'react';

export default function ShareButton ( {buttons}) {
    const [copyText, setCopyText] = useState('');

    const handleCopy = () => {
        //const text = buttons.map((button) => button.number).join('');
        const text = buttons.map((button) => { return '🟥' });
        setCopyText(text);
        
    }

    const copyToClipboard = () => {
        handleCopy();
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }

    return (
        <div className='flex justify-center items-center'>
            <a className={styles.cta} onClick={copyToClipboard}>    
                <span className={styles.span}>SHARE</span>
            </a>
        </div>
    )

}