import PropsOne from "../propsOne/propsOne"
import Img1 from "../assets/Image1.jpg"
import Img2 from "../assets/Image2.jpg"
import Img3 from "../assets/Image3.jpg"
import Img4 from "../assets/Image4.jpg"
import Img5 from "../assets/IMG.jpg"
import Img6 from "../assets/WhatsApp.jpg"
import './AppCard.css'
const AppCard = () => {
    return (
        < div className="Cards">
            <PropsOne Img={Img1} Name="Adedokun Farouq" Age="Age: 30" Location="Location: U.S.A" Style="first"/>
            <PropsOne Img={Img2} Name="Hamzah Alagbe" Age="Age: 28" Location="Location: Nigeria" Style="second"/>
            <PropsOne Img={Img3} Name="The Educationist" Age="Age: 25" Location="Location: France" Style="third"/>
            <PropsOne Img={Img4} Name="Faruk Lanre" Age="Age: 26" Location="Location: Ghana" Style="fourth"/>
            <PropsOne Img={Img5} Name="M.I.T" Age="Age: 30" Location="Location: Spain" Style="fifth"/>
            <PropsOne Img={Img6} Name="Mr Babajide" Age="Age: 29" Location="Location: Nigeria" Style="sixth"/>
        </div>
    );
};

export default AppCard;
