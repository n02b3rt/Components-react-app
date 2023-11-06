import "./Card.css";
// It is a wrapper component - it contains its styles which are repeated in many elements and to avoid redundancy we use it in many places
const Card = (props) =>{
    const classes = "card " + props.className;
    // by using props.className we extract the name of the class that is added to the component when it is called.
    return <div className={classes}>{props.children}</div>
    // props.children - makes sure that everything entered inside the Card component when it is called is passed on and built.
}

export default Card;