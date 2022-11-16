export default function ImageButtons({ setImage, buttons, mainGameName }) {
    const gameName = mainGameName;

    buttons = buttons.map((button) => {
        return (
            <div className="" key={button.id}>
                <button
                    onClick={() =>
                        setImage(
                            "/images/" +
                            gameName +
                            "/0" +
                            button.number +
                            ".jpg"
                        )
                    }
                    className="bg-yellow px-3 py-1 sm:text-2xl -skew-x-12 text-black focus:bg-purple focus:text-white"
                >
                    {button.number}
                </button>
            </div>
        );
    });
    return <>{buttons}</>
}
