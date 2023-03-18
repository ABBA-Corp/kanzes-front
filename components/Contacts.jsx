import { useState } from "react";
import { useRouter } from "next/router";
import UZ from '../public/locales/uz/common.json';
import RU from '../public/locales/ru/common.json';
import EN from '../public/locales/en/common.json';

function Contacts({ changeModal }) {

    const router = useRouter();

    // input values

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
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

    function changeEmail(item) {
        setEmailValue(item);
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "6261569509:AAERpWccOMkKdkQpVPURVNkRBdtUi4c2KOE",
        chatID: "-1001603637510",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AEmaili: ${emailValue}`
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
            setNameValue("");
            setEmailValue("");
            setNumberValue("");
        }
    };

    // i18next

    const t = router.locale == "uz" ? UZ : router.locale == "ru" ? RU : EN;

    return (
        <div className="Contacts parent" id="contacts">
            <div className="wrapper">
                <div className="forms">
                    <div className="texts">
                        <h1 className="title">{t.contact1}</h1>
                        <p className="text">{t.contact2}</p>
                    </div>
                    <div className="inputs">
                        <input type="text" className={`forms-control text ${invalidName && "red-line"}`} value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder={`${t.name}`} />
                        <input type="number" className={`forms-control text ${invalidNumber && "red-line"}`} value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder={`${t.phone}`} />
                        <input type="text" className={`forms-control text`} value={emailValue} onChange={(e) => changeEmail(e.target.value)} placeholder={`${t.email}`} />
                        <a href="#" style={{ opacity: 0 }} className="desc">Нажимая на кнопку, я соглашаюсь на  обработку персональных данных  и  с правилами пользования Платформой</a>
                        <button className="send-btn btn-text" onClick={sendMessage}>{t.send}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacts;