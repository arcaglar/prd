import back from '../assets/image/arrow-left.svg'
import calendar from '../assets/image/calendar.svg'
import icons1 from '../assets/image/Icons-1.svg'
import icons from '../assets/image/Icons.svg'
import people from '../assets/image/people.svg'
import tabColumn from '../assets/image/breadcrumb-colored.svg'
import tabRow from '../assets/image/breadcrumb-gray.svg'

function Breadcrumb() {
    return (
        <div className='breadcrumb-wrapper'>
            <div className='breadcrumb'>
                <div className='breadcrumb__item breadcrumb__item--bordered'>
                    <img src={back} />
                </div>
                <div className='breadcrumb__item breadcrumb__item--bordered'>
                    <img src={icons}/>
                    <span className='breadcrumb-text'>SPR-06</span>
                </div>
                <div className='breadcrumb__item breadcrumb__item--bordered'>
                    <img src={icons1}/>
                    <span className='breadcrumb-text'>TEAM-10</span>
                </div>
                <div className='breadcrumb__item'>
                    <span className='breadcrumb-text breadcrumb-text--bold'>New Sprint Name</span>
                </div>
                <div className='breadcrumb__item'>
                    <img src={calendar}/>
                </div>
                <div className='breadcrumb__item'>
                    <img src={people}/>
                </div>
                <div className='breadcrumb__item'>
                    <div className='breadcrumb-button'>Complete Sprint</div>
                </div>
            </div>
            <div className='breadcrumb breadcrumb--bordered'>
                <div className='breadcrumb__item'>
                    <img src={tabRow}/>
                </div>
                <div className='breadcrumb__item'>
                    <img src={tabColumn}/>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;