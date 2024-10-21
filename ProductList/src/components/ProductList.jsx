import PropsTwo from "../propsTwo/propsTwo"
import Img1 from "../assets/1.jpg"
import Img2 from "../assets/2.jpg"
import Img3 from "../assets/3.jpg"
import Img4 from "../assets/4.jpg"
import Img5 from "../assets/5.jpg"
import Img6 from "../assets/6.jpg"
import './ProductList.css'
// import Img1 from "https://marketplace.lookbooks.com/marketplace/explore/bag/";
const ProductList = () => {
    return (
        <div className="Lists">
        <PropsTwo  Img={Img1} Name="Standing Fan" Description="Ox Spacetek 18 Inches Standing Fan" Price="₦ 18,700" Style="style1"/>            
        <PropsTwo  Img={Img2} Name="Steam Iron" Description="Binatone Smoother Gliding Steam Iron" Price="₦ 13,500" Style="style2"/>            
        <PropsTwo  Img={Img3} Name="XIAOMI Redmi A3 Pro 6.88" Description="4GB RAM / 128GB ROM Android 14 - Midnight Black" Price="₦ 130,000" Style="style3"/>            
        <PropsTwo  Img={Img4} Name="Hisense AC" Description="Hisense 1.5HP Inverter Split Unit Air Conditioner (AS12DK1) with 1 Year Warranty" Price="₦ 435,658" Style="style4"/>            
        <PropsTwo  Img={Img5} Name="Agapeon" Description="Agapeon DIY 3D Mirror Wall Clock Stickers 40*40cm - Black" Price="₦ 3,529" Style="style5"/>            
        <PropsTwo  Img={Img6} Name="Tecno Pop 9 6.67" Description=" 4GB RAM / 128GB ROM Android 14 - White" Price="₦ 138,140" Style="style6"/>            
        </div>
    );
};

export default ProductList;

