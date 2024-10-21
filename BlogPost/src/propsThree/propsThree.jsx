const PropsThree = (props) => {
    return (        
        <div className={`BlogPost ${props.Styles}`}>
            <h1>{props.Title}</h1>
            <h2>{props.Author}</h2>
            <p>{props.Content}</p>
            <p>{props.Date}</p>
        </div>
    );
};

export default PropsThree;
