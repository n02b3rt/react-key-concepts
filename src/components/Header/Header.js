export default function Header(props){
    return(
        <header>
            <img src={props.content.image} alt={props.content.imageAltText} />
            <h1>{props.content.title}</h1>
            <p>{props.content.description}</p>
        </header>
    );
}