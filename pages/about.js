import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { dataProducts } from './api/Api';
import Img from '../assets//images/header.png';

function About() {

    const router = useRouter();

    return (
        <div className="About parent">
            <div className="wrapper">
                <h1 className="title">biz haqimizda</h1>
                <div className="body">
                    <div className="products">
                        {dataProducts.slice(0, 15).map((item) => (
                            <Link key={item.id} href={`/products/${item.id}`} className="name">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</Link>
                        ))}
                    </div>
                    <div className="texts">
                        <p className="text">m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versionm </p>
                        <div className="cards">
                            <div className="info">
                                <h3 className='name'>14 yillik tajriba</h3>
                                <p className='footer-text'>m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                            </div>
                            <div className="info">
                                <h3 className='name'>14 yillik tajriba</h3>
                                <p className='footer-text'>m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                            </div>
                            <div className="info">
                                <h3 className='name'>14 yillik tajriba</h3>
                                <p className='footer-text'>m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                            </div>
                            <div className="info">
                                <h3 className='name'>14 yillik tajriba</h3>
                                <p className='footer-text'>m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy</p>
                            </div>
                        </div>
                        <p className="text">m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also </p>
                        <Image src={Img} priority alt="image" className="img" width={1000} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;