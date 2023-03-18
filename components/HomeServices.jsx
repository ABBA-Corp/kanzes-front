import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import Logo from '../assets/images/logo1.png';
import { fetchWorksApi } from "@/pages/api/Api";
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';
import { PlayArrowOutlined } from "@mui/icons-material";

function HomeServices() {

    const router = useRouter();

    const settings = {
        speed: 2000,
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        cssEase: "linear",
        autoplaySpeed: 6000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // video

    const [showVideo, setShowVideo] = useState(false);

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    // data of works

    const { isLoading, data } = useQuery('works', fetchWorksApi);

    if (isLoading) {
        return (
            <div className="HomeServices parent">
                <Slider {...settings} className="carousel">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className="product">
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }

    return (
        <>
            <div className="HomeServices parent" id="serv">
                <div className="wrapper">
                    <div className="header">
                        <Image src={Logo} priority={true} alt="logo" className="logo" />
                        <h1 className="title">{t.chexol_ornatish}</h1>
                    </div>
                    <div className="links">
                        <button className="explore btn-text" onClick={() => setShowVideo(true)}>video <PlayArrowOutlined className="icon" /></button>
                    </div>
                </div>
                <h4 className="name">{t.ornatilgandan_song}</h4>
                <Slider {...settings} className="carousel">
                    {data?.data.map((item) => (
                        <Link key={item.id} href={`/services`} className="product">
                            <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                            <p className="text">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</p>
                        </Link>
                    ))}
                </Slider>
            </div>
            {showVideo &&
                <div className="media">
                    <div className="contrast" onClick={() => setShowVideo(false)}></div>
                    <div className="video">
                        <iframe src="https://www.youtube.com/embed/hJLiUGhCrnk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            }
        </>
    )
};

export default HomeServices;