import { useState } from "react";

function Contacts({ changeModal }) {

    // input values

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [numberValue, setNumberValue] = useState("");

    // invalid input states

    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
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
        setInvalidEmail(false);
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

    return (
        <div className="Contacts parent">
            <div className="wrapper">
                <div className="forms">
                    <div className="texts">
                        <h1 className="title">Поможем в выборе!</h1>
                        <p className="text">Если у вас есть вопросы о формате или вы не знаете, что выбрать, оставьте свой номер — мы позвоним, чтобы ответить на все ваши вопросы.</p>
                    </div>
                    <div className="inputs">
                        <input type="text" className={`forms-control text ${invalidName && "red-line"}`} value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder="Ism" />
                        <input type="number" className={`forms-control text ${invalidNumber && "red-line"}`} value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder="Telefon raqam" />
                        <input type="text" className={`forms-control text`} value={emailValue} onChange={(e) => changeEmail(e.target.value)} placeholder="Email" />
                        <a href="#" className="desc">Нажимая на кнопку, я соглашаюсь на  обработку персональных данных  и  с правилами пользования Платформой</a>
                        <button className="send-btn btn-text" onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacts;