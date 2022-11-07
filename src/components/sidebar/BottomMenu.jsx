import chatAlt from '../../assets/image/chatAlt.svg'
import bell from '../../assets/image/bell.svg'
import plus from '../../assets/image/plus.svg'
import avatar from '../../assets/image/avatar.png'

function BottomMenu() {
    return (
        <div className='sidebar-menu-wrapper sidebar-menu-wrapper--bottom'>
            <ul className='sidebar-menu'>
                <li className='sidebar-menu__item'>
                    <img className='sidebar-menu__item-icon' src={plus} width="16" height="16" />
                    Invite People
                </li>
                <li className='sidebar-menu__item'>
                    <img className='sidebar-menu__item-icon' src={chatAlt} width="16" height="16" />
                    Help & Community
                </li>
                <li className='sidebar-menu__item'>
                    <img className='sidebar-menu__item-icon' src={bell} width="16" height="16" />
                    Notifications
                </li>
                <li className='sidebar-menu__item sidebar-menu__item--space'>
                    <span className='avatar'>
                        <img src={avatar} width="24" height="24" />
                    </span>
                    Ahmet Çağlar
                </li>
                <li className='sidebar-menu__item sidebar-menu__item--space'>
                    <span className='avatar avatar--colored'>L</span>
                    limely
                </li>
            </ul>
        </div>
    );
}

export default BottomMenu;