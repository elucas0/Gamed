import ImageSelectButton from "./imageSelectButton";

export default function ImageButtons({ setImage, buttons, gamedNb }) {
    buttons = buttons.map((button) => {
        return (
            <div className="" key={button.id}>
                <ImageSelectButton buttonNb={button.number} setImage={setImage} gamedNb={gamedNb} />
            </div >
        );
    });
    return <>{buttons}</>
}
