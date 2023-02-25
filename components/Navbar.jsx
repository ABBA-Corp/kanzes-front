import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Searching from "./Searching";
import { useRouter } from "next/router";
import Logo from '../assets/images/logo.png';
import { ArrowDropDown, Close, MenuRounded, SearchRounded, ShoppingCartOutlined, SortRounded } from "@mui/icons-material";

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
    }

    // search methods

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className={`Navbar`}>
            <div className="gradient"></div>
            <nav className="navbar">
                <Link href="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
                    <Image src={Logo} priority={true} alt="logo" className="img" />
                </Link>
                <div className={`navbar-nav ${showMenu && "show-navbar"}`}>
                    <Link href="/" className="link text">Bizning do’konlarimiz</Link>
                    <Link href="/" className="link text">Kompaniyamiz haqida</Link>
                    <Link href="/" className="link text">Social media</Link>
                    <Link href="/" className="link text">Bizning do’konlarimiz</Link>
                    <div className="language">
                        <div className="lang-title sub-title" onClick={() => setLanguage(!language)}>UZ</div>
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
                    <a href="tel:+99899-313-1501" className="tel-btn sub-title">
                        Aloqa
                    </a>
                </div>
                <MenuRounded className="menu-icon" onClick={() => setShowMenu(true)} />
            </nav>
            <nav className="bottom-navbar">
                <div className="catalog-btn sub-title" onClick={() => setShowCatalog(true)}><SortRounded className="list-icon" /> Catalog</div>
                <div className={`catalogs ${showCatalog && "show-catalog"}`}>
                    <div className="drop sub-title">Avto cases <ArrowDropDown className="icon" /></div>
                    <div className="drop sub-title">Aksesuvar <ArrowDropDown className="icon" /></div>
                    <div className="drop sub-title">Issiq chexol <ArrowDropDown className="icon" /></div>
                    <div className="drop sub-title">Kovriklar <ArrowDropDown className="icon" /></div>
                    <div className="drop sub-title" style={{ border: "none" }}>MAxsus chexol</div>
                    <Close className="close-icon" onClick={() => setShowCatalog(false)} />
                </div>
                <div className="tool-icons">
                    <SearchRounded className="search" onClick={() => setShowSearch(true)} />
                    <div className="shopping">
                        <ShoppingCartOutlined className="cart" />
                    </div>
                </div>
            </nav>
            {showSearch &&
                <Searching setShowSearch={setShowSearch} />
            }
        </div>
    );
};

export default Navbar;