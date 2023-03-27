import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Searching from "./Searching";
import { useRouter } from "next/router";
import Logo from '../assets/images/logo.png';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';
import { Close, MenuRounded, SearchRounded, SortRounded } from "@mui/icons-material";

const Navbar = () => {

    const router = useRouter();

    // navbar menu or navbar-nav

    const [showMenu, setShowMenu] = useState(false);
    const [showCatalog, setShowCatalog] = useState(false);

    // language

    const [language, setLanguage] = useState(false);

    function changeLocaleLang(item) {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: item })
        setLanguage(!language)
        setShowMenu(false)
    };

    // search methods

    const [showSearch, setShowSearch] = useState(false);

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    return (
        <div className={`Navbar`}>
            <div className="gradient"></div>
            <nav className="navbar">
                <Link href="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
                    <Image src={Logo} priority={true} alt="logo" className="img" />
                </Link>
                <div className={`navbar-nav ${showMenu && "show-navbar"}`}>
                    <Link href="/#about" scroll={false} className="link text" onClick={() => setShowMenu(false)}>{t.nav1}</Link>
                    <Link href="/#serv" scroll={false} className="link text" onClick={() => setShowMenu(false)}>{t.nav2}</Link>
                    <Link href="/#contacts" scroll={false} className="link text" onClick={() => setShowMenu(false)}>{t.nav3}</Link>
                    <Link href="/#sort" scroll={false} className="link text" onClick={() => setShowMenu(false)}>{t.nav4}</Link>
                    <div className="language">
                        <div className="lang-title sub-title" onClick={() => setLanguage(!language)}>{router.locale.toUpperCase()}</div>
                        {language &&
                            <div className="lang-menu">
                                <div className="lang-items sub-title" onClick={() => changeLocaleLang("uz")}>UZ</div>
                                <div className="lang-items sub-title" onClick={() => changeLocaleLang("ru")}>RU</div>
                                <div className="lang-items sub-title" onClick={() => changeLocaleLang("en")}>EN</div>
                            </div>
                        }
                        {language &&
                            <div className="contrast-0" onClick={() => setLanguage(!language)}></div>
                        }
                    </div>
                    <Close className="close-icon" onClick={() => setShowMenu(false)} />
                    <a href="tel:+998903207480" className="tel-btn sub-title">{t.nav5}</a>
                </div>
                <MenuRounded className="menu-icon" onClick={() => setShowMenu(true)} />
            </nav>
            <nav className="bottom-navbar">
                <div className="catalog-btn sub-title" onClick={() => setShowCatalog(true)}><SortRounded className="list-icon" /> Catalog</div>
                <div className={`catalogs ${showCatalog && "show-catalog"}`}>
                    <Link href="/products/10" scroll={false} className="drop sub-title">{t.nav_bot1}</Link>
                    <div className="line"></div>
                    <Link href="/products/14" scroll={false} className="drop sub-title">{t.nav_bot2}</Link>
                    <div className="line"></div>
                    <Link href="/products/15" scroll={false} className="drop sub-title">{t.nav_bot3}</Link>
                    <div className="line"></div>
                    <Link href="/#faq" scroll={false} className="drop sub-title">{t.nav_bot4}</Link>
                    <div className="line"></div>
                    <Link href="/#serv" scroll={false} className="drop sub-title" style={{ border: "none" }}>{t.nav_bot5}</Link>
                    <Close className="close-icon" onClick={() => setShowCatalog(false)} />
                </div>
                <div className="tool-icons">
                    <SearchRounded className="search" onClick={() => setShowSearch(true)} />
                </div>
            </nav>
            {showSearch &&
                <Searching setShowSearch={setShowSearch} />
            }
        </div>
    );
};

export default Navbar;