import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useQuery } from "react-query";
import { useRouter } from 'next/router';
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchProductsApi } from "@/pages/api/Api";

function SliderProducts() {

    const router = useRouter();

    const settings = {
        speed: 2000,
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        cssEase: "linear",
        autoplaySpeed: 6000,
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

    // scroll animation

    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollValue(window.scrollY / 4)
        })
    }, [])

    // data of products

    const { isLoading, data } = useQuery('products', fetchProductsApi);

    if (isLoading) {
        return (
            <div className="SliderProducts parent">
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
        <div className="SliderProducts parent">
            <div className="products">
                {data?.data.map((item) => (
                    <Link key={item.id} href={`/products/${item.id}`} className="product" style={{ marginLeft: `${-scrollValue}px` }}>
                        <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                        <h3 className="sub-title">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h3>
                    </Link>
                ))}
                {data?.data.map((item) => (
                    <Link key={item.id} href={`/products/${item.id}`} className="product">
                        <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                        <h3 className="sub-title">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h3>
                    </Link>
                ))}
                {data?.data.map((item) => (
                    <Link key={item.id} href={`/products/${item.id}`} className="product">
                        <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1000} height={500} />
                        <h3 className="sub-title">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default SliderProducts;