export default function ImageButtons( {setImage, buttons, mainGameName} ) {
    const gameName = mainGameName;
    
    return (
        <div className='flex justify-center mb-6 text-black font-bold space-x-3'>
            {buttons.map((button) => <button onClick={() => setImage("/images/" + gameName + "/0" + (button.number) + ".jpg")} className="bg-yellow px-3 py-1 sm:text-2xl -skew-x-12">{button.number}</button>)}
        </div>
    );
}