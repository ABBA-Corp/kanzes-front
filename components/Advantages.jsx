import Image from "next/image";
import { useRouter } from "next/router";
import Img from '../assets/images/header.png';
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';

function Advantages() {

    const router = useRouter();

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    return (
        <div className="Advantages parent">
            <Image src={Img} priority={true} alt="back" className="back-img" width={1500} height={1000} />
            <div className="wrapper">
                <h1 className="title">{t.why_kanzec_name}</h1>
                <div className="infos">
                    <div className="advantage">
                        <p className="text">{t.why_desc1}</p>
                    </div>
                    <div className="advantage">
                        <p className="text">{t.why_desc2}</p>
                    </div>
                    <div className="advantage">
                        <p className="text">{t.why_desc3}</p>
                    </div>
                    <div className="advantage">
                        <p className="text">{t.why_desc4}</p>
                    </div>
                    <div className="advantage">
                        <p className="text">{t.why_desc5}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Advantages;