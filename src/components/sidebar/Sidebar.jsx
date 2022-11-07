import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'

import logo from '../../assets/image/logo.svg'

function Sidebar () {
    return (
        <aside className='sidebar'>
            <div className='sidebar-logo'>
                <a href="#">
                    <img className='sidebar-logo__item' src={logo} alt="Producter Logo" width="153" height="32" />
                </a>
            </div>
            <TopMenu/>
            <BottomMenu/>
        </aside>
    );
}

export default Sidebar;