import Link from "next/link";
import Image from "next/image";
import Img from '../assets/images/header.png';

function Header() {
    return (
        <div className="Header parent">
            <Image src={Img} priority={true} alt="back" className="back-img" width={1500} height={1000} />
            <div className="wrapper">
                <h1 className="title">kANZEC “TrailBlazer”</h1>
                <p className="text">
                    Авточехол KANZEC для TrailBlazer (3 ряда), шотландка
                    Салон автомобиля - предмет особой гордости и заботы его
                    владельца. Одним из способов сделать интерьер салона
                    ухоженным и респектабельным являются чехлы на сиденья автомобиля.
                </p>
                <div className="buttons">
                    <Link href="/" className="explore btn-text">bATAFSIL</Link>
                    <Link href="/" className="explore btn-text">Katalog</Link>
                </div>
            </div>
            <div className="gradient"></div>
        </div>
    )
};

export default Header;