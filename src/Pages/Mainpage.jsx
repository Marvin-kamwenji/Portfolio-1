import '../css/Mainpage.css';
import NavArea from './NavArea';

function Mainpage (){
    return (
        <div className="container-fluid">
            <div className="row">
                <NavArea />
                <div className="col-8 content_area">
                    <div className="content-page">
                      <p>I am a highly motivated and passionate individual with skills 
                        and expertise in software development and Quality Assurance. 
                         </p>

                        <p>I care deeply about building high quality softwares and I'm 
                        excited to put my creativity and skills to work to actively 
                        contribute towards creating innovative solutions.</p>


                    </div>
                    <div className="content-buttons">
                            <button className='content_hire_me_button'>Hire me</button>
                            <button className="contact_me_button">Contact me</button>
                        </div>
                </div>
            </div>

        </div>
    )

}

export default Mainpage;