import Profile from "../src/assets/profile.jpg";
export default function Image(){
    let styles = {width: "310px", height: "515px", margin:"50px 120px", borderRadius:"24px"}
    return (
        <img src= {Profile} alt="Profile" style={styles}/>
    );
}