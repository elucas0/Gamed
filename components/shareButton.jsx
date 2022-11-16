import styles from "../styles/utils.module.css";
import copy from "copy-to-clipboard";
import { useState, useEffect } from "react";

export default function ShareButton({ isWon, gamedNb, buttons }) {
    const [copyText, setCopyText] = useState("");

    useEffect(() => {
        let shareText = gamedNb + "\n🎮⬛ ⬛ ⬛ ⬛ ⬛ ⬛";
        // fill the shareText with red or green squares depending on the buttons array
        if (isWon) {
            for (let i = 0; i < buttons.length - 1; i++) {
                if (buttons[i].number === buttons.length - 1) {
                    shareText = shareText.replace("⬛", "🟨");
                } else {
                    shareText = shareText.replace("⬛", "🟪");
                }
            }
        } else {
            shareText = gamedNb + "\n🎮🟪 🟪 🟪 🟪 🟪 🟪";
        }
        setCopyText(shareText);
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
