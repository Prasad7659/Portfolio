export default function Buttons({name}){
    let styles = {backgroungColor: "#45A29E",margin: "1.5rem"}
    return (
        <div>
            <button style={styles}>{name}</button>
        </div>
    );
}