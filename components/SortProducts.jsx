import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import { fetchProductsApi } from "@/pages/api/Api";

function SortProducts() {

    const router = useRouter();

    const settings = {
        speed: 2000,
        dots: false,
        // autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        cssEase: "linear",
        autoplaySpeed: 4000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    };

    // data of products

    const { isLoading, data } = useQuery('products', fetchProductsApi);

    if (isLoading) {
        return (
            <div className="SortProducts parent">
                <div className="wrapper">
                    <h1 className="title">
                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                    </h1>
                    <p className="text">
                        <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} />
                    </p>
                </div>
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
        <div className="SortProducts parent">
            <div className="wrapper">
                <h1 className="title">Material orqali saralash</h1>
                <p className="text">Авточехол KANZEC для TrailBlazer (3 ряда), шотландка Салон автомобиля - предмет особой гордости и заботы его владельца.</p>
            </div>
            <Slider {...settings} className="carousel">
                {data?.data.map((item) => (
                    <Link key={item.id} href={`/products/${item.id}`} className="product">
                        <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                        <div className="texts">
                            <h4 className="name">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h4>
                            <p className="text">{router.locale == "uz" ? item.description_uz : router.locale == "ru" ? item.description_ru : item.description_en}</p>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    )
};

export default SortProducts;