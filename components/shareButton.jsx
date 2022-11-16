import styles from "../styles/utils.module.css";
import copy from "copy-to-clipboard";
import { useState, useEffect } from "react";

export default function ShareButton({ isWon, results, buttons, addButton }) {
    const [copyText, setCopyText] = useState("");

    useEffect(() => {       
        for (let i = buttons.length; i < 7; i++) {
            addButton((buttons) => [...buttons, { id: i, number: i }]);
        } 
        setCopyText(results);
    });

    const copyToClipboard = () => {
        copy(copyText);

        // let shareButton = (
        //     <a className={styles.cta} onClick={copyToClipboard}>
        //         <span className={styles.span}>COPIED</span>
        //     </a>
        // );
        // setTimeout(() => {
        //     shareButton = (
        //         <a className={styles.cta} onClick={copyToClipboard}>
        //             <span className={styles.span}>SHARE</span>
        //         </a>
        //     );
        // }, 2000);
        //return shareButton;
    };

    const renderButton = () => {

    }

    return (
        <div className="flex justify-center items-center">
            <a className={styles.cta} onClick={copyToClipboard}>
                <span className={styles.span}>SHARE</span>
            </a>
        </div>
    );
}
