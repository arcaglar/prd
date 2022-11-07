import plus from '../../assets/image/plus_blue.svg'
import { useDispatch } from 'react-redux'
import { setSidepanelVisibility } from '../../store/globalSlice'

function ActionBar() {
    const dispatch = useDispatch()

    return (
        <div className='actionbar'>
            <div className='actionbar-button' onClick={() => dispatch(setSidepanelVisibility(true))}>
                <img src={plus} />
            </div>
        </div>
    );
}

export default ActionBar;