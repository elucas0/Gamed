import styles from "../styles/utils.module.css";
import copy from "copy-to-clipboard";
import { useState, useEffect } from "react";

export default function ShareButton({ buttons, addButton, stats, setStats }) {
    const [copyText, setCopyText] = useState();
    const [isActive, setIsActive] = useState();
    const [notifyText, setNotifyText] = useState();

    useEffect(() => {
        localStorage.setItem('played', true);
        localStorage.setItem('currentImage', localStorage.getItem('currentImage'));
        for (let i = buttons.length; i < 6; i++) {
            addButton((buttons) => [...buttons, { number: i + 1 }]);
        }
        setCopyText(localStorage.getItem('results'));
        // setStats({
        //     played: parseInt(localStorage.getItem('played')),
        //     won: parseInt(localStorage.getItem('won')),
        //     avgGuess: parseInt(localStorage.getItem('avgGuess')),
        // });
    });

    const copyToClipboard = () => {
        copy(copyText);
        setNotifyText(copyText.slice(0, -31));
        setIsActive(current => !current);
        setTimeout(() => {
            setIsActive(current => !current);
        }, 2000);
    };

    return (
        <>
            <div className="text-sm sm:text-lg fixed top-0 w-full left-0 right-0 text-center bg-purple overflow-hidden">
                <div className={isActive ? styles.active : styles.hidden}>Copié dans le presse-papier : {notifyText} </div>
            </div>
            <div className="flex justify-center items-center">
                <a className={styles.cta} onClick={copyToClipboard}>
                    <span className={styles.span}>PARTAGER</span>
                </a>
            </div>
        </>
    );
}
