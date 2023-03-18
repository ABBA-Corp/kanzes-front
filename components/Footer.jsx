import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from '../assets/images/logo4.png';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';
import { Instagram, Telegram, YouTube } from "@mui/icons-material";

function Footer() {

    const router = useRouter();

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    return (
        <div className="Footer parent">
            <div className="wrapper">
                <div className="socials">
                    <div className="logo">
                        <Image src={Logo} priority={true} alt="logo" className="img" />
                        <h3 className="title">{t.slogan}</h3>
                    </div>
                    <p className="text">{t.footer1}:</p>
                    <div className="icons">
                        <a href="https://t.me/kanzec" target="_blank" rel="noreferrer" className="icon">
                            <Telegram className="ic" />
                        </a>
                        <a href="https://www.instagram.com/kanzec.uz/" target="_blank" rel="noreferrer" className="icon">
                            <Instagram className="ic" />
                        </a>
                        <a href="https://www.youtube.com/@kanzecuz7345/videos" target="_blank" rel="noreferrer" className="icon">
                            <YouTube className="ic" />
                        </a>
                        <a href="tel:+998903187480" className="tel-btn text">+99890 318 74 80</a>
                    </div>
                </div>
                <div className="card-links">
                    <div className="tool">
                        <div className="name">{t.footer2}</div>
                        <Link href="/" className="text">{t.footer3}</Link>
                        <Link href="/" className="text">{t.footer4}</Link>
                        <Link href="/" className="text">{t.footer5}</Link>
                    </div>
                    <div className="tool">
                        <div className="name">{t.footer6}</div>
                        <Link href="/" className="text">{t.footer7}</Link>
                        <Link href="/" className="text">{t.footer8}</Link>
                        <Link href="/" className="text">{t.footer9}</Link>
                        <Link href="/" className="text">{t.footer10}</Link>
                    </div>
                </div>
            </div>
            <div className="copyriting">
                <p className="text">{t.foot13} © Kanzec | {t.foot14}</p>
                <a href="https://www.instagram.com/abba.uz/" target="_blank" rel="noreferrer" className="text">abba marketing</a>
                <p className="text">- {t.foot15}</p>
                <a href="https://www.instagram.com/abba.uz/" target="_blank" rel="noreferrer" className="text">ABBA</a>
            </div>
        </div>
    )
};

export default Footer;