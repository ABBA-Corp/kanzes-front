import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { fetchProductsApi } from './api/Api';
import Img from '../assets//images/header.png';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';

function About() {

    const router = useRouter();

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    // data of products

    const { data } = useQuery('products', fetchProductsApi);

    return (
        <div className="About parent">
            <div className="wrapper">
                <h1 className="title">{t.about_text}</h1>
                <div className="body">
                    <div className="products">
                        {data?.data?.slice(0, 15).map((item) => (
                            <Link key={item.id} href={`/products/${item.id}`} className="name">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</Link>
                        ))}
                    </div>
                    <div className="texts">
                        <p className="text">{t.about_text2}</p>
                        <Image src={Img} priority alt="image" className="img" width={1000} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;