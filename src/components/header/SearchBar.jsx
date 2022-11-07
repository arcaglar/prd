import button1 from '../../assets/image/searchbar_btn-1.svg'
import button2 from '../../assets/image/searchbar_btn-2.svg'

function SearchBar() {
    return (
        <div className='searchbar'>
            <div className='searchbar-input'>
                <input className='searchbar-input__item' placeholder='Search' />
            </div>
            <div className='searchbar-button'>
                <img src={button1} />
            </div>
            <div className='searchbar-button'>
                <img src={button2} />
            </div>
        </div>
    );
}

export default SearchBar;