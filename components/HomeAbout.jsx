import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Img from '../assets/images/about.png';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';
import { Instagram, PlayArrow, Telegram } from "@mui/icons-material";

function HomeAbout() {

    const router = useRouter();

    // video

    const [showVideo, setShowVideo] = useState(false);

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN

    return (
        <>
            <div className="HomeAbout parent" id="about">
                <div className="wrapper">
                    <div className="texts">
                        <h1 className="title">{t.about}</h1>
                        <p className="text">{t.about_text2}</p>
                        <div className="buttons">
                            <Link href="/about" className="explore text">{t.more}</Link>
                            <div className="explore text" onClick={() => setShowVideo(true)}>{t.about_video} <PlayArrow className="icon" /></div>
                            <a href="https://t.me/kanzec" target="_blank" rel="noreferrer" className="explore social text"><Telegram /></a>
                            <a href="https://www.instagram.com/kanzec.uz/" target="_blank" rel="noreferrer" className="explore social text"><Instagram /></a>
                        </div>
                    </div>
                    <div className="imgs">
                        <Image src={Img} priority={true} alt="back" className="img" width={1500} height={1000} />
                    </div>
                </div>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/XNQI5q13qm0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    )
};

export default HomeAbout;