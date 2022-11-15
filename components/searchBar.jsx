var gameList = require('../public/data/mydata.json');

export default function SearchBar ( {setValue, value} ) {

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    }

    return (
        <div className='mb-6'>
            <div className='relative'>
                <ul className='absolute left-20 w-9/12 overflow-y-auto bottom-full max-h-36 bg-black text-white border-solid border-2 border-purple empty:border-none '>
                    {gameList.filter(item => {
                        const searchTerm = value.toLowerCase();
                        const gameName = item.game_name.toLowerCase();
                                    
                        return searchTerm && gameName.match(searchTerm) && gameName !== searchTerm;
                    })
                    .map((item) => (
                        <li 
                            onClick={() => onSearch(item.game_name)}
                            className='cursor-pointer text-start p-2 hover:bg-purple font-poppinslight transition ease-in-out hover:font-bold'
                            key={item.game_name}
                            >{item.game_name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center">
                <input type="text" value={value} onChange={onChange} placeholder="Search for game or skip"
                        className='border-solid border-4 border-yellow p-2 m-1 font-poppinslight w-9/12 transition ease-in-out focus:border-purple focus:outline-none focus:-skew-x-12'/>
            </div>
        </div>
    )

}