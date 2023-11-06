import CardContent from "./CardContent";

const Card = (props) =>{
    return(
      <ul id="concepts">
        <CardContent content={props.content[0]}></CardContent>
        <CardContent content={props.content[1]}></CardContent>
        <CardContent content={props.content[2]}></CardContent>
      </ul>
    )
}    

export default Card;
