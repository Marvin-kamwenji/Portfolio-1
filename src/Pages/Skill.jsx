import ProgressBar from "../components/ProgressBar";
import NavArea from "./NavArea";

import '../css/Skills.css';

function Skill(){
return (
    <div className="container-fluid ">
        <div className="row">
            <NavArea />
            <div className="col-8">
             <h3 className="skill-heading">Skill</h3>
             <ul className="all-lists">
                <li className="skill-list">
                <h3 className="skill-languages">Java, Spring boot and JMIX</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>


                <li className="skill-list">
                <h3 className="skill-languages">Javascript, HTML and CSS</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>


                <li className="skill-list">
                <h3 className="skill-languages">Reactjs</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>

                <li className="skill-list">
                <h3 className="skill-languages">Ant design, Tailwind CSS and Bootstrap</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>

                <li className="skill-list">
                <h3 className="skill-languages">Manual Testing</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>

                <li className="skill-list">
                <h3 className="skill-languages">Cypress and Selenium</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>

                <li className="skill-list">
                <h3 className="skill-languages">GIT and SQL</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>

 

                <li className="skill-list">
                <h3 className="skill-languages">Docker, Kubernetes and Jenkins</h3>
                <ProgressBar bgcolor="#FB470F" progress='30'  height={20} />
                </li>
             </ul>
            
            </div>
        </div>                         

    </div>
);
}

export default Skill;