import Buttons from "./Buttons.jsx";

export default function Navbar(){
    let Styles = {display:"flex", flexWrap:"wrap"}
    return(
        <div className="navbar" style={Styles}>
            <Buttons name = "Home"/>
            <Buttons name = "About"/>
            <Buttons name = "Skills"/>
            <Buttons name = "Projects"/>
            <Buttons name = "Contact"/>
        </div>
    );
}