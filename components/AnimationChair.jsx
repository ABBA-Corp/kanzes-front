import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Img1 from '../assets/images/chair1.png';
import Img2 from '../assets/images/chair2.png';
import Img3 from '../assets/images/chair3.png';
import CardImg from '../assets/images/card.png';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';

function AnimationChair() {

    const router = useRouter();

    const [activeIndex, setActiveIndex] = useState(0);

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    return (
        <div className="AnimationChair parent" id='chair'>
            <div className="wrapper">
                <div className="cards">
                    <div className={`info ${activeIndex == 1 && "active line"} ${activeIndex == 0 && "active"}`}>
                        <Image src={CardImg} priority={true} alt="back" className="img" width={1500} height={1000} />
                        <div className="texts">
                            <h4 className="info-name">{t.d_1_name}</h4>
                            <p className="info-text">{t.d_1}</p>
                        </div>
                    </div>
                    <div className={`info ${activeIndex == 2 && "active line"} ${activeIndex == 0 && "active"}`}>
                        <Image src={CardImg} priority={true} alt="back" className="img" width={1500} height={1000} />
                        <div className="texts">
                            <h4 className="info-name">{t.d_2_name}</h4>
                            <p className="info-text">{t.d_2}</p>
                        </div>
                    </div>
                    <div className={`info ${activeIndex == 3 && "active line"} ${activeIndex == 0 && "active"}`}>
                        <Image src={CardImg} priority={true} alt="back" className="img" width={1500} height={1000} />
                        <div className="texts">
                            <h4 className="info-name">{t.d_3_name}</h4>
                            <p className="info-text">{t.d_3}</p>
                        </div>
                    </div>
                </div>
                <div className="imgs">
                    <Image src={Img1} priority={true} alt="back" className="img" width={1500} height={1000} onClick={() => setActiveIndex(1)} onPointerEnter={() => setActiveIndex(1)} onPointerOut={() => setActiveIndex(0)} />
                    <Image src={Img2} priority={true} alt="back" className="img" width={1500} height={1000} onClick={() => setActiveIndex(2)} onPointerEnter={() => setActiveIndex(2)} onPointerOut={() => setActiveIndex(0)} />
                    <Image src={Img3} priority={true} alt="back" className="img" width={1500} height={1000} onClick={() => setActiveIndex(3)} onPointerEnter={() => setActiveIndex(3)} onPointerOut={() => setActiveIndex(0)} />
                </div>
                <div className="titles">
                    <h4 className="sub-title">{t.d_desc_name1}</h4>
                    <p className="text">{t.d_desc1}</p>
                    <h4 className="sub-title">{t.d_desc_name2}</h4>
                    <p className="text">{t.d_desc2}</p>
                    <h4 className="sub-title">{t.d_desc_name3}</h4>
                    <p className="text">{t.d_desc3}</p>
                    <h4 className="sub-title">{t.d_desc_name4}</h4>
                    <p className="text">{t.d_desc4}</p>
                </div>
            </div>
        </div>
    )
};

export default AnimationChair;