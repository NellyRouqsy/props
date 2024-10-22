import './propsOne.css'
const PropsOne = (props) => {
    return (
        <div className={`ProfileCard ${props.Style}`}>
            <img src={props.Img} alt="" />
            <h1>{props.Name}</h1>
            <h2>{props.Age}</h2>
            <p>{props.Location}</p>
        </div>
    );
};

export default PropsOne;
