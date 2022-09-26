import './Card.css'

function Card(props){
    const classname = 'card' + props.className
    return (
        <div className={classname}>{props.children}</div> //.children is content in between the opening and closing tags
    )
}
//: use this way to create customized tag with some same attributes.
export default Card;