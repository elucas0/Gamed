import styles from "../styles/utils.module.css";
import copy from "copy-to-clipboard";
import { useState, useEffect } from "react";

export default function ShareButton({ buttons, addButton }) {
    const [copyText, setCopyText] = useState();
    const [isActive, setIsActive] = useState();
    const [notifyText, setNotifyText] = useState();

    useEffect(() => {
        localStorage.setItem('played', true);
        localStorage.setItem('currentImage', localStorage.getItem('currentImage'));
        for (let i = buttons.length; i < 6; i++) {
            addButton((buttons) => [...buttons, { id: i + 1, number: i + 1 }]);
        }
        setCopyText(localStorage.getItem('results'));
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
            <div className="fixed top-0 w-full left-0 right-0 text-center bg-purple overflow-hidden">
                <div className={isActive ? styles.active : styles.hidden}>Copied to clipboard : {notifyText} </div>
            </div>
            <div className="flex justify-center items-center">
                <a className={styles.cta} onClick={copyToClipboard}>
                    <span className={styles.span}>SHARE</span>
                </a>
            </div>
        </>
    );
}
