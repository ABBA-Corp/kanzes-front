import Image from "next/image";
import Img from '../assets/images/header.png';

function Advantages() {
    return (
        <div className="Advantages parent">
            <Image src={Img} priority={true} alt="back" className="back-img" width={1500} height={1000} />
            <div className="wrapper">
                <h1 className="title">Nega aynan “Kanzec“</h1>
                <div className="infos">
                    <div className="advantage">
                        <h4 className="name">Собственное производство</h4>
                        <p className="text">работа на прямую с фабрикой, а не с посредниками</p>
                    </div>
                    <div className="advantage">
                        <h4 className="name">Конструктор чехлов</h4>
                        <p className="text">возможность выбора любого сочетание цвета и модели чехла</p>
                    </div>
                    <div className="advantage">
                        <h4 className="name">Собственный шоу-рум</h4>
                        <p className="text">в наличии большой ассортимент готовых чехлов, меховых накидок и аксессуаров</p>
                    </div>
                    <div className="advantage">
                        <h4 className="name">Профессиональная установка</h4>
                        <p className="text">специализированные установочные центры + выезд мастера</p>
                    </div>
                    <div className="advantage">
                        <h4 className="name">Авто-ателье</h4>
                        <p className="text">перетянем любой элемент салона авто в кожу (большой выбор материала)</p>
                    </div>
                    <div className="advantage">
                        <h4 className="name">Гарантия</h4>
                        <p className="text">перетянем любой элемент салона авто в кожу (большой выбор материала)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Advantages;