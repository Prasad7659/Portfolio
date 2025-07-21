import Navbar from "./Navbar";
import Title from "./Title";

export default function Header(){
    return (
        <div className="header" style={{display: "flex", flexWrap: "wrap", /*border:"1px solid #45A29E"*/ margin:"5px"}}>
            <Title/>
            <Navbar/>
        </div>
    );
}