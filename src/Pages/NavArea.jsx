import '../css/Mainpage.css';
import profile from '../assets/profile.jpeg';
import { Link } from 'react-router-dom';

function NavArea() {
    return (
        <div className="col-4 navArea">
        <div className="topNav">
         <img src={profile} className=" profileImage img-fluid" alt="profile"/>
          <h3 className="profileName">Marvin Kamwenji Murage</h3>
          <hr />
        </div>
        <div className="bottomNav">
            <ul className='lists'>
                <li className="linkLists" >
                    <Link to="/about">About</Link>
                </li>
                <li className="linkLists" >
                    <Link to="/skill">Skill</Link>
                </li>
                <li className="linkLists" ><a href="#design">Design</a></li>
                <li className="linkLists" ><a href="#preview">Preview</a></li>
                <li className="linkLists" ><a href="#contact">Contact</a></li>
            </ul>
            <div className="button-div">
                <button className="hire_me_button">Hire me</button>
            </div>
        </div>
    </div>
    );
}

export default NavArea;