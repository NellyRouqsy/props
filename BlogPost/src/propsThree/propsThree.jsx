import "./PropsThree.css"
const PropsThree = (props) => {
    return (        
        <div className={`BlogPost ${props.Styles}`}>
            <h3 style={{fontSize:14}}>{props.Date}</h3>
            <h1>{props.Title}</h1>
            <h2>{props.Author}</h2>
            <p>{props.Content}</p>
        </div>
    );
};

export default PropsThree;
