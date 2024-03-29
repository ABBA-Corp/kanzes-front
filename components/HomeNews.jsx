import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Skeleton } from '@mui/material';
import { fetchNewsApi } from '@/pages/api/Api';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';

function HomeNews() {

    const router = useRouter();

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN

    const settings = {
        speed: 2000,
        dots: false,
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
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    // data of news

    const { isLoading, data } = useQuery('news', fetchNewsApi);

    if (isLoading) {
        return (
            <div className="HomeNews parent">
                <div className="wrapper">
                    <h1 className="title">
                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                    </h1>
                    <Slider {...settings} className="carousel">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                            <div key={index} className="product">
                                <div className="body">
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                                    <h4 className='name'>
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                                    </h4>
                                    <p className="text">
                                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                                    </p>
                                    <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="explore btn-text" height="3vw" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    }

    return (
        <div className="HomeNews parent">
            <div className="wrapper">
                <h1 className="title">{t.news}</h1>
                <Slider {...settings} className="carousel">
                    {data?.data.map((item) => (
                        <div key={item.id} className="product">
                            <div className="body">
                                <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                                <h4 className='name'>{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h4>
                                <Link href={`/news/${item.id}`} className="explore btn-text">{t.more}</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="bottom">
                    <Link href="/allnews" className="explore btn-text">{t.all}</Link>
                    <p className="text">{t.news_desc}</p>
                </div>
            </div>
        </div>
    )
};

export default HomeNews;