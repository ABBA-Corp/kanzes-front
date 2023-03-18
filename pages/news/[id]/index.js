import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import { COMMENTS_DATA_URL } from "@/pages/api/ApiUrl";
import UZ from '../../../public/locales/uz/common.json';
import RU from '../../../public/locales/ru/common.json';
import EN from '../../../public/locales/en/common.json';
import { fetchNewsApi, fetchNewsCommentApi } from "@/pages/api/Api";

function News() {

    const router = useRouter();
    const { id } = router.query;

    // input values

    const [nameValue, setNameValue] = useState("");
    const [textValue, setTextValue] = useState("");

    // invalid input states

    const [invalidName, setInvalidName] = useState(false);
    const [invalidText, setInvalidText] = useState(false);

    // change values and invalids functions

    function changeName(item) {
        setNameValue(item);
        setInvalidName(false);
    };

    function changeText(item) {
        setTextValue(item);
        setInvalidText(false);
    };

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    // data of comments

    const dataComments = useQuery('comments', fetchNewsCommentApi)

    // data of news

    const { isLoading, data } = useQuery('news', fetchNewsApi);

    function sendComment() {
        if (nameValue == "") {
            setInvalidName(true)
        } else if (textValue == "") {
            setInvalidText(true)
        } else {
            let data = { author_uz: nameValue, author_ru: nameValue, author_en: nameValue, description_uz: textValue, description_ru: textValue, description_en: textValue, date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`, news_id: id }
            fetch(COMMENTS_DATA_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json().then((request) => console.log(request)))

            setNameValue("");
            setTextValue("");
        }
    };

    if (isLoading) {
        return (
            <div className="News parent">
                <div className="wrapper">
                    <div className="header">
                        <h1 className="title">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="40%" />
                        </h1>
                    </div>
                    <div className="body">
                        <p className="text">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} />
                        </p>
                        <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" height="100%" />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="News parent">
            {data?.data.filter((c) => c.id == id).map((item) => (
                <div key={item.id} className="wrapper">
                    <div className="header">
                        <h1 className="title">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h1>
                    </div>
                    <div className="body">
                        <p className="text">{router.locale == "uz" ? item.description_uz : router.locale == "ru" ? item.description_ru : item.description_en}</p>
                        <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1500} height={1000} />
                    </div>
                    <h1 className="title comment-title">{t.comment}</h1>
                    <div className="new-comments">
                        <div className="comments">
                            {dataComments?.data?.data?.filter((k) => k.news_id == id).map((post) => (
                                <div key={post.id} className="comment">
                                    <div className="top">
                                        <h3 className="name">{post.author_uz}</h3>
                                        <p className="text">{post.date}</p>
                                    </div>
                                    <p className="text">{post.description_uz}</p>
                                </div>
                            ))}
                        </div>
                        <div className="forms">
                            <input type="text" className={`forms-control text ${invalidName && "red-line"}`} value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder={`${t.name}`} />
                            <textarea rows="5" className={`forms-control text ${invalidText && "red-line"}`} value={textValue} onChange={(e) => changeText(e.target.value)} placeholder={`${t.comment2}`}></textarea>
                            <button className="send-btn btn-text" onClick={sendComment}>{t.send}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default News;