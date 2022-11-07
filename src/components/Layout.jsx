import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Layout = ({children}) =>{
    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="wrapper-inner">
                <div className="layout">
                    <Header/>
                    <main className="main">{children}</main>
                </div>
            </div>
        </div>
    );
}

export default Layout;