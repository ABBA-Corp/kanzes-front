import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import { Close } from "@mui/icons-material";
import TopProducts from "@/components/TopProducts";
import { fetchProductsApi } from "@/pages/api/Api";
import UZ from '../../../public/locales/uz/common.json';
import RU from '../../../public/locales/ru/common.json';
import EN from '../../../public/locales/en/common.json';

function Products() {

    const router = useRouter();
    const { id } = router.query;

    const [mainImg, setMainImg] = useState("");
    const [countNum, setCountNum] = useState(1);

    function increment() {
        setCountNum(c => c + 1)
    };

    function decrement() {
        setCountNum(c => c == 1 ? c : c - 1)
    };

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    // modal

    const [showModal, setShowModal] = useState(false);

    function changeModal() {
        setShowModal(!showModal)
    }

    // contact-modal

    const [showContactModal, setShowContactModal] = useState(false);

    function changeContactModal() {
        setShowContactModal(!showContactModal)
    }

    // input values

    const [prodValue, setProdValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");

    // invalid input states

    const [invalidName, setInvalidName] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    // change values and invalids functions

    function changeNumber(item) {
        setNumberValue(item);
        setInvalidNumber(false);
    };

    function changeName(item) {
        setNameValue(item);
        setInvalidName(false);
    };

    function changeProdValue(item) {
        setProdValue(item);
        changeContactModal();
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "6261569509:AAERpWccOMkKdkQpVPURVNkRBdtUi4c2KOE",
        chatID: "-1001603637510",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AXarid qilmoqchi bo'lgan mahsulot nomi: "${prodValue}"; %0AXarid qilmoqchi bo'lgan mahsulot soni: ${countNum}`
    };

    function sendMessage() {
        if (nameValue === "") {
            setInvalidName(true)
        } else if (numberValue === "") {
            setInvalidNumber(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method: "GET"
            })
                .then(success => {
                    console.log('send message')
                }, error => {
                    console.log(error)
                })

            changeModal();
            setCountNum(1);
            setNameValue("");
            setNumberValue("");
            changeContactModal();
        }
    };

    // data of products

    const { isLoading, data } = useQuery('products', fetchProductsApi);

    if (isLoading) {
        return (
            <div className="Products parent">
                <div className="wrapper">
                    <div className="imgs">
                        <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="main-img" />
                        <div className="additional-imgs">
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="img" />
                        </div>
                    </div>
                    <div className="infos">
                        <h1 className="title">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="50%" />
                        </h1>
                        <p className="text">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="80%" />
                        </p>
                        <div className="colors">
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="color" />
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="color" />
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="color" />
                            <Skeleton variant='rounded' sx={{ bgcolor: 'grey.700' }} className="color" />
                        </div>
                        <p className="text">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                        </p>
                        <p className="text">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                        </p>
                        <p className="text">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                        </p>
                        <p className="text">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="100%" />
                        </p><p className="text">
                            <Skeleton variant='text' sx={{ bgcolor: 'grey.700' }} width="80%" />
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="Products parent">
                {data?.data.filter((c) => c.id == id).map((item) => (
                    <div key={item.id} className="wrapper">
                        <div className="imgs">
                            <Image loader={() => `${mainImg ? mainImg : item.image ? item.image : ""}?w=1500&q=1000`} src={mainImg ? mainImg : item.image} priority alt="image" className="main-img" width={1500} height={1000} />
                            <div className="additional-imgs">
                                {item.image &&
                                    <Image loader={() => `${item.image ? item.image : ""}?w=1500&q=1000`} src={item.image ? item.image : ""} priority alt="image" className="img" width={1500} height={1000} onClick={() => setMainImg(item.image)} />
                                }
                                {item.image1 &&
                                    <Image loader={() => `${item.image1 ? item.image1 : ""}?w=1500&q=1000`} src={item.image1 ? item.image1 : ""} priority alt="image" className="img" width={1500} height={1000} onClick={() => setMainImg(item.image1)} />
                                }
                                {item.image2 &&
                                    <Image loader={() => `${item.image2 ? item.image2 : ""}?w=1500&q=1000`} src={item.image2 ? item.image2 : ""} priority alt="image" className="img" width={1500} height={1000} onClick={() => setMainImg(item.image2)} />
                                }
                                {item.image3 &&
                                    <Image loader={() => `${item.image3 ? item.image3 : ""}?w=1500&q=1000`} src={item.image3 ? item.image3 : ""} priority alt="image" className="img" width={1500} height={1000} onClick={() => setMainImg(item.image3)} />
                                }
                            </div>
                        </div>
                        <div className="infos">
                            <h1 className="title">{router.locale == "uz" ? item.name_uz : router.locale == "ru" ? item.name_ru : item.name_en}</h1>
                            <p className="text">{t.choose_color}</p>
                            <div className="colors">
                                <div className="color" style={{ backgroundColor: `${item.color1}` }}></div>
                                <div className="color" style={{ backgroundColor: `${item.color2}` }}></div>
                                <div className="color" style={{ backgroundColor: `${item.color3}` }}></div>
                                <div className="color" style={{ backgroundColor: `${item.color4}` }}></div>
                            </div>
                            <div className="text">{t.price}: <h3 className="name">{item.price} {t.valuta}</h3></div>
                            <div className="buy">
                                <h3 className="name">{t.product}</h3>
                                <div className="btns">
                                    <button className="count btn-text" onClick={decrement}>К</button>
                                    <h3 className="count-num title">{countNum}</h3>
                                    <button className="count btn-text" onClick={increment}>К</button>
                                    <button className="buy-btn btn-text" onClick={() => changeProdValue(item.name_uz)}>{t.btn}</button>
                                </div>
                            </div>
                            <p className="text">{router.locale == "uz" ? item.description_uz : router.locale == "ru" ? item.description_ru : item.description_en}</p>
                        </div>
                    </div>
                ))}
            </div>
            <TopProducts />
            {showContactModal &&
                <div className="ContactModal">
                    <div className="forms">
                        <Close className="close-icon" onClick={() => changeContactModal()} />
                        <input type="text" className={`forms-control text ${invalidName && "red-line"}`} value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder="Ism" />
                        <input type="number" className={`forms-control text ${invalidNumber && "red-line"}`} value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder="Telefon raqam" />
                        <button className="send-btn btn-text" onClick={sendMessage}>Отправить</button>
                    </div>
                    <div className="contrast" onClick={() => changeContactModal()}></div>
                </div>
            }
            {showModal &&
                <Modal changeModal={changeModal} />
            }
        </>
    )
};

export default Products;