import Link from "next/link";
import Image from "next/image";
import Img from '../assets/images/about.png';
import { Instagram, PlayArrow, Telegram } from "@mui/icons-material";

function HomeAbout() {
    return (
        <div className="HomeAbout parent">
            <div className="wrapper">
                <div className="texts">
                    <h1 className="title">Biz haqimizda</h1>
                    <p className="text">Вас приветствует магазин электроники MacBro. У нас вы можете найти всю продукцию Apple. Уже более 14 лет мы консультируем и подбираем нужный гаджет для наших покупателей. За время нашего существования на рынке мы успели оптимизировать доставку по межгороду, так что вы получите гаджет в течении трех дней, а если вам необходима доставка по городу мы доставим гаджет в течении 2 часов. 90% наших клиентов становятся постоянными покупателями, потому что мы даем гарантию на один год.</p>
                    <div className="buttons">
                        <Link href="/about" className="explore text">Batafsil bilish</Link>
                        <div className="explore text">Batafsil video <PlayArrow className="icon" /></div>
                        <a href="#" className="explore social text"><Telegram /></a>
                        <a href="#" className="explore social text"><Instagram /></a>
                    </div>
                </div>
                <div className="imgs">
                    <Image src={Img} priority={true} alt="back" className="img" width={1500} height={1000} />
                </div>
            </div>
        </div>
    )
};

export default HomeAbout;