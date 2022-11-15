import styles from '../styles/utils.module.css';
import copy from "copy-to-clipboard"

export default function ShareButton ( {setCopyText, copyText}) {
    
    const handleCopyText = () => {
        setCopyText("Test");
    }

    const copyToClipboard = () => {
        setCopyText("Test");
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