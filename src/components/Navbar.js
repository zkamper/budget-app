import Button from './Button';
import './Navbar.css'

function Navbar(props){
    const {setMenu}=props
    return (
        <div className = "Navbar">
            <div className = "Navbar1">
                <Button name = "Dashboard" value = 'dash' setMenu={setMenu} />
                <Button name = "Add Entry" value = 'entry' setMenu={setMenu} />
                <Button name = "Settings" value = 'settings' setMenu={setMenu} />
            </div>
            <div className = "Navbar1">
            <Button name = "About" value = 'about' setMenu={setMenu} />
            </div>
        </div>
    );
}

export default Navbar