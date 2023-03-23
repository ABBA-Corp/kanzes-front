import { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import { fetchFaqApi } from "@/pages/api/Api";
import { AddRounded } from "@mui/icons-material";
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';

function FAQ() {

    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(null);

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    // data of FAQ

    const { isLoading, data } = useQuery('faq', fetchFaqApi);

    const dataFAQ = data?.data;

    if (isLoading) {
        return (
            <div className="FAQ parent">
                <div className="wrapper">
                    <h1 className="title">
                        <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                    </h1>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <div key={index} className="bar">
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} height="6vw" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="FAQ parent" id="faq">
            <div className="wrapper">
                <h1 className="title">{t.faq}</h1>
                {dataFAQ?.map((item) => (
                    <div key={item.id} className="bar">
                        <div className="question">
                            <h4 className="name">{router.locale == "uz" ? item.question_uz : router.locale == "ru" ? item.question_ru : item.question_en}</h4>
                            <AddRounded onClick={() => activeIndex != dataFAQ?.indexOf(item) ? setActiveIndex(dataFAQ?.indexOf(item)) : setActiveIndex(null)} className={`icon ${activeIndex == dataFAQ?.indexOf(item) && "active-icon"}`} />
                        </div>
                        <div className={`answer ${activeIndex == dataFAQ?.indexOf(item) && "active-answer"}`}>
                            <p className="text">{router.locale == "uz" ? item.answer_uz : router.locale == "ru" ? item.answer_ru : item.answer_en}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FAQ;