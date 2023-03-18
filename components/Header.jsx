import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Img from '../assets/images/header.png';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';

function Header() {

    const router = useRouter();

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN

    return (
        <div className="Header parent">
            <Image src={Img} priority={true} alt="back" className="back-img" width={1500} height={1000} />
            <div className="wrapper">
                <h1 className="title">{t.head_name}</h1>
                <p className="text">{t.header}</p>
                <div className="buttons">
                    <Link href="/" className="explore btn-text">{t.more}</Link>
                    <Link href="/" className="explore btn-text">{t.katalog}</Link>
                </div>
            </div>
            <div className="gradient"></div>
        </div>
    )
};

export default Header;