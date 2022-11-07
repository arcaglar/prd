import chat from '../../assets/image/chat.svg'
import dashboard from '../../assets/image/dashboard.svg'
import explore from '../../assets/image/explore.svg'
import home from '../../assets/image/home.svg'
import repeat from '../../assets/image/repeat.svg'

function TopMenu() {
    return (
        <div className='sidebar-menu-wrapper'>
            <ul className='sidebar-menu'>
                <li className='sidebar-menu__item'>
                    <img className='sidebar-menu__item-icon' src={home} width="16" height="16" />
                    Dashboard
                </li>
                <li className='sidebar-menu__item'>
                    <img className='sidebar-menu__item-icon' src={chat} width="16" height="16" />
                    Feedback
                </li>
                <li className='sidebar-menu__item sidebar-menu__item--active'>
                    <img className='sidebar-menu__item-icon' src={dashboard} width="16" height="16" />
                    Task
                </li>
                <li className='sidebar-menu__item'>
                    <img className='sidebar-menu__item-icon' src={explore} width="16" height="16" />
                    Roadmap
                </li>
                <li className='sidebar-menu__item'>
                    <img className='sidebar-menu__item-icon' src={repeat} width="16" height="16" />
                    Changelog
                </li>
            </ul>
        </div>
    );
}

export default TopMenu;