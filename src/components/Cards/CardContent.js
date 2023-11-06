import Box from "../UI/Box";

const CardContent = (props) => {

    return(
        <Box className="concept">
            <img src={props.content.image} alt={props.content.title} />
            <h2>{props.content.title} </h2>
            <p>{props.content.description}</p>
        </Box>
    );
}

export default CardContent;