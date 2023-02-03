import '../css/Mainpage.css';
import profile from '../assets/profile.jpeg'
function Mainpage (){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 navArea">
                    <div className="topNav">
                     <img src={profile} className=" profileImage img-fluid" alt="profile"/>
                      <h3 className="profileName">Marvin Kamwenji Murage</h3>
                      <hr />
                    </div>
                    <div className="bottomNav">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skill">Skill</a></li>
                            <li><a href="#design">Design</a></li>
                            <li><a href="#preview">Preview</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-8 content_area">
                    <h1>World</h1>
                </div>
            </div>

        </div>
    )

}

export default Mainpage;