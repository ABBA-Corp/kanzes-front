import Link from "next/link";
import Image from "next/image";
import Logo from '../assets/images/logo.png';
import { Telegram, WhatsApp, YouTube } from "@mui/icons-material";

function Footer() {
    return (
        <div className="Footer parent">
            <div className="wrapper">
                <div className="top-footer">
                    <div className="left">
                        <p className="text">Направления</p>
                        <div className="links">
                            <Link href="/" className="link footer-text">Программирование</Link>
                            <Link href="/" className="link footer-text">Маркетинг</Link>
                            <Link href="/" className="link footer-text">Управление</Link>
                            <Link href="/" className="link footer-text">Психология</Link>
                            <Link href="/" className="link footer-text">Маркетинг</Link>
                            <Link href="/" className="link footer-text">Программирование</Link>
                            <Link href="/" className="link footer-text">Психология</Link>
                            <Link href="/" className="link footer-text">Маркетинг</Link>
                            <Link href="/" className="link footer-text">Программирование</Link>
                            <Link href="/" className="link footer-text">Управление</Link>
                            <Link href="/" className="link footer-text">Маркетинг</Link>
                            <Link href="/" className="link footer-text">Программирование</Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="texts">
                            <div>
                                <p className="text">О Skillbox</p>
                                <Link href="/" className="link footer-text">Программирование</Link>
                                <Link href="/" className="link footer-text">Маркетинг</Link>
                                <Link href="/" className="link footer-text">Управление</Link>
                                <Link href="/" className="link footer-text">Психология</Link>
                                <Link href="/" className="link footer-text">Маркетинг</Link>
                                <Link href="/" className="link footer-text">Программирование</Link>
                                <Link href="/" className="link footer-text">Психология</Link>
                            </div>
                            <div>
                                <p className="text">Проекты</p>
                                <Link href="/" className="link footer-text">Психология</Link>
                                <Link href="/" className="link footer-text">Маркетинг</Link>
                                <Link href="/" className="link footer-text">Программирование</Link>
                                <Link href="/" className="link footer-text">Психология</Link>
                            </div>
                            <div>
                                <p className="text">Сотрудничество</p>
                                <Link href="/" className="link footer-text">Программирование</Link>
                                <Link href="/" className="link footer-text">Маркетинг</Link>
                                <Link href="/" className="link footer-text">Управление</Link>
                                <Link href="/" className="link footer-text">Психология</Link>
                                <Link href="/" className="link footer-text">Маркетинг</Link>
                                <Link href="/" className="link footer-text">Программирование</Link>
                                <Link href="/" className="link footer-text">Психология</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle-footer">
                    <div className="left">
                        <div>
                            <a href="tel:8 (800) 500-05-22" className="text">8 (800) 500-05-22</a>
                            <Link href="/" className="link footer-text">Контактный центр</Link>
                        </div>
                        <div>
                            <a href="tel:8 (800) 500-05-22" className="text">+7 499 444 90 36</a>
                            <Link href="/" className="link footer-text">Отдел заботы о пользователях</Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <a href="#" className="footer-text">г. Москва, Ленинский проспект, дом 6, строение 20</a>
                            <div className="icons">
                                <a href="#">
                                    <WhatsApp className="icon" />
                                </a>
                                <a href="#">
                                    <Telegram className="icon" />
                                </a>
                                <a href="#">
                                    <YouTube className="icon" />
                                </a>
                            </div>
                        </div>
                        <a href="mailto:hello@skillbox.ru" className="footer-text">hello@skillbox.ru</a>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="links">
                        <Link href="/" className="footer-text link">Оферта</Link>
                        <Link href="/" className="footer-text link">Оплата</Link>
                        <Link href="/" className="footer-text link">Правила пользования Платформой</Link>
                        <Link href="/" className="footer-text link">Политика конфиденциальности</Link>
                    </div>
                    <div className="texts">
                        <p className="footer-text">Мы используем файлы cookie, для персонализации сервисов и повышения удобства пользования сайтом. Если вы не согласны на их использование, поменяйте настройки браузера.</p>
                    </div>
                    <div className="footer-text">© Skillbox, 2023</div>
                    <div className="texts">
                        <p className="footer-text">Премии Рунета 2018, 2019, 2020, 2021</p>
                        <p className="footer-text">Участник Skolkovo</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;