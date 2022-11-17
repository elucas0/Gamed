import styles from "../styles/utils.module.css";
import copy from "copy-to-clipboard";
import { useState, useEffect } from "react";

export default function ShareButton({ results, buttons, addButton }) {
    const [copyText, setCopyText] = useState("");

    useEffect(() => {
        localStorage.setItem('played', true);
        for (let i = buttons.length; i < 6; i++) {
            addButton((buttons) => [...buttons, { id: i + 1, number: i + 1 }]);
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
