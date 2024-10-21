import './PropsTwo.css'
const PropsTwo = (props) => {
    return (
        <div className={`ProductList ${props.Style}`}>
            <img src={props.Img} alt="" />
            <h1>{props.Name}</h1>
            <p>{props.Description}</p>
            <h2>{props.Price}</h2>
        </div>
    );
};

export default PropsTwo;