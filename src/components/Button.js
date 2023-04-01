import { AiFillSetting } from 'react-icons/ai'
import { RiDashboardLine } from 'react-icons/ri'
import { FcAbout } from 'react-icons/fc'
import { FaMoneyBillAlt } from 'react-icons/fa'
import '../styles/Button.css'

function Button(props) {

    const { value, setMenu } = props;

    const getIcon = (value) => {
        switch (value) {
            case 'about':
                return <FcAbout className='icon' onClick={() => setMenu('about')} />
            case 'dash':
                return <FaMoneyBillAlt className='icon' onClick={() => setMenu('dash')} />
            case 'settings':
                return <AiFillSetting className='icon' onClick={() => setMenu('settings')} />
            case 'entry':
                return <RiDashboardLine className='icon' onClick={() => setMenu('entry')} />
            default:
                break;
        }
    }

    return (
        <button type="button" className="Button" value={value}>
            {getIcon(value)}
        </button>
    )
}

export default Button