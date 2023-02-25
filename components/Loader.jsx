import Image from 'next/image';
import Img from '../assets/images/logo2.png';

function Loader() {
    return (
        <div className="Loader">
            <h1 className="load-title">
                KANZEC
                <Image src={Img} priority={true} alt="back" className="logo" width={1000} height={500} />
            </h1>
        </div>
    )
};

export default Loader;