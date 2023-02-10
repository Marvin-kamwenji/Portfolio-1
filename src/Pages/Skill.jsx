import ProgressBar from "../components/ProgressBar";
import NavArea from "./NavArea";

function Skill(){
return (
    <div className="container-fluid">
        <div className="row">
            <NavArea />
            <div className="col-8">
            <div>
            <ProgressBar bgcolor="orange" progress='30'  height={20} />
            </div>
            </div>
        </div>                         

    </div>
);
}

export default Skill;