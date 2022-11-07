import SearchBar from './SearchBar';
import ActionBar from './ActionBar';

function Header () {
    return (
        <div className='header-wrapper'>
            <header className='header'>
                <SearchBar/>
                <ActionBar/>
            </header>
        </div>
    );
}

export default Header;