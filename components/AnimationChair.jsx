import Image from 'next/image';
import { useState } from 'react';
import Img1 from '../assets/images/chair1.png';
import Img2 from '../assets/images/chair2.png';
import Img3 from '../assets/images/chair3.png';
import CardImg from '../assets/images/card.png';

function AnimationChair() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="AnimationChair parent">
            <div className="wrapper">
                <div className="cards">
                    <div className={`info ${activeIndex == 1 && "active line"} ${activeIndex == 0 && "active"}`}>
                        <Image src={CardImg} priority={true} alt="back" className="img" width={1500} height={1000} />
                        <div className="texts">
                            <h4 className="info-name">Эко кожа</h4>
                            <p className="info-text">се варианты продукции представлены в различной цветовой Для каждого кузова разрабатывается своё уникальное лекало. Таким образом чехлы </p>
                        </div>
                    </div>
                    <div className={`info ${activeIndex == 2 && "active line"} ${activeIndex == 0 && "active"}`}>
                        <Image src={CardImg} priority={true} alt="back" className="img" width={1500} height={1000} />
                        <div className="texts">
                            <h4 className="info-name">Эко кожа</h4>
                            <p className="info-text">се варианты продукции представлены в различной цветовой Для каждого кузова разрабатывается своё уникальное лекало. Таким образом чехлы </p>
                        </div>
                    </div>
                    <div className={`info ${activeIndex == 3 && "active line"} ${activeIndex == 0 && "active"}`}>
                        <Image src={CardImg} priority={true} alt="back" className="img" width={1500} height={1000} />
                        <div className="texts">
                            <h4 className="info-name">Эко кожа</h4>
                            <p className="info-text">се варианты продукции представлены в различной цветовой Для каждого кузова разрабатывается своё уникальное лекало. Таким образом чехлы </p>
                        </div>
                    </div>
                </div>
                <div className="imgs">
                    <Image src={Img1} priority={true} alt="back" className="img" width={1500} height={1000} onClick={() => setActiveIndex(1)} onPointerEnter={() => setActiveIndex(1)} onPointerOut={() => setActiveIndex(0)} />
                    <Image src={Img2} priority={true} alt="back" className="img" width={1500} height={1000} onClick={() => setActiveIndex(2)} onPointerEnter={() => setActiveIndex(2)} onPointerOut={() => setActiveIndex(0)} />
                    <Image src={Img3} priority={true} alt="back" className="img" width={1500} height={1000} onClick={() => setActiveIndex(3)} onPointerEnter={() => setActiveIndex(3)} onPointerOut={() => setActiveIndex(0)} />
                </div>
                <div className="titles">
                    <h4 className="sub-title">Materiali</h4>
                    <p className="text">Они выполнены исключительно из качественных автотканей и экокожи.</p>
                    <h4 className="sub-title">Anatomiya</h4>
                    <p className="text">Такие чехлы гарантируют надежное сцепление с родным сидением, не скользят и не сползают при резких поворотах или виражах. Они идеально повторяют рельеф автокресел.</p>
                    <h4 className="sub-title">Xavfsizlik</h4>
                    <p className="text">Для каждого кузова разрабатывается своё уникальное лекало. Таким образом чехлы удобно устанавливать, и они сидят на ваших сидениях, как штатная перетяжка.</p>
                    <h4 className="sub-title">Kafolat</h4>
                    <p className="text">Авточехлы производятся таким образом, что они не препятствуют раскрытию подушек безопасности. На них есть специальные разрывные швы.</p>
                </div>
            </div>
        </div>
    )
};

export default AnimationChair;